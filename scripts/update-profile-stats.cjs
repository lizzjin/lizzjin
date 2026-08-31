const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const crypto = require('node:crypto');
const run = promisify(execFile);
const OWNER = 'lizzjin';
const REPOSITORY = 'lizzjin/lizzjin';
const CARD_PATHS = ['assets/github-stats.svg', 'assets/top-languages.svg'];

async function api(endpoint, method = 'GET', body) {
  const args = ['api', endpoint, '--method', method];
  if (body !== undefined) {
    // Keep JSON, including SVG content, out of command-line arguments.
    return new Promise((resolve, reject) => {
      const child = execFile('gh', [...args, '--input', '-'], { maxBuffer: 8 * 1024 * 1024, encoding: 'utf8' }, (error, stdout) => {
        if (error) return reject(error);
        try { resolve(JSON.parse(stdout)); } catch (parseError) { reject(parseError); }
      });
      child.stdin.end(JSON.stringify(body));
    });
  }
  const { stdout } = await run('gh', args, { maxBuffer: 8 * 1024 * 1024, encoding: 'utf8' });
  return JSON.parse(stdout);
}

function summarize(profile, repositories, languageMaps, pullRequests, date) {
  const originals = repositories.filter(repo => !repo.private && !repo.fork);
  const totals = new Map();
  for (const repo of originals) {
    for (const [name, bytes] of Object.entries(languageMaps[repo.full_name] || {})) {
      if (Number.isFinite(bytes) && bytes > 0) totals.set(name, (totals.get(name) || 0) + bytes);
    }
  }
  let languages = [...totals].map(([name, bytes]) => ({ name, bytes })).sort((a, b) => b.bytes - a.bytes || a.name.localeCompare(b.name));
  const totalBytes = languages.reduce((sum, language) => sum + language.bytes, 0);
  if (languages.length > 6) languages = [...languages.slice(0, 5), { name: 'Other', bytes: languages.slice(5).reduce((sum, language) => sum + language.bytes, 0) }];
  return {
    login: profile.login, date,
    repositories: originals.length,
    stars: originals.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    followers: profile.followers,
    pullRequests,
    languages: languages.map(language => ({ ...language, share: language.bytes / totalBytes })),
  };
}

