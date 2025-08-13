import { _ as __nuxt_component_0 } from './nuxt-link-BNkaGh-2.mjs';
import { mergeProps, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_1 } from './sample-slack-post-NJZpw9NX.mjs';
import { u as useHead } from './v3-BK_8c_dM.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ufo/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/h3/dist/index.mjs';
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

const _sfc_main = {
  __name: "zendesk-slack-cheat-sheet",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "One-on-one autopilot: the Zendesk \u2192 Slack cheat sheet",
      meta: [
        { name: "description", content: "A lightweight bot that checks Google Calendar for upcoming 1:1s, pulls a focused Zendesk snapshot for the attendee, and posts a compact summary to Slack so managers arrive prepped without extra work." },
        { property: "og:title", content: "One-on-one autopilot: the Zendesk \u2192 Slack cheat sheet" },
        { property: "og:description", content: "A lightweight bot that checks Google Calendar for upcoming 1:1s, pulls a focused Zendesk snapshot for the attendee, and posts a compact summary to Slack so managers arrive prepped without extra work." },
        { property: "og:image", content: "/slackbot.png" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "One-on-one autopilot: the Zendesk \u2192 Slack cheat sheet" },
        { name: "twitter:description", content: "A lightweight bot that checks Google Calendar for upcoming 1:1s, pulls a focused Zendesk snapshot for the attendee, and posts a compact summary to Slack so managers arrive prepped without extra work." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto" }, _attrs))} data-v-08553e47><div class="mb-8" data-v-08553e47>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "inline-flex items-center text-secondary hover:text-primary font-medium mb-6 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-08553e47${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-08553e47${_scopeId}></path></svg> Back to Blog `);
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
      _push(`<div class="mb-4" data-v-08553e47><span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium" data-v-08553e47> Technical </span></div><h1 class="text-4xl md:text-5xl font-bold text-primary mb-6" data-v-08553e47> One-on-one autopilot: the Zendesk \u2192 Slack cheat sheet </h1><div class="flex flex-wrap items-center text-gray-600 text-sm mb-6" data-v-08553e47><span class="mr-4" data-v-08553e47>by David Larsen</span><span class="mr-4" data-v-08553e47>\u2022</span><time datetime="2025-08-13" class="mr-4" data-v-08553e47> August 13, 2025 </time><span class="mr-4" data-v-08553e47>\u2022</span><span class="mr-4" data-v-08553e47>7 min read</span></div><div class="flex flex-wrap gap-2 mb-8" data-v-08553e47><!--[-->`);
      ssrRenderList(["zendesk", "slack", "github-actions", "google-calendar", "service-accounts", "1:1s", "cs-ops", "automation", "manager-tooling"], (tag) => {
        _push(`<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm" data-v-08553e47> #${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div><div class="mb-8" data-v-08553e47><img${ssrRenderAttr("src", _imports_0)} alt="One-on-one autopilot: the Zendesk \u2192 Slack cheat sheet" class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" data-v-08553e47></div><div class="prose prose-lg max-w-none mb-12" data-v-08553e47><p data-v-08553e47>I wanted a manager to be able to show up to every 1:1 with a clean cheat sheet and zero prep. The idea first hit when my manager was juggling about 15 direct reports and weekly 1:1s. I did not build the tool at that company and they never used it, but the pain point stuck with me. Later I coded a small bot to make the prep disappear: show up with a shared summary of recent work and a few discussion flags. No homework. Just signal.</p><h2 data-v-08553e47>What it does (by system)</h2><h3 data-v-08553e47>What happens in Google Calendar</h3><ul data-v-08553e47><li data-v-08553e47>GitHub Actions checks Google Calendar every 5 minutes for upcoming meetings with &quot;1on1&quot; in the title.</li><li data-v-08553e47>When it finds one starting soon, it grabs the attendee email that is not the organizer (the direct report) and the start time.</li><li data-v-08553e47>If the meeting is within the lead window (about 30 minutes), it triggers the next step.</li></ul><h3 data-v-08553e47>What happens in Zendesk</h3><ul data-v-08553e47><li data-v-08553e47>Using that attendee email, the bot looks up the matching Zendesk user.</li><li data-v-08553e47>It pulls a focused snapshot for the last 7 days (configurable): tickets handled and solved, positive CSAT count and ratio, reopens, SLA breaches, urgent or open items, on-hold items older than N days, and tickets older than N days.</li><li data-v-08553e47>It collects links for anything that needs attention so you can jump straight in.</li></ul><h3 data-v-08553e47>What happens in Slack</h3><ul data-v-08553e47><li data-v-08553e47>The bot formats the Zendesk snapshot into a compact, readable post: headline stats first, flags with links next, and a short &quot;prompts for the 1:1&quot; block.</li><li data-v-08553e47>It posts the summary to the designated Slack channel about 30 minutes before the meeting so both manager and rep see the same truth.</li></ul><h2 data-v-08553e47>Using it in your 1:1</h2><ol data-v-08553e47><li data-v-08553e47>Put &quot;1on1&quot; in your recurring meeting title and invite the rep&#39;s email that matches their Zendesk user.</li><li data-v-08553e47>About 30 minutes before the meeting, a summary lands in Slack with links and a few prompts.</li><li data-v-08553e47>Use the time for patterns, coaching, and decisions instead of screensharing dashboards.</li></ol><h2 data-v-08553e47>Sample Slack post</h2><p data-v-08553e47><img${ssrRenderAttr("src", _imports_1)} alt="Sample Slack post" data-v-08553e47></p><h2 data-v-08553e47>Setup and docs</h2><p data-v-08553e47>For installation, configuration, and environment variables, see the README:<br data-v-08553e47><a href="https://github.com/dc-larsen/zendesk-slackbot#readme" target="_blank" rel="noopener noreferrer" data-v-08553e47>https://github.com/dc-larsen/zendesk-slackbot#readme</a></p></div><div class="border-t border-gray-200 pt-8" data-v-08553e47><div class="flex flex-col sm:flex-row justify-between items-center" data-v-08553e47>`);
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
      _push(`</div></div></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/zendesk-slack-cheat-sheet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zendeskSlackCheatSheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-08553e47"]]);

export { zendeskSlackCheatSheet as default };
//# sourceMappingURL=zendesk-slack-cheat-sheet-Bphpk4wp.mjs.map
