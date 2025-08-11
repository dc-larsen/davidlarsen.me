import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About",
      meta: [
        {
          name: "description",
          content: "Learn more about David Larsen, a customer support and success leader in Baltimore specializing in team building, technical troubleshooting, and operations systems design."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto" }, _attrs))}><div class="text-center mb-12"><h1 class="text-4xl font-bold text-primary mb-4">About David</h1><p class="text-xl text-gray-600">Customer Support &amp; Success Leader in Baltimore</p></div><div class="grid md:grid-cols-2 gap-12 items-start"><div class="space-y-8"><div><h2 class="text-2xl font-semibold text-primary mb-4">Background</h2><div class="prose prose-lg text-gray-700"><p> I&#39;m a customer support and success leader based in Baltimore, MD. I specialize in building stronger teams, solving complex technical problems, and scaling global support organizations at high-growth startups. </p><br><p> My experience spans technical troubleshooting (APIs, logs, infrastructure), scalable operations system design, team mentoring &amp; leadership, and high-stakes technical issue resolution. </p></div></div><div><h2 class="text-2xl font-semibold text-primary mb-4">When I&#39;m Not Working</h2><ul class="space-y-2 text-gray-700"><li class="flex items-center"><span class="mr-2">🐶</span> Chasing my sheepadoodle Goku around Patterson Park </li><li class="flex items-center"><span class="mr-2">☕</span> Exploring Baltimore&#39;s coffee scene </li><li class="flex items-center"><span class="mr-2">📚</span> Reading about systems design and operations </li><li class="flex items-center"><span class="mr-2">🥪</span> Hunting for Baltimore&#39;s best breakfast sandwich </li></ul></div></div><div class="space-y-8"><div><h2 class="text-2xl font-semibold text-primary mb-4">Core Expertise</h2><ul class="space-y-2 text-gray-700"><li>• Customer Support &amp; Success Leadership</li><li>• Technical Troubleshooting</li><li>• Team Building &amp; Mentoring</li><li>• Operations Systems Design</li></ul></div><div><h2 class="text-2xl font-semibold text-primary mb-4">Tools &amp; Platforms</h2><div class="flex flex-wrap gap-2"><span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Salesforce</span><span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Zendesk</span><span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Splunk</span><span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Postman</span><span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">SQL</span><span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Kubernetes</span><span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Zapier</span><span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Jira</span></div></div><div><h2 class="text-2xl font-semibold text-primary mb-4">Specializations</h2><ul class="space-y-2 text-gray-700"><li class="flex items-center"><span class="mr-2">⚙️</span> Support org scaling &amp; efficiency </li><li class="flex items-center"><span class="mr-2">🚨</span> High-stakes technical issue resolution </li><li class="flex items-center"><span class="mr-2">✍️</span> Workflow automation &amp; tooling </li><li class="flex items-center"><span class="mr-2">🔧</span> APIs, logs &amp; infrastructure troubleshooting </li><li class="flex items-center"><span class="mr-2">👥</span> Cross-functional team leadership </li></ul></div></div></div><div class="text-center mt-12 p-8 bg-gray-50 rounded-lg"><h2 class="text-2xl font-semibold text-primary mb-4">Let&#39;s Connect</h2><p class="text-gray-700 mb-6"> Interested in discussing support operations, team leadership, or technical troubleshooting? </p><div class="flex justify-center space-x-4"><a href="https://www.linkedin.com/in/david-larsen-404622143/" target="_blank" rel="noopener noreferrer" class="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 flex items-center"><i class="fab fa-linkedin mr-2"></i> Connect on LinkedIn </a><a href="/David_Larsen_Unified_Resume.pdf" target="_blank" class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center"><i class="far fa-file-pdf mr-2"></i> View Resume </a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-DM6FCMIQ.js.map
