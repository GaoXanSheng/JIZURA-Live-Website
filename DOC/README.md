# DOC — 开发与 AI 代理文档

从应用仓库 `JIZURA-Live` 迁移过来，这里是这两篇文档的唯一维护位置，同时由本站渲染成页面。

| 文件 | 站点页面 | 内容 |
|---|---|---|
| [`MCP.md`](./MCP.md) | [/docs/ref/mcp/](https://jizuralive.yunmouren.top/docs/ref/mcp/) | MCP 接入：架构、请求生命周期、安全模型、客户端配置与故障排查 |
| [`SKILL.md`](./SKILL.md) | [/docs/ref/agent/](https://jizuralive.yunmouren.top/docs/ref/agent/) | AI 代理操作技能：用 jizura MCP 工具驱动应用制作歌词 PV |

两篇都**原样保留**，不在文件里加站点用的 frontmatter —— `SKILL.md` 的 frontmatter（`name` / `description`）
是技能加载器读的，不能被站点字段污染。站点展示用的标题与描述写在 `src/lib/reference.ts`。

> `SKILL.md` 会被 ZCode 从 `.agents/skills/jizura-live/SKILL.md` 加载（那份是本地副本，不入库）。
> 改技能时以本目录的 `SKILL.md` 为准，然后同步到本地副本。
