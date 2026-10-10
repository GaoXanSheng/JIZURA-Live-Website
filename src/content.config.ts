import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(100),
  }),
});

// DOC/ 下是开发与 AI 代理文档，原样保留（SKILL.md 的 frontmatter 要给技能加载器用），
// 所以不套 schema，标题从 src/lib/reference.ts 取。
const REFERENCE_IDS: Record<string, string> = { 'MCP.md': 'mcp', 'SKILL.md': 'agent' };

const reference = defineCollection({
  loader: glob({
    pattern: ['MCP.md', 'SKILL.md'],
    base: './DOC',
    generateId: ({ entry }) =>
      REFERENCE_IDS[entry] ?? entry.replace(/\.md$/, '').toLowerCase(),
  }),
});

export const collections = { docs, reference };
