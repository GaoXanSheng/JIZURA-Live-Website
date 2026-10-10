// DOC/ 下是开发与 AI 代理文档：正文自带 H1，frontmatter 要留给技能加载器，
// 所以不套内容集合 schema，展示用的标题与描述在这里统一维护（顺序即目录顺序）。
export const referenceDocs = [
  {
    id: 'mcp',
    title: 'MCP 接入文档',
    description: '架构、请求生命周期、revision 契约、客户端配置与故障排查。',
  },
  {
    id: 'agent',
    title: 'AI 代理操作指南',
    description: '用 jizura MCP 的 17 个工具驱动应用制作歌词 PV：标准流程与避坑。',
  },
] as const;

export const referenceMeta: Record<string, { title: string; description: string }> =
  Object.fromEntries(referenceDocs.map((d) => [d.id, d]));
