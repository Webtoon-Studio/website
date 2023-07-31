/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../astro.951b5972.mjs';
import { g as getCollection } from './_slug_.astro.efdf386c.mjs';
import { a as $$Container, b as $$Picture, $ as $$Layout } from './404.astro.8f201547.mjs';
import { $ as $$Sectionhead } from './about.astro.66563922.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import 'mime';

const $$Astro = createAstro("https://webtoons.studio");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const publishedBlogEntries = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  publishedBlogEntries.sort(function(a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`Posts about the end of the world.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Roundups` })}` })}
    ${maybeRenderHead($$result3)}<main class="mt-16">
      <ul class="grid gap-16 max-w-4xl mx-auto">
        ${publishedBlogEntries.map((blogPostEntry, index) => renderTemplate`<li>
              <a${addAttribute(`/blog/${blogPostEntry.slug}`, "href")}>
                <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  ${renderComponent($$result3, "Picture", $$Picture, { "src": blogPostEntry.data.image.src, "alt": blogPostEntry.data.image.alt, "sizes": "(max-width: 800px) 100vw, 800px", "widths": [200, 400, 800], "aspectRatio": "16:9", "background": "#ffffff", "fit": "cover", "position": "center", "loading": index <= 2 ? "eager" : "lazy", "decoding": index <= 2 ? "sync" : "async", "class": "w-full rounded-md" })}
                  <div>
                    <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
                      ${blogPostEntry.data.category}
                    </span>

                    <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                      ${blogPostEntry.data.title}
                    </h2>

                    <div class="flex gap-2 mt-3">
                      <span class="text-gray-400">
                        ${blogPostEntry.data.author}
                      </span>
                      <span class="text-gray-400">• </span>
                      <time class="text-gray-400"${addAttribute(blogPostEntry.data.publishDate.toISOString(), "datetime")}>
                        ${blogPostEntry.data.publishDate.toDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </a>
            </li>`)}
      </ul>
    </main>
  ` })}
` })}`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/pages/blog.astro");

const $$file = "C:/Users/socra/Documents/Webtoon Studio/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
