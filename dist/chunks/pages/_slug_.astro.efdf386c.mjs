/* empty css                         */import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.951b5972.mjs';
import { $ as $$Layout, a as $$Container } from './404.astro.8f201547.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/Sample Docs/complete-guide-fullstack-development.md": () => import('../complete-guide-fullstack-development.4e5e15ae.mjs'),"/src/content/Sample Docs/essential-data-structures-algorithms.md": () => import('../essential-data-structures-algorithms.0d3d5bf4.mjs'),"/src/content/Sample Docs/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master.44db9ef4.mjs'),"/src/content/Sample Docs/kitchensink.mdx": () => import('../kitchensink.c00195e2.mjs'),"/src/content/blog/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master.cd1e4482.mjs'),"/src/content/team/kyo.md": () => import('../kyo.cf4c71c7.mjs'),"/src/content/team/nen.md": () => import('../nen.9a2fd9d0.mjs'),"/src/content/team/ryan.md": () => import('../ryan.eca94e83.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"Sample Docs":{"type":"content","entries":{"complete-guide-fullstack-development":"/src/content/Sample Docs/complete-guide-fullstack-development.md","how-to-become-frontend-master":"/src/content/Sample Docs/how-to-become-frontend-master.md","essential-data-structures-algorithms":"/src/content/Sample Docs/essential-data-structures-algorithms.md","kitchensink":"/src/content/Sample Docs/kitchensink.mdx"}},"blog":{"type":"content","entries":{"how-to-become-frontend-master":"/src/content/blog/how-to-become-frontend-master.md"}},"team":{"type":"content","entries":{"nen":"/src/content/team/nen.md","kyo":"/src/content/team/kyo.md","ryan":"/src/content/team/ryan.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/Sample Docs/complete-guide-fullstack-development.md": () => import('../complete-guide-fullstack-development.cf3bf669.mjs'),"/src/content/Sample Docs/essential-data-structures-algorithms.md": () => import('../essential-data-structures-algorithms.cdd2e528.mjs'),"/src/content/Sample Docs/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master.74ec845d.mjs'),"/src/content/Sample Docs/kitchensink.mdx": () => import('../kitchensink.977d67a4.mjs'),"/src/content/blog/how-to-become-frontend-master.md": () => import('../how-to-become-frontend-master.c5ac59ea.mjs'),"/src/content/team/kyo.md": () => import('../kyo.9fc64e41.mjs'),"/src/content/team/nen.md": () => import('../nen.74e37048.mjs'),"/src/content/team/ryan.md": () => import('../ryan.f0a5ec38.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro("https://webtoons.studio");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead($$result3)}<div class="mx-auto max-w-3xl mt-14">
      <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
        ${entry.data.category}
      </span>
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
        ${entry.data.title}
      </h1>
      <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
        <span class="text-gray-400">
          ${entry.data.author}
        </span>
        <span class="text-gray-400">•</span>
        <time class="text-gray-400"${addAttribute(entry.data.publishDate.toISOString(), "datetime")}>
          ${entry.data.publishDate.toDateString()}
        </time>
        <span class="text-gray-400 hidden md:block">•</span>
        <div class="w-full md:w-auto flex flex-wrap gap-3">
          ${entry.data.tags.map((tag) => renderTemplate`<span class="text-sm text-gray-500">#${tag}</span>`)}
        </div>
      </div>
    </div>

    <div class="mx-auto prose prose-lg mt-6 max-w-3xl">
      ${renderComponent($$result3, "Content", Content, {})}
    </div>
    <div class="text-center mt-8">
      <a href="/blog" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Back to Blog</a>
    </div>
  ` })}
` })}`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/pages/blog/[slug].astro");

const $$file = "C:/Users/socra/Documents/Webtoon Studio/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, getCollection as g };
