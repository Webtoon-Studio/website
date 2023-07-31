/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, F as Fragment } from '../astro.951b5972.mjs';
import { a as $$Container, $ as $$Layout } from './404.astro.8f201547.mjs';
import { $ as $$Sectionhead } from './about.astro.66563922.mjs';
import { $ as $$Link } from './index.astro.a7c33955.mjs';
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
import './_slug_.astro.efdf386c.mjs';
import './contact.astro.e14cfca8.mjs';
import 'svgo';

const $$Astro$2 = createAstro("https://webtoons.studio");
const $$Tick = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tick;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor"></path>
</svg>`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/components/ui/icons/tick.astro");

const $$Astro$1 = createAstro("https://webtoons.studio");
const $$Pricing$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const { plan } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div>
  <div class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
    <div class="text-center">
      <h4 class="text-lg font-medium text-gray-400">${plan.name}</h4><p class="mt-3 text-4xl font-bold text-black md:text-4xl">
        ${plan.price && typeof plan.price === "object" ? plan.price.monthly : plan.price}
      </p>
      <!-- {
        plan.price.original && (
          <p class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {plan.price.original}
          </p>
        )
      } -->
    </div><ul class="grid mt-8 text-left gap-y-4">
      ${plan.features.map((item) => renderTemplate`<li class="flex items-start gap-3 text-gray-800">
            ${renderComponent($$result, "Tick", $$Tick, { "class": "w-6 h-6" })}
            <span>${item}</span>
          </li>`)}
    </ul><div class="flex mt-8">
      ${renderComponent($$result, "Link", $$Link, { "href": plan.button.link || "#", "block": true, "style": plan.popular ? "primary" : "outline" }, { "default": ($$result2) => renderTemplate`${plan.button.text || "Get Started"}` })}
    </div>
  </div>
</div>`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/components/pricing.astro");

const $$Astro = createAstro("https://webtoons.studio");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const pricing = [
    {
      name: "Personal",
      price: "Free",
      popular: false,
      features: ["Lifetime free", "Subject to Change"],
      button: {
        text: "Get Started",
        link: "/"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "default": ($$result4) => renderTemplate`
      
      
      Simple & Predictable pricing. No Surprises.
    `, "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Pricing` })}` })}
  ` })}

  ${maybeRenderHead($$result2)}<div class="grid md:grid-cols-1 gap-10 mx-auto max-w-screen-lg mt-12">
    ${pricing.map((item) => renderTemplate`${renderComponent($$result2, "Pricing", $$Pricing$1, { "plan": item })}`)}
  </div>
` })}`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/pages/pricing.astro");

const $$file = "C:/Users/socra/Documents/Webtoon Studio/src/pages/pricing.astro";
const $$url = "/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
