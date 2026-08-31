const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

test('both profile translations use self-contained repository statistic cards', () => {
  for (const name of ['README.md', 'README.en.md']) {
    const markdown = fs.readFileSync(path.join(root, name), 'utf8');
    assert.ok(!markdown.includes('github-readme-stats.vercel.app'), `${name}: unavailable external deployment remains`);
    for (const file of ['assets/github-stats.svg', 'assets/top-languages.svg']) {
      assert.ok(markdown.includes(`src="./${file}"`), `${name}: missing local card`);
      const svg = fs.readFileSync(path.join(root, file), 'utf8');
      assert.match(svg, /^<svg\s/);
      assert.match(svg, /<title\b/);
      assert.doesNotMatch(svg.replace('http://www.w3.org/2000/svg', ''), /<script|<image|foreignObject|https?:\/\//i);
    }
  }
});

const { summarize, renderCards } = require('../scripts/update-profile-stats.cjs');
test('private and forked repositories never affect published totals', () => {
  const repositories = [
    { full_name: 'x/public', private: false, fork: false, stargazers_count: 2 },
    { full_name: 'x/fork', private: false, fork: true, stargazers_count: 999 },
    { full_name: 'x/private', private: true, fork: false, stargazers_count: 888 },
  ];
  const data = summarize({ login: 'x', followers: 3 }, repositories, {
    'x/public': { Python: 75, JavaScript: 25 }, 'x/fork': { Rust: 99999 }, 'x/private': { Secret: 99999 },
  }, 4, '2026-08-31');
  assert.equal(data.repositories, 1);
  assert.equal(data.stars, 2);
  assert.deepEqual(data.languages.map(({ name, share }) => [name, share]), [['Python', 0.75], ['JavaScript', 0.25]]);
});

test('empty language data and untrusted labels produce safe SVG', () => {
  const data = summarize({ login: '<unsafe&>', followers: 0 }, [], {}, 0, '2026-08-31');
  const cards = renderCards(data);
  assert.match(cards[1].content, /No public language data/);
  assert.match(cards[0].content, /&lt;unsafe&amp;&gt;/);
  assert.ok(cards.every(card => !card.content.includes('NaN')));
});

test('language long tail is grouped and proportions remain complete', () => {
  const repo = { full_name: 'x/public', private: false, fork: false, stargazers_count: 0 };
  const data = summarize({ login: 'x', followers: 0 }, [repo], { 'x/public': Object.fromEntries('ABCDEFGH'.split('').map((name, i) => [name, i + 1])) }, 0, '2026-08-31');
  assert.equal(data.languages.length, 6);
  assert.equal(data.languages.at(-1).name, 'Other');
  assert.ok(Math.abs(data.languages.reduce((sum, language) => sum + language.share, 0) - 1) < 1e-12);
});
