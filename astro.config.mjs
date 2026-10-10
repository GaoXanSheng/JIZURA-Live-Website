import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点挂在自定义域名的子路径下：https://yunmouren.top/JIZURA-Live-Website/
// <user>.github.io 会 301 跳到这里，所以 canonical / sitemap 必须写这个域名，
// 否则声明出去的规范地址指向一个重定向。
const origin = 'https://yunmouren.top';
const repo = 'JIZURA-Live-Website';

export default defineConfig({
  site: origin,
  base: `/${repo}`,
  integrations: [sitemap()],
});
