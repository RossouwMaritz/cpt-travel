/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://capetownsafe.co.za',
  generateRobotsTxt: true,
  exclude: ['/*.svg', '/*.xml', '/*.txt', '/*.html'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/safety': 0.9,
      '/neighborhoods': 0.6,
      '/attractions': 0.6,
      '/travel-tips': 0.6,
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
