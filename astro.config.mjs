// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://berberinebenefit.com',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/500') &&
        !page.endsWith('/privacy/') &&
        !page.endsWith('/terms/') &&
        !page.endsWith('/about-us/') &&
        !page.endsWith('/contact-us/'),
    }),
  ],
});
