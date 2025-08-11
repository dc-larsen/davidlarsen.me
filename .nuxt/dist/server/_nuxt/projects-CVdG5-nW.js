import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-Bv8Dz-O7.js";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/hookable/dist/index.mjs";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/unctx/dist/index.mjs";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/radix3/dist/index.mjs";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/defu/dist/defu.mjs";
import "/Users/davidlarsen/Downloads/tylernhoward.github.io-develop/node_modules/ufo/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    image: {},
    description: {},
    githubUrl: {},
    exploreUrl: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" }, _attrs))}><div class="h-48 bg-gray-100 flex items-center justify-center overflow-hidden"><img${ssrRenderAttr("src", _ctx.image)}${ssrRenderAttr("alt", _ctx.title)} class="max-w-full max-h-full object-contain" loading="lazy"></div><div class="p-6"><h3 class="text-xl font-semibold text-primary mb-3">${ssrInterpolate(_ctx.title)}</h3><p class="text-gray-600 text-sm leading-relaxed mb-6">${ssrInterpolate(_ctx.description)}</p><div class="flex gap-3"><a${ssrRenderAttr("href", _ctx.githubUrl)} target="_blank" rel="noopener noreferrer" class="flex-1 bg-primary text-white text-center py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"><i class="fab fa-github mr-2"></i> GitHub </a><a${ssrRenderAttr("href", _ctx.exploreUrl)} target="_blank" rel="noopener noreferrer" class="flex-1 bg-secondary text-white text-center py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors duration-200 text-sm font-medium"><i class="fas fa-external-link-alt mr-2"></i> Explore </a></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Projects",
      meta: [
        {
          name: "description",
          content: "Customer support and success tools built by David Larsen, including playbooks, automation tools, and team management solutions."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto" }, _attrs))}><div class="text-center mb-12"><h1 class="text-4xl font-bold text-primary mb-4">Projects</h1><p class="text-xl text-gray-600">Customer support and success tools I&#39;ve built</p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">`);
      _push(ssrRenderComponent(_component_ProjectCard, {
        title: "Support Playbooks",
        image: "/help-desk.png",
        description: `Comprehensive collection of customer support playbooks covering escalation procedures, troubleshooting workflows, and team management strategies. Designed to help support teams provide consistent, high-quality customer experiences while scaling efficiently.`,
        "github-url": "https://github.com/dc-larsen/support-playbooks",
        "explore-url": "https://github.com/dc-larsen/support-playbooks"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ProjectCard, {
        title: "Customer Success Playbooks",
        image: "/image-customer-success.png",
        description: `Curated playbooks for customer success teams focused on onboarding, retention, expansion, and churn prevention strategies. Includes templates for customer health scoring, success metrics tracking, and proactive outreach workflows. Built from experience scaling customer success operations at high-growth startups.`,
        "github-url": "https://github.com/dc-larsen/customer-success-playbooks",
        "explore-url": "https://github.com/dc-larsen/customer-success-playbooks"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ProjectCard, {
        title: "Zendesk Slackbot",
        image: "/slackbot.jpg",
        description: `Slack bot integration for managers to streamline 1-on-1 preparation with their team members. Pulls Zendesk ticket data, performance metrics, and team insights to help managers have more effective, data-driven conversations with their reports.`,
        "github-url": "https://github.com/dc-larsen/zendesk-slackbot",
        "explore-url": "https://github.com/dc-larsen/zendesk-slackbot"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ProjectCard, {
        title: "GitHub Portfolio",
        image: "/pro.png",
        description: `View my complete GitHub portfolio for more projects related to customer support operations, team management tools, and technical troubleshooting solutions built throughout my career in support leadership.`,
        "github-url": "https://github.com/dc-larsen",
        "explore-url": "https://github.com/dc-larsen"
      }, null, _parent));
      _push(`</div><div class="text-center mt-16 p-8 bg-gray-50 rounded-lg"><h2 class="text-2xl font-semibold text-primary mb-4">Interested in Collaboration?</h2><p class="text-gray-700 mb-6"> I&#39;m always interested in discussing support operations, automation tools, and team efficiency projects. </p><a href="https://github.com/dc-larsen" target="_blank" rel="noopener noreferrer" class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 inline-flex items-center"><i class="fab fa-github mr-2"></i> View All Projects on GitHub </a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projects-CVdG5-nW.js.map
