import { n as navigateTo, a as __nuxt_component_0 } from './server.mjs';
import { withAsyncContext, useSSRContext } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/h3/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/destr/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/hookable/dist/index.mjs';
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

const _sfc_main = {
  __name: "la-cuchara-baltimore-review",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => navigateTo("/blog/la-cuchara-baltimore-review", { redirectCode: 301 })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/la-cuchara-baltimore-review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=la-cuchara-baltimore-review-Bh_FKbLe.mjs.map
