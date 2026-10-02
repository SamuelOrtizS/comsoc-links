import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ieeeunivalle.link',
  base: '/ComSoc',
  output: 'static',
  redirects: {
    '/links': '/ComSoc',
    '/comsoc-links': '/ComSoc',
    '/links-comsoc': '/ComSoc',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        'material-symbols': ['*'],
        'mdi': ['*'],
        'simple-icons': ['*'],
      },
    }),
  ],
});
