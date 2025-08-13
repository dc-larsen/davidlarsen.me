import { _ as __nuxt_component_0 } from "./nuxt-link-BNkaGh-2.js";
import { watch, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, withKeys, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { u as useRoute } from "../server.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/hookable/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/unctx/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/radix3/dist/index.mjs";
import "/Users/davidlarsen/Desktop/Projects/davidlarsen.me/node_modules/defu/dist/defu.mjs";
const _sfc_main$1 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Projects", href: "/projects" },
      { name: "Resume", href: "/Larsen_Resume.pdf", external: true }
    ];
    const route = useRoute();
    watch(() => route.path, () => {
    });
    function closeMobileMenu() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(unref(Disclosure), mergeProps({
        as: "nav",
        class: "bg-background/95 backdrop-blur-sm border-b border-gray-200",
        role: "navigation",
        "aria-label": "Main navigation"
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-4xl px-6"${_scopeId}><div class="flex h-16 items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "text-xl font-semibold text-primary hover:text-secondary transition-colors duration-200 focus-visible"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` David Larsen `);
                } else {
                  return [
                    createTextVNode(" David Larsen ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="hidden md:block"${_scopeId}><div class="ml-10 flex items-baseline space-x-8"${_scopeId}><!--[-->`);
            ssrRenderList(navigation, (item) => {
              _push2(`<!--[-->`);
              if (item.external) {
                _push2(`<a${ssrRenderAttr("href", item.href)} class="btn-link text-sm font-medium focus-visible" target="_blank" rel="noopener noreferrer"${_scopeId}>${ssrInterpolate(item.name)}</a>`);
              } else {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: item.href,
                  class: "btn-link text-sm font-medium focus-visible",
                  "aria-current": _ctx.$route.path === item.href ? "page" : void 0
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div><div class="md:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DisclosureButton), {
              class: "relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-gray-100 hover:text-secondary focus:outline-none focus-visible",
              "aria-expanded": open,
              "aria-controls": "mobile-menu",
              "aria-label": "Toggle navigation menu"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>${ssrInterpolate(open ? "Close" : "Open")} main menu</span>`);
                  if (!open) {
                    _push3(ssrRenderComponent(unref(Bars3Icon), {
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(XMarkIcon), {
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, toDisplayString(open ? "Close" : "Open") + " main menu", 1),
                    !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                      key: 0,
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    })) : (openBlock(), createBlock(unref(XMarkIcon), {
                      key: 1,
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(unref(DisclosurePanel), {
              id: "mobile-menu",
              class: "md:hidden border-t border-gray-200 bg-background/95 backdrop-blur-sm",
              onKeydown: closeMobileMenu
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-1 px-6 pb-3 pt-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(`<!--[-->`);
                    if (item.external) {
                      _push3(`<div class="w-full"${_scopeId2}><a${ssrRenderAttr("href", item.href)} class="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200" target="_blank" rel="noopener noreferrer"${_scopeId2}>${ssrInterpolate(item.name)}</a></div>`);
                    } else {
                      _push3(ssrRenderComponent(unref(DisclosureButton), {
                        as: "div",
                        class: "w-full"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: item.href,
                              class: "block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200",
                              "aria-current": _ctx.$route.path === item.href ? "page" : void 0,
                              onClick: closeMobileMenu
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_NuxtLink, {
                                to: item.href,
                                class: "block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200",
                                "aria-current": _ctx.$route.path === item.href ? "page" : void 0,
                                onClick: closeMobileMenu
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "aria-current"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-1 px-6 pb-3 pt-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                        return openBlock(), createBlock(Fragment, {
                          key: item.name
                        }, [
                          item.external ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "w-full"
                          }, [
                            createVNode("a", {
                              href: item.href,
                              class: "block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              onClick: closeMobileMenu
                            }, toDisplayString(item.name), 9, ["href"])
                          ])) : (openBlock(), createBlock(unref(DisclosureButton), {
                            key: 1,
                            as: "div",
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: item.href,
                                class: "block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200",
                                "aria-current": _ctx.$route.path === item.href ? "page" : void 0,
                                onClick: closeMobileMenu
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "aria-current"])
                            ]),
                            _: 2
                          }, 1024))
                        ], 64);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-4xl px-6" }, [
                createVNode("div", { class: "flex h-16 items-center justify-between" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "text-xl font-semibold text-primary hover:text-secondary transition-colors duration-200 focus-visible"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" David Larsen ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "hidden md:block" }, [
                    createVNode("div", { class: "ml-10 flex items-baseline space-x-8" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                        return openBlock(), createBlock(Fragment, {
                          key: item.name
                        }, [
                          item.external ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: item.href,
                            class: "btn-link text-sm font-medium focus-visible",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, toDisplayString(item.name), 9, ["href"])) : (openBlock(), createBlock(_component_NuxtLink, {
                            key: 1,
                            to: item.href,
                            class: "btn-link text-sm font-medium focus-visible",
                            "aria-current": _ctx.$route.path === item.href ? "page" : void 0
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to", "aria-current"]))
                        ], 64);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "md:hidden" }, [
                    createVNode(unref(DisclosureButton), {
                      class: "relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-gray-100 hover:text-secondary focus:outline-none focus-visible",
                      "aria-expanded": open,
                      "aria-controls": "mobile-menu",
                      "aria-label": "Toggle navigation menu"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, toDisplayString(open ? "Close" : "Open") + " main menu", 1),
                        !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                          key: 0,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(XMarkIcon), {
                          key: 1,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ]),
                      _: 2
                    }, 1032, ["aria-expanded"])
                  ])
                ])
              ]),
              createVNode(unref(DisclosurePanel), {
                id: "mobile-menu",
                class: "md:hidden border-t border-gray-200 bg-background/95 backdrop-blur-sm",
                onKeydown: withKeys(closeMobileMenu, ["esc"])
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-1 px-6 pb-3 pt-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                      return openBlock(), createBlock(Fragment, {
                        key: item.name
                      }, [
                        item.external ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full"
                        }, [
                          createVNode("a", {
                            href: item.href,
                            class: "block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: closeMobileMenu
                          }, toDisplayString(item.name), 9, ["href"])
                        ])) : (openBlock(), createBlock(unref(DisclosureButton), {
                          key: 1,
                          as: "div",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: item.href,
                              class: "block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200",
                              "aria-current": _ctx.$route.path === item.href ? "page" : void 0,
                              onClick: closeMobileMenu
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "aria-current"])
                          ]),
                          _: 2
                        }, 1024))
                      ], 64);
                    }), 64))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background text-primary" }, _attrs))}><a href="#content" class="skip-link">Skip to content</a><header class="relative z-40">`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`</header><main id="content" class="mx-auto max-w-7xl px-4 py-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="footer"><span class="left-align"> Made with <i class="far fa-heart text-red-500"></i> using <a class="link fab fa-vuejs text-green-600" href="https://nuxt.com" target="_blank" rel="noopener noreferrer" title="Built with Nuxt">Nuxt</a> in Baltimore, MD </span><span class="right-align">Updated: ${ssrInterpolate(unref(currentYear))}</span></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BHQiJgqu.js.map
