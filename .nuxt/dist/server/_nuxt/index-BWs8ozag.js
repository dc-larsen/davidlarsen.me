import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-Bv8Dz-O7.js";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/unctx/dist/index.mjs";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/radix3/dist/index.mjs";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/defu/dist/defu.mjs";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/ufo/dist/index.mjs";
const _sfc_main$1 = {
  __name: "TerminalWindow",
  __ssrInlineRender: true,
  setup(__props) {
    const output = ref("");
    const command = ref("");
    ref([]);
    const inputLabel = ref("[david~]$");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mac-window w-full h-[32rem] overflow-hidden" }, _attrs))}><div class="mac-window-bar"><div class="mac-circles"><div class="mac-circle"></div></div><div class="mac-title-bar"><span class="text-xs font-medium text-gray-600">[david~]$</span></div></div><div class="terminal h-full"><div class="terminal-content">`);
      if (unref(output)) {
        _push(`<div class="output whitespace-pre-wrap mb-2">${ssrInterpolate(unref(output))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center"><span class="text-muted">${ssrInterpolate(unref(inputLabel))} </span><input${ssrRenderAttr("value", unref(command))} class="command-input flex-1" autocomplete="off" spellcheck="false"></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TerminalWindow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("pro.DZ6561Fe.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TerminalWindow = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col lg:flex-row items-center justify-center min-h-[80vh] gap-8" }, _attrs))} data-v-954bcf4c><div class="text-center lg:text-left lg:w-1/3" data-v-954bcf4c><div class="mb-8" data-v-954bcf4c><img class="pro-pic mx-auto lg:mx-0 mb-6" alt="David Larsen - Customer Support Leader"${ssrRenderAttr("src", _imports_0)} width="175" height="175" data-v-954bcf4c><h1 class="text-4xl lg:text-5xl font-bold mb-4 text-primary" data-v-954bcf4c> Hey there! I&#39;m David. </h1><p class="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed" data-v-954bcf4c> Customer support &amp; success leader in Baltimore. Supporting teams, building processes, and solving problems. </p></div><div class="flex justify-center lg:justify-start space-x-4 mb-8" data-v-954bcf4c><a href="https://www.linkedin.com/in/david-larsen-404622143/" target="_blank" rel="noopener noreferrer" class="btn-link fab fa-linkedin fa-2x" aria-label="LinkedIn Profile" title="Connect on LinkedIn" data-v-954bcf4c></a><a href="https://github.com/dc-larsen" target="_blank" rel="noopener noreferrer" class="btn-link fab fa-github fa-2x" aria-label="GitHub Profile" title="View GitHub Projects" data-v-954bcf4c></a><a href="https://www.flickr.com/photos/203372618@N08/" target="_blank" rel="noopener noreferrer" class="btn-link fab fa-flickr fa-2x" aria-label="Flickr Photos" title="Photography on Flickr" data-v-954bcf4c></a><a href="https://open.spotify.com/user/dc2larsen" target="_blank" rel="noopener noreferrer" class="btn-link fab fa-spotify fa-2x" aria-label="Spotify Profile" title="Music on Spotify" data-v-954bcf4c></a><a href="https://worldofwarcraft.blizzard.com/en-us/character/us/proudmoore/fizzl%C3%AA/" target="_blank" rel="noopener noreferrer" class="btn-link wow-icon fa-2x" aria-label="World of Warcraft Character" title="WoW Character Profile" data-v-954bcf4c></a></div></div><div class="desktop-only lg:block hidden lg:w-2/3 w-full" data-v-954bcf4c>`);
      _push(ssrRenderComponent(_component_TerminalWindow, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-954bcf4c"]]);
export {
  index as default
};
//# sourceMappingURL=index-BWs8ozag.js.map
