const sitemap = require('sitemap');
const hostname = 'http://thegeekstudio.ae/';
const fs = require('fs');

// Define all the routes for the sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/digital-marketing', changefreq: 'monthly', priority: 0.8 },
  { url: '/branding', changefreq: 'monthly', priority: 0.8 },
  { url: '/custom-development', changefreq: 'monthly', priority: 0.8 },
  { url: '/customer-retention', changefreq: 'monthly', priority: 0.8 },
  { url: '/public-relations', changefreq: 'monthly', priority: 0.8 },
  { url: '/web-app-development', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

fs.writeFileSync('../public/sitemap.xml', sitemapInstance.toString());
