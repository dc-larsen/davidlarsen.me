import { _ as __nuxt_component_0 } from './nuxt-link-CySUTwVK.mjs';
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { b as blogPosts } from './blogPosts-Ns7lzFqZ.mjs';
import { u as useHead } from './v3-BK_8c_dM.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ufo/dist/index.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/h3/dist/index.mjs';
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

const _sfc_main$1 = {
  __name: "BlogCard",
  __ssrInlineRender: true,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
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
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group" }, _attrs))} data-v-e32211e5><div class="relative h-48 sm:h-64 overflow-hidden" data-v-e32211e5><img${ssrRenderAttr("src", __props.post.image)}${ssrRenderAttr("alt", __props.post.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-v-e32211e5><div class="absolute top-4 left-4" data-v-e32211e5><span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium" data-v-e32211e5>${ssrInterpolate(__props.post.category)}</span></div></div><div class="p-6" data-v-e32211e5><div class="flex items-center text-sm text-gray-500 mb-3" data-v-e32211e5><time${ssrRenderAttr("datetime", __props.post.date)} data-v-e32211e5>${ssrInterpolate(formatDate(__props.post.date))}</time><span class="mx-2" data-v-e32211e5>\u2022</span><span data-v-e32211e5>${ssrInterpolate(__props.post.readTime)} min read</span></div><h3 class="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-200" data-v-e32211e5>${ssrInterpolate(__props.post.title)}</h3><p class="text-gray-600 mb-4 line-clamp-3" data-v-e32211e5>${ssrInterpolate(__props.post.excerpt)}</p>`);
      if (__props.post.tags && __props.post.tags.length) {
        _push(`<div class="flex flex-wrap gap-2 mb-4" data-v-e32211e5><!--[-->`);
        ssrRenderList(__props.post.tags, (tag) => {
          _push(`<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium" data-v-e32211e5> #${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-between" data-v-e32211e5>`);
      if (__props.post.content) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${__props.post.slug}`,
          class: "inline-flex items-center text-secondary hover:text-primary font-medium transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read More <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e32211e5${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-e32211e5${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Read More "),
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M9 5l7 7-7 7"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="inline-flex items-center text-secondary hover:text-primary font-medium transition-colors duration-200 cursor-pointer" data-v-e32211e5> Coming Soon <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-e32211e5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-e32211e5></path></svg></div>`);
      }
      if (__props.post.author) {
        _push(`<div class="text-sm text-gray-500" data-v-e32211e5> by ${ssrInterpolate(__props.post.author)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></article>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e32211e5"]]);
const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Blog",
      meta: [
        {
          name: "description",
          content: "David Larsen's blog on customer support, team leadership, technology, and professional insights from Baltimore."
        }
      ]
    });
    const blogPosts$1 = ref(blogPosts);
    const selectedCategory = ref("All");
    const searchQuery = ref("");
    const sortedPosts = computed(() => {
      return [...blogPosts$1.value].sort((a, b) => new Date(b.date) - new Date(a.date));
    });
    const featuredPost = computed(() => {
      return sortedPosts.value[0] || null;
    });
    const categories = computed(() => {
      const cats = ["All", ...new Set(blogPosts$1.value.map((post) => post.category))];
      return cats;
    });
    const filteredPosts = computed(() => {
      let posts = sortedPosts.value.slice(1);
      if (selectedCategory.value !== "All") {
        posts = posts.filter((post) => post.category === selectedCategory.value);
      }
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        posts = posts.filter(
          (post) => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }
      return posts;
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
      const _component_BlogCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto" }, _attrs))}><div class="text-center mb-12"><h1 class="text-4xl font-bold text-primary mb-4">Blog</h1><p class="text-xl text-gray-600 max-w-2xl mx-auto"> Thoughts on customer support, team leadership, technology, and everything in between. </p></div>`);
      if (unref(featuredPost)) {
        _push(`<div class="mb-16"><h2 class="text-2xl font-semibold text-primary mb-6">Featured Post</h2><div class="bg-white rounded-lg shadow-xl overflow-hidden"><div class="md:flex"><div class="md:w-1/2"><img${ssrRenderAttr("src", unref(featuredPost).image)}${ssrRenderAttr("alt", unref(featuredPost).title)} class="w-full h-64 md:h-full object-cover"></div><div class="md:w-1/2 p-8"><div class="flex items-center text-sm text-gray-500 mb-4"><span class="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium mr-4">${ssrInterpolate(unref(featuredPost).category)}</span><time${ssrRenderAttr("datetime", unref(featuredPost).date)}>${ssrInterpolate(formatDate(unref(featuredPost).date))}</time><span class="mx-2">\u2022</span><span>${ssrInterpolate(unref(featuredPost).readTime)} min read</span></div><h3 class="text-2xl font-bold text-primary mb-4">${ssrInterpolate(unref(featuredPost).title)}</h3><p class="text-gray-600 mb-6">${ssrInterpolate(unref(featuredPost).excerpt)}</p>`);
        if (unref(featuredPost).tags) {
          _push(`<div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
          ssrRenderList(unref(featuredPost).tags, (tag) => {
            _push(`<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"> #${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(featuredPost).content) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blog/${unref(featuredPost).slug}`,
            class: "bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 inline-flex items-center font-medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Read Full Article <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
              } else {
                return [
                  createTextVNode(" Read Full Article "),
                  (openBlock(), createBlock("svg", {
                    class: "w-5 h-5 ml-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 5l7 7-7 7"
                    })
                  ]))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div class="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 inline-flex items-center font-medium cursor-pointer"> Coming Soon <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-8"><div class="flex flex-col sm:flex-row gap-4 items-center justify-between"><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
          unref(selectedCategory) === category ? "bg-secondary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        ])}">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div><div class="relative"><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Search posts..." class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"><svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"><!--[-->`);
      ssrRenderList(unref(filteredPosts), (post) => {
        _push(ssrRenderComponent(_component_BlogCard, {
          key: post.id,
          post
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(filteredPosts).length === 0) {
        _push(`<div class="text-center py-12"><div class="text-gray-400 mb-4"><svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><h3 class="text-xl font-medium text-gray-600 mb-2">No posts found</h3><p class="text-gray-500">Try adjusting your search or filter criteria.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filteredPosts).length > 0) {
        _push(`<div class="text-center"><button class="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"> Load More Posts </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-CXLoM_KV.mjs.map
