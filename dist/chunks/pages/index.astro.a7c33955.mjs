/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, b as addAttribute, s as spreadAttributes, d as renderSlot } from '../astro.951b5972.mjs';
import { b as $$Picture, a as $$Container, $ as $$Layout } from './404.astro.8f201547.mjs';
import { $ as $$Icon } from './contact.astro.e14cfca8.mjs';

const $$Astro$3 = createAstro("https://webtoons.studio");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Easy Integration",
      description: "Visualizations show up right on the Webtoon dashboard, so no need to add another website to your bookmarks tab.",
      icon: "ic:round-dashboard",
      accent: "text-ws-green-light"
    },
    {
      title: "Clearly Communicated",
      description: "Data is displayed in simple, visually accessible formats. No guesswork required to interpret your data.",
      icon: "bi:lightbulb-fill",
      accent: "text-ws-blue"
    },
    {
      title: "Track Reader Engagement",
      description: "Know what your readers are saying about your webtoon and when they're typically reading. From the controversial to the loved, see what episodes perform the best.",
      icon: "fa-solid:book-reader",
      accent: "text-ws-magenta"
    },
    {
      title: "Long Term Data Tracking",
      description: "No need to waste time manually tracking data. We keep track of it for you, automatically, so you so you can focus on being an artist.",
      icon: "uis:graph-bar",
      accent: "text-ws-yellow-light text-4xl"
    },
    {
      title: "Private and Secure",
      description: "We know your stories data is personal. We sell none of your comic data to third parties. It's yours and yours alone.",
      icon: "ri:git-repository-private-fill",
      accent: "text-ws-magenta-light"
    },
    {
      title: "Dedicated Support",
      description: "We have multiple social platforms for outreach, including discord and twitter, along with an easy to use report system built into the extension.",
      icon: "bx:bxs-user",
      accent: "text-ws-blue-light"
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<div class="mt-16 md:mt-0 text-ws-grey-light">
  <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">Features</h2>
  <p class="text-lg mt-4">
    Offering both high and low level views of your stories performance. We are
    always experimenting with new ways to interpret the data.
  </p>
</div>

<div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
  ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start text-ws-grey-light">
        <div class="mt-1 rounded-full bg-neutral-800 p-3 shadow-lg">
          ${renderComponent($$result, "Icon", $$Icon, { "class": item.accent, "name": item.icon, "size": 27 })}
        </div>
        <div>
          <h3 class="font-semibold text-lg">${item.title}</h3>${" "}
          <p class=" mt-2 leading-relaxed">${item.description}</p>
        </div>
      </div>`)}
</div>`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/components/features.astro");

const heroImage = {"src":"/_astro/hero-1.8fd64930.png","width":520,"height":424,"format":"png"};

const $$Astro$2 = createAstro("https://webtoons.studio");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</a>`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/components/ui/link.astro");

const $$Astro$1 = createAstro("https://webtoons.studio");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`

<!-- Say goodbye to spreadsheets and hello to your future data management tool for
Webtoon creators. -->${maybeRenderHead($$result)}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24 lg:px-10">
  <div class="py-5 md:order-1 hidden md:block">
    ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Depressed Artist being yelled at by Spreadsheet", "widths": [200, 400, 600], "aspect": 1.22641509434, "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })}
  </div>
  <div>
    <span class="select-none text-white text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
      <!-- bg-gradient-to-r from-ws-green-light to-emerald-500 text-transparent bg-clip-text -->
      Say Goodbye to <span class="randomColour pr-2">Spreadsheets</span>
    </span>
    <p class="select-none text-lg mt-4 text-ws-grey-light max-w-xl">
      <!-- <span class="randomColour"> </span>-->
      Creator Studio is a <span class="randomColour">browser extension</span> that
      handles all the work for you. Our new data analytics tool for Webtoons allows
      you to set yourself up for success. You'll spend less time logging and more
      time maximising the value of your comics potential to grow.
    </p>
    <div class="mt-6 flex flex-col sm:flex-row gap-3">
      ${renderComponent($$result, "Link", $$Link, { "href": "#", "href": "", "target": "_blank", "class": "flex gap-1 items-center justify-center bg-neutral-800 shadow-md", "rel": "noopener" }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-ws-grey-light w-5 h-5", "name": "logos:chrome" })}
        Chrome
      ` })}
      ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "", "class": "flex gap-1 items-center justify-center pointer-events-none bg-ws-grey-light border-ws-grey-light text-ws-grey", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-ws-black w-4 h-5", "name": "fa:firefox" })}
        Firefox
      ` })}
    </div>
  </div>
</main>`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/components/hero.astro");

const $$Astro = createAstro("https://webtoons.studio");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Hero", $$Hero, {})}
    ${renderComponent($$result3, "Features", $$Features, {})}
    
  ` })}
` })}`;
}, "C:/Users/socra/Documents/Webtoon Studio/src/pages/index.astro");

const $$file = "C:/Users/socra/Documents/Webtoon Studio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, index as i };
