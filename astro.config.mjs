import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://webtoons.studio",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [],
    //
    extendDefaultPlugins: true,
  },
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