async function collect() {
  const profile = await api(`users/${OWNER}`);
  const repositories = [];
  for (let page = 1; ; page++) {
    const batch = await api(`users/${OWNER}/repos?type=owner&per_page=100&page=${page}`);
    repositories.push(...batch);
    if (batch.length < 100) break;
  }
  const originals = repositories.filter(repo => !repo.private && !repo.fork);
  const languageMaps = Object.fromEntries(await Promise.all(originals.map(async repo => [repo.full_name, await api(`repos/${repo.full_name}/languages`)])));
  const query = encodeURIComponent(`author:${OWNER} type:pr is:public`);
  const search = await api(`search/issues?q=${query}&per_page=1`);
  if (search.incomplete_results) throw Error('Incomplete public PR data; retaining the existing cards.');
  return summarize(profile, repositories, languageMaps, search.total_count, new Date().toISOString().slice(0, 10));
}

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
const colors = ['#6CEBD2', '#9887EF', '#65ACF0', '#F1C77A', '#E595B5', '#8196AC'];
function shell(width, title, subtitle, body, footer) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="232" viewBox="0 0 ${width} 232" role="img" aria-labelledby="title desc">
<title id="title">${escape(title)}</title>
<desc id="desc">${escape(subtitle)}. ${escape(footer)}</desc>
<rect x="0.5" y="0.5" width="${width - 1}" height="231" rx="12" fill="#0D1726" stroke="#26374A"/>
<g font-family="Segoe UI,Arial,sans-serif">
<text x="22" y="33" fill="#6CEBD2" font-size="18" font-weight="600">${escape(title)}</text>
<text x="22" y="53" fill="#8399AC" font-size="11">${escape(subtitle)}</text>
${body}
<text x="22" y="215" fill="#8399AC" font-size="10">${escape(footer)}</text>
</g>
</svg>\n`;
}

function renderCards(data) {
  const rows = [['Original public repos', data.repositories], ['Stars on original repos', data.stars], ['Followers', data.followers], ['Public pull requests', data.pullRequests]];
  const stats = rows.map(([label, count], index) => {
    const y = 87 + index * 33;
    return `<circle cx="27" cy="${y - 5}" r="3" fill="${colors[index]}"/><text x="42" y="${y}" fill="#B6C8D6" font-size="14">${escape(label)}</text><text x="416" y="${y}" fill="#E0E9F1" font-size="19" font-weight="600" text-anchor="end">${Number(count).toLocaleString('en-US')}</text>`;
  }).join('\n');
  let offset = 22;
  let languages = data.languages.map((language, index) => {
    const width = 296 * language.share;
    const bar = `<rect x="${offset.toFixed(2)}" y="70" width="${width.toFixed(2)}" height="9" fill="${colors[index]}"/>`;
    offset += width;
    const x = index % 2 === 0 ? 22 : 180, y = 107 + Math.floor(index / 2) * 33;
    return `${bar}<rect x="${x}" y="${y - 7}" width="7" height="7" rx="2" fill="${colors[index]}"/><text x="${x + 13}" y="${y}" fill="#B6C8D6" font-size="11">${escape(language.name)}</text><text x="${x + 137}" y="${y}" fill="#E0E9F1" font-size="11" text-anchor="end">${(language.share * 100).toFixed(1)}%</text>`;
  }).join('\n');
  if (!data.languages.length) languages = '<text x="22" y="114" fill="#B6C8D6" font-size="13">No public language data yet.</text>';
  return [
    { path: CARD_PATHS[0], content: shell(440, `${data.login} / GitHub`, 'Public profile overview · all time', stats, `Updated ${data.date} UTC · Public data only`) },
    { path: CARD_PATHS[1], content: shell(340, 'Languages', 'By code size · non-fork public repos', languages, `Updated ${data.date} UTC · Not a proficiency score`) },
  ];
}

const blobSha = text => crypto.createHash('sha1').update(`blob ${Buffer.byteLength(text)}\0`).update(text).digest('hex');
async function publish(cards) {
  if (cards.length !== 2 || cards.some((card, i) => card.path !== CARD_PATHS[i])) throw Error('Unexpected publish scope');
  const repository = await api(`repos/${REPOSITORY}`);
  const ref = await api(`repos/${REPOSITORY}/git/ref/heads/${repository.default_branch}`);
  const head = await api(`repos/${REPOSITORY}/git/commits/${ref.object.sha}`);
  const existing = await api(`repos/${REPOSITORY}/git/trees/${head.tree.sha}?recursive=1`);
  if (existing.truncated) throw Error('Incomplete tree; refusing update');
  const changed = cards.filter(card => existing.tree.find(entry => entry.path === card.path)?.sha !== blobSha(card.content));
  if (!changed.length) return { changed: false, message: 'Cards are already current.' };
  const entries = [];
  for (const card of changed) {
    const blob = await api(`repos/${REPOSITORY}/git/blobs`, 'POST', { content: card.content, encoding: 'utf-8' });
    entries.push({ path: card.path, mode: '100644', type: 'blob', sha: blob.sha });
  }
  const tree = await api(`repos/${REPOSITORY}/git/trees`, 'POST', { base_tree: head.tree.sha, tree: entries });
  const commit = await api(`repos/${REPOSITORY}/git/commits`, 'POST', { message: 'Refresh public profile statistics', tree: tree.sha, parents: [ref.object.sha] });
  await api(`repos/${REPOSITORY}/git/refs/heads/${repository.default_branch}`, 'PATCH', { sha: commit.sha, force: false });
  return { changed: true, commit: commit.sha, files: changed.map(card => card.path) };
}

async function main() {
  const data = await collect();
  const cards = renderCards(data);
  if (process.argv.includes('--publish')) console.log(JSON.stringify(await publish(cards)));
  else console.log(JSON.stringify({ data, cards }));
}
module.exports = { summarize, renderCards, blobSha };
if (require.main === module || process.argv[1] === '-') main().catch(error => { console.error(error.message); process.exitCode = 1; });
