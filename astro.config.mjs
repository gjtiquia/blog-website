import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: 'lmoctsz6',
      dataset: 'production',
      apiVersion: '2023-02-08',
      useCdn: false,
    })
  ]
});