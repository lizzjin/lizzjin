![Zane / lizzjin — Building agents that get things done. A pixel developer blinks as signals travel along the task path.](./cover-agent-trail.gif)

<p align="center">
  <a href="./README.md">简体中文</a> · <strong>English</strong>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&amp;size=20&amp;duration=3200&amp;pause=1600&amp;color=36A995&amp;center=true&amp;vCenter=true&amp;width=700&amp;height=48&amp;lines=Building+agents+that+get+things+done.;From+ideas+to+working+tools.;Think.+Build.+Iterate." alt="Building agents that get things done. From ideas to working tools. Think. Build. Iterate." width="700">
</p>

### Hi, I'm Zane 👋

I'm **Zijin Li**, also known as **lizzjin** on GitHub. I focus on **agent development and engineering**, exploring how models can use tools, manage tasks, and carry out useful work in real workflows.

I'm interested in the path from model capabilities to usable products: breaking down tasks, passing context, coordinating agents, and recovering interrupted work. I want the agents I build to make their progress understandable, their failures traceable, and their next steps clear.

I put these ideas into practice through personal projects and open-source contributions. I'm building **[RoutePilot](https://github.com/lizzjin/RoutePilot)** as infrastructure for model access, routing, and operational visibility, while contributing fixes for provider compatibility, connection recovery, and task state in agent tools.

### Focus

- **Agent workflows** · Task decomposition, tool use, and execution feedback, with clear inputs, results, and completion criteria.
- **Multi-agent collaboration** · Exploring delegation, context handoffs, and state synchronization, including cancellation, retries, and concurrent execution.
- **Tools & context** · MCP, external tool integration, and context management, so agents can work with the information and permissions a task requires.
- **Reliability & observability** · Model routing, protocol compatibility, failure recovery, and execution records that help reproduce and diagnose problems.

### Now

- **Building RoutePilot** · Developing a self-hosted model gateway and operations workbench for local and cloud model access, policies, and request records.
- **Contributing to open source** · Improving agent execution and collaboration in [Cindy](https://github.com/makecindy/cindy) and [Codeg](https://github.com/xintaofei/codeg).
- **Exploring through practice** · Bringing tool use, context management, and multi-agent collaboration into concrete workflows and evaluating designs through real tasks.

## Toolbox

<p>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&amp;logo=python&amp;logoColor=white" alt="Python" height="24">
  <img src="https://img.shields.io/badge/LLM%20APIs-10141C?style=flat-square" alt="LLM APIs" height="24">
  <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&amp;logo=langchain&amp;logoColor=white" alt="LangChain" height="24">
  <img src="https://img.shields.io/badge/LlamaIndex-6B4EFF?style=flat-square" alt="LlamaIndex" height="24">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&amp;logo=fastapi&amp;logoColor=white" alt="FastAPI" height="24">
  <img src="https://img.shields.io/badge/MCP-2D3748?style=flat-square" alt="MCP" height="24">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&amp;logo=docker&amp;logoColor=white" alt="Docker" height="24">
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&amp;logo=git&amp;logoColor=white" alt="Git" height="24">
</p>

<sub>Tools and exploration areas for agent development.</sub>

## Open-source work

I've landed **7 pull requests in repositories I don't own**, covering provider routing, protocol compatibility, connection recovery, and task-state reliability.

<table>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/makecindy/cindy">makecindy/cindy</a></h3>
      <p>Claude Code provider routing, Responses compatibility, Codex connection recovery, and subagent transport.</p>
      <a href="https://github.com/search?q=is%3Apr%20is%3Amerged%20author%3Alizzjin%20repo%3Amakecindy%2Fcindy&amp;type=pullrequests"><img src="https://img.shields.io/badge/Merged_PRs-5-0f766e?style=flat-square&amp;logo=github&amp;logoColor=white" alt="5 merged PRs in makecindy/cindy" height="24"></a>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/xintaofei/codeg">xintaofei/codeg</a></h3>
      <p>Task-wait and review-state reliability in a multi-agent coding workspace, including stale completions and session cancellation.</p>
      <a href="https://github.com/search?q=is%3Apr%20is%3Amerged%20author%3Alizzjin%20repo%3Axintaofei%2Fcodeg&amp;type=pullrequests"><img src="https://img.shields.io/badge/Merged_PRs-2-6b4ecc?style=flat-square&amp;logo=github&amp;logoColor=white" alt="2 merged PRs in xintaofei/codeg" height="24"></a>
    </td>
  </tr>
</table>

<a href="https://github.com/search?q=is%3Apr%20is%3Amerged%20author%3Alizzjin%20-user%3Alizzjin&amp;type=pullrequests">Browse all external merged PRs →</a>

## Selected projects

<table>
  <tr>
    <td width="100%" valign="top">
      <h3><a href="https://github.com/lizzjin/RoutePilot">RoutePilot</a></h3>
      <p>A self-hosted model gateway for small teams: local and cloud models behind Anthropic / OpenAI-compatible APIs, with provider routing, quotas, access policies, and a request-audit workbench.</p>
      <p>
        <img src="https://img.shields.io/badge/Rust-000000?style=flat-square&amp;logo=rust&amp;logoColor=white" alt="Rust" height="24">
        <img src="https://img.shields.io/badge/React-20232A?style=flat-square&amp;logo=react&amp;logoColor=61DAFB" alt="React" height="24">
        <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&amp;logo=postgresql&amp;logoColor=white" alt="PostgreSQL" height="24">
        <a href="https://github.com/lizzjin/RoutePilot/stargazers"><img src="https://img.shields.io/github/stars/lizzjin/RoutePilot?style=flat-square&amp;label=stars&amp;color=2864ad" alt="RoutePilot stars" height="24"></a>
      </p>
      <p><a href="https://github.com/lizzjin/RoutePilot/blob/main/docs/GETTING_STARTED.md">Getting started →</a></p>
    </td>
  </tr>
</table>

### Activity

<p>
  <img src="./assets/github-stats.svg" alt="lizzjin's GitHub statistics" width="440">
  <img src="./assets/top-languages.svg" alt="Languages in lizzjin's public repositories" width="340">
</p>

<p>
  <img src="https://streak-stats.demolab.com/?user=lizzjin&amp;background=0D1726&amp;border=26374A&amp;stroke=26374A&amp;ring=6CEBD2&amp;fire=9887EF&amp;currStreakNum=E0E9F1&amp;sideNums=E0E9F1&amp;currStreakLabel=6CEBD2&amp;sideLabels=B6C8D6&amp;dates=8399AC&amp;border_radius=12" alt="lizzjin's contribution streak" width="500">
</p>

<sub>GitHub and language cards are stored in this repository and scheduled to refresh public data daily. Language shares are not proficiency scores. The streak card still uses a third-party service.</sub>

<!-- Add a blog, public email or social links only after they have been confirmed. -->

---

<p align="center">
  <sub>Think · Build · Iterate</sub>
</p>
