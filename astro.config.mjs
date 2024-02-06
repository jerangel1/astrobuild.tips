import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte"
import vue from "@astrojs/vue"

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrobuild.tips',
  integrations: [tailwind(), mdx(), react(),svelte(),vue(), sitemap()],
  // output: "server",
  // adapter: cloudflare({
  //   imageService: 'cloudflare', // Habilitar la optimización de imágenes de Cloudflare
  });
// })
