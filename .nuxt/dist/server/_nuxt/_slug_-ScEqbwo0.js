import { _ as __nuxt_component_0 } from "./nuxt-link-CySUTwVK.js";
import { computed, mergeProps, unref, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { b as blogPosts } from "./blogPosts-Ns7lzFqZ.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { u as useHead } from "./v3-BK_8c_dM.js";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/hookable/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unctx/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/radix3/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/defu/dist/defu.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const blogPosts$1 = blogPosts;
    const route = useRoute();
    const slug = route.params.slug;
    const post = computed(() => {
      return blogPosts$1.find((p) => p.slug === slug) || null;
    });
    useHead(() => {
      if (!post.value) {
        return {
          title: "Post Not Found",
          meta: [
            { name: "description", content: "Blog post not found." }
          ]
        };
      }
      return {
        title: post.value.title,
        meta: [
          { name: "description", content: post.value.excerpt },
          { property: "og:title", content: post.value.title },
          { property: "og:description", content: post.value.excerpt },
          { property: "og:image", content: post.value.image },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: post.value.title },
          { name: "twitter:description", content: post.value.excerpt }
        ]
      };
    });
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto" }, _attrs))} data-v-416ca632>`);
      if (!unref(post)) {
        _push(`<div class="text-center py-12" data-v-416ca632><h1 class="text-2xl font-semibold text-gray-600 mb-4" data-v-416ca632>Post Not Found</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "text-secondary hover:text-primary font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ← Back to Blog `);
            } else {
              return [
                createTextVNode(" ← Back to Blog ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-416ca632><div class="mb-8" data-v-416ca632>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "inline-flex items-center text-secondary hover:text-primary font-medium mb-6 transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-416ca632${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-416ca632${_scopeId}></path></svg> Back to Blog `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 mr-2",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M15 19l-7-7 7-7"
                  })
                ])),
                createTextVNode(" Back to Blog ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mb-4" data-v-416ca632><span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium" data-v-416ca632>${ssrInterpolate(unref(post).category)}</span></div><h1 class="text-4xl md:text-5xl font-bold text-primary mb-6" data-v-416ca632>${ssrInterpolate(unref(post).title)}</h1><div class="flex flex-wrap items-center text-gray-600 text-sm mb-6" data-v-416ca632><span class="mr-4" data-v-416ca632>by ${ssrInterpolate(unref(post).author)}</span><span class="mr-4" data-v-416ca632>•</span><time${ssrRenderAttr("datetime", unref(post).date)} class="mr-4" data-v-416ca632>${ssrInterpolate(formatDate(unref(post).date))}</time><span class="mr-4" data-v-416ca632>•</span><span class="mr-4" data-v-416ca632>${ssrInterpolate(unref(post).readTime)} min read</span>`);
        if (unref(post).lastUpdated) {
          _push(`<span class="mr-4" data-v-416ca632>•</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(post).lastUpdated) {
          _push(`<span class="text-xs text-gray-500" data-v-416ca632> Updated ${ssrInterpolate(formatDate(unref(post).lastUpdated))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(post).tags && unref(post).tags.length) {
          _push(`<div class="flex flex-wrap gap-2 mb-8" data-v-416ca632><!--[-->`);
          ssrRenderList(unref(post).tags, (tag) => {
            _push(`<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm" data-v-416ca632> #${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(post).image) {
          _push(`<div class="mb-8" data-v-416ca632><img${ssrRenderAttr("src", unref(post).image)}${ssrRenderAttr("alt", unref(post).title)} class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" data-v-416ca632></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="prose prose-lg max-w-none mb-12" data-v-416ca632>${unref(post).content ?? ""}</div><div class="border-t border-gray-200 pt-8" data-v-416ca632><div class="flex flex-col sm:flex-row justify-between items-center" data-v-416ca632>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "text-secondary hover:text-primary font-medium mb-4 sm:mb-0 transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ← Back to All Posts `);
            } else {
              return [
                createTextVNode(" ← Back to All Posts ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="text-sm text-gray-500" data-v-416ca632> Share this post with your team </div></div></div></div>`);
      }
      _push(`</article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-416ca632"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-ScEqbwo0.js.map
