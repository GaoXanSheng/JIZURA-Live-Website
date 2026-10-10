import { defineConfig } from 'astro/config';

// GitHub Pages 项目站点：https://<user>.github.io/<repo>/
const user = 'GaoXanSheng';
const repo = 'JIZURA-Live-Website';

export default defineConfig({
  site: `https://${user.toLowerCase()}.github.io`,
  base: `/${repo}`,
});
