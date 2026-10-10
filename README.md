# JIZURA-Live-Website

「字面 Live」（JIZURA Live）的产品站与使用说明。Astro 静态站点，发布到 GitHub Pages。

- **线上地址**：<https://gaoxansheng.github.io/JIZURA-Live-Website/>
- **应用仓库**：<https://github.com/GaoXanSheng/JIZURA-Live>

## 本地开发

```bash
npm install
npm run dev        # http://localhost:4321/JIZURA-Live-Website/
npm run build      # 产物在 dist/
npm run preview    # 本地预览构建产物
```

## 结构

| 路径 | 内容 |
|---|---|
| `src/pages/index.astro` | 首页：首屏、卖点、界面截图、导出、两个版本、下载 |
| `src/pages/docs/` | 使用说明的目录页与动态页 |
| `src/content/docs/*.md` | 说明正文（快速上手、直播推流、功能与手法、导出格式、性能与高级设置、AI 代理接入、隐私与许可） |
| `src/components/Toc.astro` | 文档页右下角的悬浮目录（构建时从标题生成） |
| `src/assets/` | 走 Astro 图片管线优化的图（自动转 WebP、生成多档尺寸） |
| `public/` | 原样发布的静态文件（演示视频、视频封面、`favicon.ico`、`apple-touch-icon.png`） |
| `DOC/` | 开发与代理文档（`MCP.md`、`SKILL.md`），原样保留，同时渲染成 `/docs/ref/` 下的页面 |

新增一篇说明：在 `src/content/docs/` 放一个带 frontmatter 的 `.md`，`order` 决定目录顺序。

```markdown
---
title: 标题
description: 一句话说明
order: 7
---
```

## 部署

推送到 `main` 即由 [`.github/workflows/pages.yml`](.github/workflows/pages.yml) 构建并发布。
仓库 Settings → Pages → Source 需设为 **GitHub Actions**。

## 与应用仓库的关系

安装包由应用仓库的 [Release 工作流](https://github.com/GaoXanSheng/JIZURA-Live/blob/main/.github/workflows/release.yml)
构建并上传，本站的「下载」按钮指向应用仓库的 `releases/latest`。

开发与 AI 代理文档（`DOC/MCP.md`、`DOC/SKILL.md`）已从应用仓库迁到本仓库，由本站渲染成
[/docs/ref/](https://gaoxansheng.github.io/JIZURA-Live-Website/docs/ref/mcp/) 下的页面，不再外链应用仓库。
