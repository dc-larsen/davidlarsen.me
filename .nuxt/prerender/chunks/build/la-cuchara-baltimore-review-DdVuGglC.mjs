import { a as buildAssetsURL } from '../_/renderer.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, inject, reactive, provide, useSSRContext } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/index.mjs';
import { u as useHead } from './v3-BK_8c_dM.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CySUTwVK.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/h3/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/destr/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/hookable/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/klona/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/defu/dist/defu.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/scule/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unctx/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/pathe/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unhead/dist/server.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/devalue/index.js';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue-router/dist/vue-router.node.mjs';

const HeadComponentCtxSymbol = Symbol("head-component");
const TagPositionProps = {
  /**
   * @deprecated Use tagPosition
   */
  body: { type: Boolean, default: void 0 },
  tagPosition: { type: String }
};
const normalizeProps = (_props) => {
  const props = Object.fromEntries(
    Object.entries(_props).filter(([_, value]) => value !== void 0)
  );
  if (typeof props.body !== "undefined") {
    props.tagPosition = props.body ? "bodyClose" : "head";
  }
  if (typeof props.renderPriority !== "undefined") {
    props.tagPriority = props.renderPriority;
  }
  return props;
};
function useHeadComponentCtx() {
  return inject(HeadComponentCtxSymbol, createHeadComponentCtx, true);
}
function createHeadComponentCtx() {
  const prev = inject(HeadComponentCtxSymbol, null);
  if (prev) {
    return prev;
  }
  const input = reactive({});
  const entry = useHead(input);
  const ctx = { input, entry };
  provide(HeadComponentCtxSymbol, ctx);
  return ctx;
}
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: { type: [String, Object, Array], default: void 0 },
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: { type: [String, Object, Array], default: void 0 },
  tabindex: String,
  title: String,
  translate: String,
  /**
   * @deprecated Use tagPriority
   */
  renderPriority: [String, Number],
  /**
   * Unhead prop to modify the priority of the tag.
   */
  tagPriority: { type: [String, Number] }
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    title: String
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.noscript || (input.noscript = []);
    const idx = input.noscript.push({}) - 1;
    return () => {
      var _a;
      const noscript = normalizeProps(props);
      const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
      if (textContent) {
        noscript.innerHTML = textContent;
      }
      input.noscript[idx] = noscript;
      return null;
    };
  }
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.link || (input.link = []);
    const idx = input.link.push({}) - 1;
    return () => {
      input.link[idx] = normalizeProps(props);
      return null;
    };
  }
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    return () => {
      input.base = normalizeProps(props);
      return null;
    };
  }
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup(_, { slots }) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b, _c;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      input.title = ((_b = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _b.children) ? String((_c = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _c.children) : void 0;
      return null;
    };
  }
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    property: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.meta || (input.meta = []);
    const idx = input.meta.push({}) - 1;
    return () => {
      const meta = { "http-equiv": props.httpEquiv, ...normalizeProps(props) };
      if ("httpEquiv" in meta) {
        delete meta.httpEquiv;
      }
      input.meta[idx] = meta;
      return null;
    };
  }
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.style || (input.style = []);
    const idx = input.style.push({}) - 1;
    return () => {
      var _a, _b, _c;
      const style = normalizeProps(props);
      const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (textContent) {
        input.style[idx] = style;
        style.textContent = textContent;
      }
      return null;
    };
  }
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => {
    createHeadComponentCtx();
    return () => {
      var _a, _b;
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.htmlAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.bodyAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
const _imports_0 = "" + buildAssetsURL("lacuchara.CWFr5H1C.png");
const _sfc_main = {
  __name: "la-cuchara-baltimore-review",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f6cc6116>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Why I keep going back to La Cuchara | David Larsen`);
                } else {
                  return [
                    createTextVNode("Why I keep going back to La Cuchara | David Larsen")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:title",
              content: "Why I keep going back to La Cuchara"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:description",
              content: "Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:image",
              content: "https://davidlarsen.me/lacuchara.png"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:url",
              content: "https://davidlarsen.me/blog/la-cuchara-baltimore-review"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "twitter:card",
              content: "summary_large_image"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "twitter:title",
              content: "Why I keep going back to La Cuchara"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "twitter:description",
              content: "Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "twitter:image",
              content: "https://davidlarsen.me/lacuchara.png"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("Why I keep going back to La Cuchara | David Larsen")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork."
              }),
              createVNode(_component_Meta, {
                property: "og:title",
                content: "Why I keep going back to La Cuchara"
              }),
              createVNode(_component_Meta, {
                property: "og:description",
                content: "Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork."
              }),
              createVNode(_component_Meta, {
                property: "og:image",
                content: "https://davidlarsen.me/lacuchara.png"
              }),
              createVNode(_component_Meta, {
                property: "og:url",
                content: "https://davidlarsen.me/blog/la-cuchara-baltimore-review"
              }),
              createVNode(_component_Meta, {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode(_component_Meta, {
                name: "twitter:title",
                content: "Why I keep going back to La Cuchara"
              }),
              createVNode(_component_Meta, {
                name: "twitter:description",
                content: "Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork."
              }),
              createVNode(_component_Meta, {
                name: "twitter:image",
                content: "https://davidlarsen.me/lacuchara.png"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container mx-auto px-6 py-12 max-w-4xl" data-v-f6cc6116><div class="mb-8" data-v-f6cc6116>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-secondary hover:text-primary transition-colors duration-200 mb-4 inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Back to Blog `);
          } else {
            return [
              createTextVNode(" \u2190 Back to Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl md:text-5xl font-bold text-primary mb-4" data-v-f6cc6116> Why I keep going back to La Cuchara </h1><div class="flex flex-wrap items-center gap-4 text-secondary text-sm mb-6" data-v-f6cc6116><span data-v-f6cc6116>August 13, 2025</span><span data-v-f6cc6116>\u2022</span><span data-v-f6cc6116>5 min read</span><span data-v-f6cc6116>\u2022</span><span class="bg-gray-100 px-3 py-1 rounded-full" data-v-f6cc6116>Food</span></div><div class="flex flex-wrap gap-2 mb-8" data-v-f6cc6116><!--[-->`);
      ssrRenderList(["restaurant review", "baltimore", "la cuchara", "shared plates", "happy hour", "gin and tonic", "woodberry"], (tag) => {
        _push(`<span class="text-xs bg-gray-50 text-secondary px-2 py-1 rounded" data-v-f6cc6116> #${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div><div class="mb-8" data-v-f6cc6116><img${ssrRenderAttr("src", _imports_0)} alt="La Cuchara Baltimore Review" class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" data-v-f6cc6116></div><article class="prose prose-lg max-w-none" data-v-f6cc6116><p data-v-f6cc6116><a href="https://www.lacucharabaltimore.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-colors" data-v-f6cc6116>La Cuchara \u2014 lacucharabaltimore.com</a></p><p data-v-f6cc6116>I&#39;ve been going to La Cuchara for years, and it still feels fresh every time. The room hums, the plates move, and the bar is the best seat in the house.</p><h2 data-v-f6cc6116>The bar &gt; a table</h2><p data-v-f6cc6116>I&#39;ve done both, but the bar wins. You&#39;re in the flow with bartenders, runners, and that quiet choreography between service and kitchen. It is fun to watch a team that tight do their thing, and this place runs like a machine.</p><h2 data-v-f6cc6116>Menus that actually change</h2><p data-v-f6cc6116>They print menus daily, and the cooking is built around seasonality. You never have to ask what is eighty-sixed because the paper in your hand is the source of truth. It keeps regulars like me curious, and it gives the team room to cook what is good right now.</p><h2 data-v-f6cc6116>The rotating gin &amp; tonics</h2><p data-v-f6cc6116>One of my favorite quirks: the bar often runs rotating gin and tonic builds, usually two at a time, and they swap often. I have gone back two weeks later and had totally different combos. It is an easy way to try something new without overthinking it.</p><h2 data-v-f6cc6116>Shared plates done right</h2><p data-v-f6cc6116>The menu keeps a few staples and then shifts around them. Most things are built to share, which is how I like to eat here. A couple of small plates, something from the wood fire, and a wild card from the day&#39;s list makes a great lineup. The whole concept leans Basque and wood-fired, which fits the style.</p><h2 data-v-f6cc6116>What I order most</h2><ul data-v-f6cc6116><li data-v-f6cc6116>Jam\xF3n croquettes</li><li data-v-f6cc6116>Boquerones</li><li data-v-f6cc6116>Spinach &amp; Gruy\xE8re croquettes</li><li data-v-f6cc6116>Shrimp a la plantxa</li></ul><h2 data-v-f6cc6116>The staff and that &quot;menu whisperer&quot;</h2><p data-v-f6cc6116>Everyone you deal with is on it: host, servers, bartenders. There is also a person whose whole job is to talk through the menu at the bar, field questions, and steer you to the right dishes. Knowing prep methods, sourcing, and how things come together makes a difference. It is the kind of role you usually see in fine-dining rooms, and it adds real value to a casual night out.</p><h2 data-v-f6cc6116>Happy hour is a cheat code</h2><p data-v-f6cc6116>Prices are fair for the quality, but happy hour is where you can really sample widely. They run bar happy hours with drink specials and half-priced small plates. That lets you order a spread without guessing.</p><h2 data-v-f6cc6116>Logistics: easy to get to, easy to park</h2><p data-v-f6cc6116>It is in the Meadow Mill building in Woodberry. I rarely wait if I am smart about time, and I have always found parking in the lot next to the restaurant.</p><h2 data-v-f6cc6116>Quick tips if it is your first time</h2><ul data-v-f6cc6116><li data-v-f6cc6116>Sit at the bar if you can. That is the show.</li><li data-v-f6cc6116>Ask about the day&#39;s G&amp;Ts.</li><li data-v-f6cc6116>Order for the table: two or three smalls, then share something from the grill.</li><li data-v-f6cc6116>If you like dessert, keep room. The pistachio ice cream I had recently was worth it.</li></ul><h2 data-v-f6cc6116>Why it stays in my rotation</h2><p data-v-f6cc6116>Consistent service. A menu that changes without losing its backbone. A bar program that nudges you to try new things. And a space that rewards regulars without getting precious about it. When I want a great meal and I am up for something new, this is where I land.</p></article><div class="mt-12 pt-8 border-t border-gray-200" data-v-f6cc6116><div class="flex justify-between items-center" data-v-f6cc6116>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-primary hover:text-secondary transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Back to Blog `);
          } else {
            return [
              createTextVNode(" \u2190 Back to Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex gap-4" data-v-f6cc6116><a href="https://twitter.com/intent/tweet?text=Why%20I%20keep%20going%20back%20to%20La%20Cuchara&amp;url=https://davidlarsen.me/blog/la-cuchara-baltimore-review" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-primary transition-colors duration-200" data-v-f6cc6116> Share on Twitter </a><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://davidlarsen.me/blog/la-cuchara-baltimore-review" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-primary transition-colors duration-200" data-v-f6cc6116> Share on LinkedIn </a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/la-cuchara-baltimore-review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const laCucharaBaltimoreReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6cc6116"]]);

export { laCucharaBaltimoreReview as default };
//# sourceMappingURL=la-cuchara-baltimore-review-DdVuGglC.mjs.map
