import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CySUTwVK.mjs';
import { mergeProps, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-BK_8c_dM.mjs';
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

const _imports_0 = "" + buildAssetsURL("support-playbooks.drD_i0pX.png");
const _sfc_main = {
  __name: "thoughts-on-leadership",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Thoughts on leadership",
      meta: [
        { name: "description", content: "Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership." },
        { property: "og:title", content: "Thoughts on leadership" },
        { property: "og:description", content: "Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership." },
        { property: "og:image", content: "/support-playbooks.png" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Thoughts on leadership" },
        { name: "twitter:description", content: "Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto" }, _attrs))} data-v-05316e3b><div class="mb-8" data-v-05316e3b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "inline-flex items-center text-secondary hover:text-primary font-medium mb-6 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-05316e3b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-05316e3b${_scopeId}></path></svg> Back to Blog `);
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
      _push(`<div class="mb-4" data-v-05316e3b><span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium" data-v-05316e3b> Leadership </span></div><h1 class="text-4xl md:text-5xl font-bold text-primary mb-6" data-v-05316e3b> Thoughts on leadership </h1><div class="flex flex-wrap items-center text-gray-600 text-sm mb-6" data-v-05316e3b><span class="mr-4" data-v-05316e3b>by David Larsen</span><span class="mr-4" data-v-05316e3b>\u2022</span><time datetime="2025-08-11" class="mr-4" data-v-05316e3b> August 11, 2025 </time><span class="mr-4" data-v-05316e3b>\u2022</span><span class="mr-4" data-v-05316e3b>8 min read</span></div><div class="flex flex-wrap gap-2 mb-8" data-v-05316e3b><!--[-->`);
      ssrRenderList(["leadership", "management", "team-culture", "engineering"], (tag) => {
        _push(`<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm" data-v-05316e3b> #${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div><div class="mb-8" data-v-05316e3b><img${ssrRenderAttr("src", _imports_0)} alt="Thoughts on leadership" class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" data-v-05316e3b></div><div class="prose prose-lg max-w-none mb-12" data-v-05316e3b><blockquote data-v-05316e3b><p data-v-05316e3b><strong data-v-05316e3b>Author:</strong> David Larsen<br data-v-05316e3b><strong data-v-05316e3b>Published:</strong> August 11, 2025<br data-v-05316e3b><strong data-v-05316e3b>Last updated:</strong> August 11, 2025<br data-v-05316e3b><strong data-v-05316e3b>Reading time:</strong> ~8 minutes</p></blockquote><p data-v-05316e3b><strong data-v-05316e3b>Short version:</strong> I try to make good work easier. Set the intent, raise the floor, and get out of the way.</p><p data-v-05316e3b>Two things shaped how I lead: David Marquet&#39;s <em data-v-05316e3b>Turn the Ship Around!</em> and my time in support engineering at Contrast Security. The book pushed me toward leader-leader thinking. Contrast gave me the reps to put it into practice when things were moving fast.</p><h2 id="table-of-contents" data-v-05316e3b>Table of contents</h2><ul data-v-05316e3b><li data-v-05316e3b><a href="#intent-over-permission" data-v-05316e3b>Intent over permission</a></li><li data-v-05316e3b><a href="#principles-at-a-glance" data-v-05316e3b>Principles at a glance</a></li><li data-v-05316e3b><a href="#walkthrough-moving-support-into-qbrs-at-contrast" data-v-05316e3b>Walkthrough: moving support into QBRs at Contrast</a></li><li data-v-05316e3b><a href="#language-dos-and-donts" data-v-05316e3b>Language do&#39;s and don&#39;ts</a></li><li data-v-05316e3b><a href="#post-mortems-that-change-something" data-v-05316e3b>Post-mortems that change something</a></li><li data-v-05316e3b><a href="#building-on-strengths-at-synapse" data-v-05316e3b>Building on strengths at Synapse</a></li><li data-v-05316e3b><a href="#try-it-yourself" data-v-05316e3b>Try it yourself</a></li><li data-v-05316e3b><a href="#next-steps" data-v-05316e3b>Next steps</a></li></ul><h2 id="intent-over-permission" data-v-05316e3b>Intent over permission</h2><p data-v-05316e3b>Leader-leader sounds abstract until you change the language. The quickest unlock I have seen is swapping &quot;Can I\u2026?&quot; for &quot;I intend to\u2026&quot;. It forces clear thinking. What is the goal. What is the risk. Where are the guardrails. How do we roll back. When intent statements show up every day, the team stops waiting around. My job becomes coach and unblocker.</p><h2 id="principles-at-a-glance" data-v-05316e3b>Principles at a glance</h2><table data-v-05316e3b><thead data-v-05316e3b><tr data-v-05316e3b><th data-v-05316e3b>Principle</th><th data-v-05316e3b>What it looks like</th><th data-v-05316e3b>Why it works</th><th data-v-05316e3b>How to try it</th></tr></thead><tbody data-v-05316e3b><tr data-v-05316e3b><td data-v-05316e3b>Push control to where the info lives</td><td data-v-05316e3b>Decisions made by the person closest to the work</td><td data-v-05316e3b>Faster, fewer translation losses</td><td data-v-05316e3b>Replace approvals with &quot;I intend to\u2026&quot; plus risk and rollback</td></tr><tr data-v-05316e3b><td data-v-05316e3b>Clarity over control</td><td data-v-05316e3b>Clear why, constraints, and definition of done</td><td data-v-05316e3b>People pick better how when the why is visible</td><td data-v-05316e3b>Publish simple briefs and visible checklists</td></tr><tr data-v-05316e3b><td data-v-05316e3b>Certify, not brief</td><td data-v-05316e3b>Pairing, dry runs, and explicit sign-off before solo ownership</td><td data-v-05316e3b>Reduces guesswork under pressure</td><td data-v-05316e3b>Add a two-run rule before someone flies solo</td></tr><tr data-v-05316e3b><td data-v-05316e3b>Short feedback loops</td><td data-v-05316e3b>Post-mortems within 24 hours and visible actions</td><td data-v-05316e3b>Learning compounds, drift shrinks</td><td data-v-05316e3b>Put one doc change and one mechanism change on every Sev1 or Sev2</td></tr><tr data-v-05316e3b><td data-v-05316e3b>Mechanisms, not memos</td><td data-v-05316e3b>Fields, runbooks, automations</td><td data-v-05316e3b>Behaviors stick when encoded</td><td data-v-05316e3b>Add the field, add the step, wire the alert</td></tr></tbody></table><h2 id="walkthrough-moving-support-into-qbrs-at-contrast" data-v-05316e3b>Walkthrough: moving support into QBRs at Contrast</h2><p data-v-05316e3b>This was not an outage story. It was a growth push. Our department set an aggressive goal to run more QBRs. I was on the support team and had just taken over corporate accounts.</p><ol data-v-05316e3b><li data-v-05316e3b><p data-v-05316e3b><strong data-v-05316e3b>State intent</strong><br data-v-05316e3b> I told my manager: <em data-v-05316e3b>I intend to have support participate in this initiative with corporate accounts.</em> Clear scope and a clear why.</p></li><li data-v-05316e3b><p data-v-05316e3b><strong data-v-05316e3b>Share a lightweight template</strong><br data-v-05316e3b> I brought a QBR outline tuned for our customers: a few support metrics tied to value moments, top friction points, and a short roadmap of fixes with owners and dates.</p></li><li data-v-05316e3b><p data-v-05316e3b><strong data-v-05316e3b>Run the first rep fast</strong><br data-v-05316e3b> We booked the first customer that same week. Short deck. Most of the time spent on actions.</p></li><li data-v-05316e3b><p data-v-05316e3b><strong data-v-05316e3b>Feed findings back into the system</strong><br data-v-05316e3b> Items flowed to product, docs, and support runbooks. Nothing lived only in slides.</p></li><li data-v-05316e3b><p data-v-05316e3b><strong data-v-05316e3b>Scale what worked</strong><br data-v-05316e3b> Over the next couple of weeks, support ran QBRs with about half a dozen customers. The win was the role shift. Support showed up as an account partner with real inputs and follow-through.</p></li></ol><h2 id="language-dos-and-donts" data-v-05316e3b>Language do&#39;s and don&#39;ts</h2><table data-v-05316e3b><thead data-v-05316e3b><tr data-v-05316e3b><th data-v-05316e3b>Do</th><th data-v-05316e3b>Do Not</th></tr></thead><tbody data-v-05316e3b><tr data-v-05316e3b><td data-v-05316e3b>&quot;I intend to rotate keys for tenant X to close gap Y. Risk is session churn. Rollback is flag off within two minutes.&quot;</td><td data-v-05316e3b>&quot;Should I rotate keys?&quot;</td></tr><tr data-v-05316e3b><td data-v-05316e3b>&quot;Ship the fix behind a feature flag so that we can validate with customer A before broad release.&quot;</td><td data-v-05316e3b>&quot;We will ship soon.&quot;</td></tr><tr data-v-05316e3b><td data-v-05316e3b>&quot;Decision: option B because lower blast radius. We will revisit if error rate exceeds 2%.&quot;</td><td data-v-05316e3b>&quot;We picked B.&quot;</td></tr><tr data-v-05316e3b><td data-v-05316e3b>&quot;By Friday, outcome is a 20% drop in repeat tickets on topic Z.&quot;</td><td data-v-05316e3b>&quot;We will improve Z.&quot;</td></tr><tr data-v-05316e3b><td data-v-05316e3b>&quot;Post-mortem action: add runbook step 3 and automate alerting.&quot;</td><td data-v-05316e3b>&quot;We will be more careful.&quot;</td></tr></tbody></table><h2 id="post-mortems-that-change-something" data-v-05316e3b>Post-mortems that change something</h2><p data-v-05316e3b>I prefer post-mortem over after-action review. The rule is simple. If nothing changes, we did not learn. Each post-mortem closes with one process change, one doc update, and one automation or alert. We also keep a slim decision log so context does not evaporate when people rotate.</p><p data-v-05316e3b><strong data-v-05316e3b>Post-mortem starter (copy and adapt):</strong></p><blockquote data-v-05316e3b><p data-v-05316e3b><em data-v-05316e3b>What happened:</em> Brief timeline with key events</p><p data-v-05316e3b><em data-v-05316e3b>Why it happened:</em> Root causes, not just triggers</p><p data-v-05316e3b><em data-v-05316e3b>What we learned:</em> Concrete insights about our system/process</p><p data-v-05316e3b><em data-v-05316e3b>Actions taken:</em></p><ul data-v-05316e3b><li data-v-05316e3b>Process change: [specific change with owner and date]</li><li data-v-05316e3b>Documentation update: [what was added/changed]</li><li data-v-05316e3b>Technical improvement: [automation/alert/monitoring added]</li></ul></blockquote><h2 id="building-on-strengths-at-synapse" data-v-05316e3b>Building on strengths at Synapse</h2><p data-v-05316e3b>At Synapse, I inherited a strong foundation. The team was already doing great work - they just needed systems to scale their impact. We focused on three areas:</p><ul data-v-05316e3b><li data-v-05316e3b><strong data-v-05316e3b>Knowledge capture:</strong> Moved from Slack threads to searchable documentation</li><li data-v-05316e3b><strong data-v-05316e3b>Decision frameworks:</strong> Created simple templates for common choices</li><li data-v-05316e3b><strong data-v-05316e3b>Feedback loops:</strong> Regular retrospectives with actionable outcomes</li></ul><p data-v-05316e3b>The key insight: great people can do amazing work when you remove friction from their path.</p><h2 id="try-it-yourself" data-v-05316e3b>Try it yourself</h2><p data-v-05316e3b>Start small. Pick one area where your team asks permission frequently. Replace the approval process with an &quot;I intend to...&quot; template that includes:</p><ul data-v-05316e3b><li data-v-05316e3b>Clear objective</li><li data-v-05316e3b>Risk assessment</li><li data-v-05316e3b>Rollback plan</li><li data-v-05316e3b>Success metrics</li></ul><p data-v-05316e3b>Run it for two weeks. Measure the time saved and decisions made. Adjust the template based on what you learn.</p><h2 id="next-steps" data-v-05316e3b>Next steps</h2><p data-v-05316e3b>Leadership isn&#39;t about having all the answers. It&#39;s about creating environments where good answers emerge quickly and safely. The goal isn&#39;t to eliminate all mistakes - it&#39;s to make them cheap and educational.</p><p data-v-05316e3b>What&#39;s one place in your team where you could replace &quot;Can I?&quot; with &quot;I intend to?&quot; Start there.</p></div><div class="border-t border-gray-200 pt-8" data-v-05316e3b><div class="flex flex-col sm:flex-row justify-between items-center" data-v-05316e3b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-secondary hover:text-primary font-medium mb-4 sm:mb-0 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Back to All Posts `);
          } else {
            return [
              createTextVNode(" \u2190 Back to All Posts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-sm text-gray-500" data-v-05316e3b> Share this post with your team </div></div></div></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/thoughts-on-leadership.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thoughtsOnLeadership = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05316e3b"]]);

export { thoughtsOnLeadership as default };
//# sourceMappingURL=thoughts-on-leadership-DD5-shSY.mjs.map
