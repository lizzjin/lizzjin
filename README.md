![Zane / lizzjin — Building agents that get things done. A pixel developer blinks as signals travel along the task path.](./cover-agent-trail.gif)

<p align="center">
  <strong>简体中文</strong> · <a href="./README.en.md">English</a>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&amp;size=20&amp;duration=3200&amp;pause=1600&amp;color=36A995&amp;center=true&amp;vCenter=true&amp;width=700&amp;height=48&amp;lines=Building+agents+that+get+things+done.;From+ideas+to+working+tools.;Think.+Build.+Iterate." alt="Building agents that get things done. From ideas to working tools. Think. Build. Iterate." width="700">
</p>

### Hi, I'm Zane 👋

你也可以叫我 **Zijin Li**。我专注于 **Agent 开发与工程实践**，探索如何让模型调用工具、管理任务，并在真实工作流中完成具体工作。

我关注从模型能力到可用产品的整个过程：任务如何拆解、上下文如何传递、多个 Agent 如何协作，以及执行中断后如何恢复。对我来说，一个值得持续打磨的 Agent，应该让人看得清它正在做什么、为什么失败，以及下一步如何继续。

目前，我通过个人项目与开源贡献实践这些想法：开发 **[RoutePilot](https://github.com/lizzjin/RoutePilot)**，为模型接入、路由与运行观测提供基础设施；也参与 Agent 工具的改进，处理供应商兼容、连接恢复和任务状态等具体问题。

### Focus / 关注方向

- **Agent 工作流** · 任务拆解、工具调用与执行反馈，让每一步都有明确的输入、结果和完成条件。
- **多 Agent 协作** · 探索任务分工、上下文交接与状态同步，关注取消、重试和并发执行时的行为。
- **工具与上下文** · 关注 MCP、外部工具接入与上下文管理，让 Agent 能在合适的权限和信息范围内执行任务。
- **可靠性与可观测性** · 关注模型路由、协议兼容、失败恢复和执行记录，让问题可以复现、定位与改进。

### Now / 正在做

- **构建 RoutePilot** · 打磨自托管模型网关与运维工作台，统一管理本地和云端模型的接入、策略与请求记录。
- **参与开源** · 在 [Cindy](https://github.com/makecindy/cindy) 和 [Codeg](https://github.com/xintaofei/codeg) 中改进 Agent 运行与协作体验。
- **持续探索** · 将工具调用、上下文管理和多 Agent 协作放进具体工作流，通过实际任务检验设计。

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

<sub>用于 Agent 开发的工具与探索方向。</sub>

## Open-source work / 开源贡献

已在非本人拥有的开源仓库中合并 **7 个 PR**，涉及供应商路由、协议兼容、连接恢复和任务状态可靠性。

<table>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/makecindy/cindy">makecindy/cindy</a></h3>
      <p>改进 Claude Code 供应商路由、Responses 协议兼容、Codex 连接恢复与子 Agent 传输。</p>
      <a href="https://github.com/search?q=is%3Apr%20is%3Amerged%20author%3Alizzjin%20repo%3Amakecindy%2Fcindy&amp;type=pullrequests"><img src="https://img.shields.io/badge/Merged_PRs-5-0f766e?style=flat-square&amp;logo=github&amp;logoColor=white" alt="5 merged PRs in makecindy/cindy" height="24"></a>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/xintaofei/codeg">xintaofei/codeg</a></h3>
      <p>修复多 Agent 编码工作区中的任务等待与审查状态，覆盖旧任务完成和会话取消场景。</p>
      <a href="https://github.com/search?q=is%3Apr%20is%3Amerged%20author%3Alizzjin%20repo%3Axintaofei%2Fcodeg&amp;type=pullrequests"><img src="https://img.shields.io/badge/Merged_PRs-2-6b4ecc?style=flat-square&amp;logo=github&amp;logoColor=white" alt="2 merged PRs in xintaofei/codeg" height="24"></a>
    </td>
  </tr>
</table>

<a href="https://github.com/search?q=is%3Apr%20is%3Amerged%20author%3Alizzjin%20-user%3Alizzjin&amp;type=pullrequests">查看全部外部已合并 PR →</a>

## Selected projects / 作品集

<table>
  <tr>
    <td width="100%" valign="top">
      <h3><a href="https://github.com/lizzjin/RoutePilot">RoutePilot</a></h3>
      <p>面向小型团队的自托管模型网关：统一接入本地与云端模型，提供 Anthropic / OpenAI 兼容接口、供应商路由、配额与访问策略，以及请求审计工作台。</p>
      <p>
        <img src="https://img.shields.io/badge/Rust-000000?style=flat-square&amp;logo=rust&amp;logoColor=white" alt="Rust" height="24">
        <img src="https://img.shields.io/badge/React-20232A?style=flat-square&amp;logo=react&amp;logoColor=61DAFB" alt="React" height="24">
        <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&amp;logo=postgresql&amp;logoColor=white" alt="PostgreSQL" height="24">
        <a href="https://github.com/lizzjin/RoutePilot/stargazers"><img src="https://img.shields.io/github/stars/lizzjin/RoutePilot?style=flat-square&amp;label=stars&amp;color=2864ad" alt="RoutePilot stars" height="24"></a>
      </p>
      <p><a href="https://github.com/lizzjin/RoutePilot/blob/main/docs/GETTING_STARTED.md">使用指南 →</a></p>
    </td>
  </tr>
</table>

### Activity / 开源足迹

<p>
  <img src="./assets/github-stats.svg" alt="lizzjin 的 GitHub 统计" width="440">
  <img src="./assets/top-languages.svg" alt="lizzjin 的公开仓库语言统计" width="340">
</p>

<p>
  <img src="https://streak-stats.demolab.com/?user=lizzjin&amp;background=0D1726&amp;border=26374A&amp;stroke=26374A&amp;ring=6CEBD2&amp;fire=9887EF&amp;currStreakNum=E0E9F1&amp;sideNums=E0E9F1&amp;currStreakLabel=6CEBD2&amp;sideLabels=B6C8D6&amp;dates=8399AC&amp;border_radius=12" alt="lizzjin 的连续贡献记录" width="500">
</p>

<sub>GitHub 统计与语言卡片保存在本仓库，按日更新公开数据；语言比例不代表熟练度。连续贡献卡片仍由第三方服务提供。</sub>

<!-- 博客、公开邮箱和社交链接确认后再添加，不使用占位联系方式。 -->

---

<p align="center">
  <sub>Think · Build · Iterate</sub>
</p>
