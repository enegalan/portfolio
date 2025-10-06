import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://enegalan.github.io',
  base: '/portfolio',
  output: 'static',
  build: {
    assets: 'assets'
  }
});