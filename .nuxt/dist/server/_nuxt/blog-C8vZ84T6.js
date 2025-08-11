import { mergeProps, useSSRContext, ref, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./v3-BK_8c_dM.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/hookable/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unctx/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/radix3/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/defu/dist/defu.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ufo/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/@unhead/vue/dist/index.mjs";
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
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group" }, _attrs))} data-v-bb126d50><div class="relative h-48 sm:h-64 overflow-hidden" data-v-bb126d50><img${ssrRenderAttr("src", __props.post.image)}${ssrRenderAttr("alt", __props.post.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-v-bb126d50><div class="absolute top-4 left-4" data-v-bb126d50><span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium" data-v-bb126d50>${ssrInterpolate(__props.post.category)}</span></div></div><div class="p-6" data-v-bb126d50><div class="flex items-center text-sm text-gray-500 mb-3" data-v-bb126d50><time${ssrRenderAttr("datetime", __props.post.date)} data-v-bb126d50>${ssrInterpolate(formatDate(__props.post.date))}</time><span class="mx-2" data-v-bb126d50>•</span><span data-v-bb126d50>${ssrInterpolate(__props.post.readTime)} min read</span></div><h3 class="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-200" data-v-bb126d50>${ssrInterpolate(__props.post.title)}</h3><p class="text-gray-600 mb-4 line-clamp-3" data-v-bb126d50>${ssrInterpolate(__props.post.excerpt)}</p>`);
      if (__props.post.tags && __props.post.tags.length) {
        _push(`<div class="flex flex-wrap gap-2 mb-4" data-v-bb126d50><!--[-->`);
        ssrRenderList(__props.post.tags, (tag) => {
          _push(`<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium" data-v-bb126d50> #${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-between" data-v-bb126d50><div class="inline-flex items-center text-secondary hover:text-primary font-medium transition-colors duration-200 cursor-pointer" data-v-bb126d50> Coming Soon <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-bb126d50><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-bb126d50></path></svg></div>`);
      if (__props.post.author) {
        _push(`<div class="text-sm text-gray-500" data-v-bb126d50> by ${ssrInterpolate(__props.post.author)}</div>`);
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bb126d50"]]);
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
    const blogPosts = ref([
      {
        id: 1,
        title: "Building High-Performance Support Teams in 2025",
        slug: "building-high-performance-support-teams-2025",
        excerpt: "Learn the key strategies for scaling customer support teams while maintaining quality and team satisfaction. From hiring practices to performance metrics, discover what works.",
        content: "",
        image: "/support-playbooks.png",
        category: "Leadership",
        tags: ["team-building", "support", "leadership", "scaling"],
        date: "2025-01-15",
        readTime: 8,
        author: "David Larsen"
      },
      {
        id: 2,
        title: "The Art of Technical Troubleshooting: A Support Leader's Guide",
        slug: "art-of-technical-troubleshooting-guide",
        excerpt: "Debugging complex technical issues requires more than just technical knowledge. Here's how to build systematic approaches that work every time.",
        content: "",
        image: "/zendesk-slackbot.png",
        category: "Technical",
        tags: ["troubleshooting", "technical-support", "processes", "debugging"],
        date: "2024-12-20",
        readTime: 12,
        author: "David Larsen"
      },
      {
        id: 3,
        title: "Customer Success Metrics That Actually Matter",
        slug: "customer-success-metrics-that-matter",
        excerpt: "Move beyond vanity metrics to track what really drives customer satisfaction and business growth. A deep dive into meaningful KPIs.",
        content: "",
        image: "/customer-success.png",
        category: "Strategy",
        tags: ["metrics", "customer-success", "kpis", "analytics"],
        date: "2024-12-10",
        readTime: 6,
        author: "David Larsen"
      },
      {
        id: 4,
        title: "Automation vs. Human Touch: Finding the Right Balance",
        slug: "automation-vs-human-touch-balance",
        excerpt: "When should you automate customer support processes, and when is the human touch irreplaceable? Learn to make these critical decisions.",
        content: "",
        image: "/markdowner.png",
        category: "Technology",
        tags: ["automation", "ai", "customer-experience", "process-improvement"],
        date: "2024-11-25",
        readTime: 10,
        author: "David Larsen"
      },
      {
        id: 5,
        title: "Remote Team Leadership: Lessons from Baltimore",
        slug: "remote-team-leadership-lessons",
        excerpt: "Managing distributed support teams requires different skills. Here are the strategies that work for building culture and maintaining performance remotely.",
        content: "",
        image: "/pro.png",
        category: "Leadership",
        tags: ["remote-work", "team-culture", "management", "distributed-teams"],
        date: "2024-11-10",
        readTime: 7,
        author: "David Larsen"
      },
      {
        id: 6,
        title: "API Documentation: A Support Team's Secret Weapon",
        slug: "api-documentation-support-secret-weapon",
        excerpt: "Great API docs don't just help developers—they empower support teams to solve complex technical issues faster. Here's how to leverage them.",
        content: "",
        image: "/threeo.jpg",
        category: "Technical",
        tags: ["api", "documentation", "technical-support", "developer-tools"],
        date: "2024-10-28",
        readTime: 9,
        author: "David Larsen"
      }
    ]);
    const selectedCategory = ref("All");
    const searchQuery = ref("");
    const sortedPosts = computed(() => {
      return [...blogPosts.value].sort((a, b) => new Date(b.date) - new Date(a.date));
    });
    const featuredPost = computed(() => {
      return sortedPosts.value[0] || null;
    });
    const categories = computed(() => {
      const cats = ["All", ...new Set(blogPosts.value.map((post) => post.category))];
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
      const _component_BlogCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto" }, _attrs))}><div class="text-center mb-12"><h1 class="text-4xl font-bold text-primary mb-4">Blog</h1><p class="text-xl text-gray-600 max-w-2xl mx-auto"> Thoughts on customer support, team leadership, technology, and everything in between. </p></div>`);
      if (unref(featuredPost)) {
        _push(`<div class="mb-16"><h2 class="text-2xl font-semibold text-primary mb-6">Featured Post</h2><div class="bg-white rounded-lg shadow-xl overflow-hidden"><div class="md:flex"><div class="md:w-1/2"><img${ssrRenderAttr("src", unref(featuredPost).image)}${ssrRenderAttr("alt", unref(featuredPost).title)} class="w-full h-64 md:h-full object-cover"></div><div class="md:w-1/2 p-8"><div class="flex items-center text-sm text-gray-500 mb-4"><span class="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium mr-4">${ssrInterpolate(unref(featuredPost).category)}</span><time${ssrRenderAttr("datetime", unref(featuredPost).date)}>${ssrInterpolate(formatDate(unref(featuredPost).date))}</time><span class="mx-2">•</span><span>${ssrInterpolate(unref(featuredPost).readTime)} min read</span></div><h3 class="text-2xl font-bold text-primary mb-4">${ssrInterpolate(unref(featuredPost).title)}</h3><p class="text-gray-600 mb-6">${ssrInterpolate(unref(featuredPost).excerpt)}</p>`);
        if (unref(featuredPost).tags) {
          _push(`<div class="flex flex-wrap gap-2 mb-6"><!--[-->`);
          ssrRenderList(unref(featuredPost).tags, (tag) => {
            _push(`<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"> #${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 inline-flex items-center font-medium cursor-pointer"> Coming Soon <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></div></div></div></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=blog-C8vZ84T6.js.map
