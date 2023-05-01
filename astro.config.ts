// astro.config.ts
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import markdoc from "@astrojs/markdoc";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      URL?: string;
      CF_PAGES_URL?: string;
    }
  }
}

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: process.env.URL ?? process.env.CF_PAGES_URL ?? 'http://localhost:3000',
  integrations: [UnoCSS({
    injectReset: true
  }), markdoc()]
});