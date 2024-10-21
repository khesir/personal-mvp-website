import { createSitemap } from 'sitemap';
import fs from 'fs';

const generateSitemap = () => {
  const sitemap = createSitemap({
    hostname: 'https://yourdomain.com', // Replace with your actual domain
    cacheTime: 600000,  // 600 sec - cache purge period
    urls: [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/blog', changefreq: 'daily', priority: 0.8 },
      // Add your other blog post URLs here
    ]
  });

  fs.writeFileSync('public/sitemap.xml', sitemap.toString());
};

export default generateSitemap;