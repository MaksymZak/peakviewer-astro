// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import compress from "astro-compress";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  outDir: "./build",
  output: "static",
  build: {
    assetsPrefix: ".",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      svgoOptions: {
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: "(id)",
            },
          },
        ],
      },
    }),
    compress({
      Image: {
        sharp: {
          png: {
            quality: 100,
          },
          webp: {
            quality: 100,
          },
        },
      },
      HTML: {
        "html-minifier-terser": {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          minifyCSS: true,
          caseSensitive: true,
          preserveLineBreaks: true,
        },
      },
    }),
    react(),
  ],
});

