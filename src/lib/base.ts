// GitHub Pages 项目站点挂在子路径下，BASE_URL 在部分版本不带尾斜杠，统一补上，
// 避免 `${base}docs/` 拼成 /JIZURA-Live-Websitedocs/。
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
