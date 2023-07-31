/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent, F as Fragment } from '../astro.951b5972.mjs';
import { g as getCollection } from './_slug_.astro.efdf386c.mjs';
import { a as $$Container, b as $$Picture, $ as $$Layout } from './404.astro.8f201547.mjs';

const $$Astro$1 = createAstro("https://webtoons.studio");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}>
  <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-ws-grey-light">
    ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
  </h1>
  <p class="text-lg mt-4 text-ws-grey">
    ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)}
  </p>
</div>`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/components/sectionhead.astro");

const $$Astro = createAstro("https://webtoons.studio");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a doing our best.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About` })}` })}

    ${maybeRenderHead($$result3)}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16 text-ws-grey-light">
      <h2 class="font-bold text-3xl text-center	">Empowering Creators with Numbers.</h2>
      <p class="text-lg leading-relaxed">
        We're creators just like you, who just wanted to stop dealing with the
        bs grind of manually taking data on a weekly basis to track growth of
        our comics on webtoons. So we made a tool to do it for everyone as
        easily as possible, we believe being able to track your growth allows
        you to monetise your content better, better understand your target
        audience, and generally kick ass in the comics game. We hope you get as
        much value out of this as possible
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      ${publishedTeamMembers.map((teamMemberEntry) => renderTemplate`<div class="group">
            <div class="w-full aspect-square">
              ${renderComponent($$result3, "Picture", $$Picture, { "src": teamMemberEntry.data.avatar.src, "alt": teamMemberEntry.data.avatar.alt, "sizes": "(max-width: ``00px) 100vw, 400px", "widths": [200, 400], "aspectRatio": "1:1", "background": "#000", "fit": "cover", "position": "center", "class": "w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl" })}
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-ws-grey-light">
                ${teamMemberEntry.data.name}
              </h2>
              <h3 class="text-sm text-ws-grey-light">
                ${teamMemberEntry.data.title}
              </h3>
            </div>
          </div>`)}
    </div>
  ` })}
` })}`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/pages/about.astro");

const $$file = "C:/Users/socra/Documents/Webtoon Studio/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, about as a };
