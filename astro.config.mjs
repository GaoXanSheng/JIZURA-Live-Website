import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 本站绑了独立子域名 jizuralive.yunmouren.top，由 GitHub Pages 提供。
// 项目站绑上自定义域名后是在域名根路径下提供服务，所以 base 用 '/'。
const origin = 'https://jizuralive.yunmouren.top';

export default defineConfig({
  site: origin,
  base: '/',
  integrations: [sitemap()],
});
