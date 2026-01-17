<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-background/95 backdrop-blur-sm border-b border-gray-200" role="navigation" aria-label="Main navigation">
    <div class="mx-auto max-w-4xl px-6">
      <div class="flex h-16 items-center justify-between">
        <!-- Site title/logo -->
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="text-xl font-semibold text-primary hover:text-secondary transition-colors duration-200 focus-visible"
          >
            David Larsen
          </NuxtLink>
        </div>

        <!-- Desktop navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <template v-for="item in navigation" :key="item.name">
              <!-- External links (PDFs, etc.) -->
              <a
                v-if="item.external"
                :href="item.href"
                class="btn-link text-sm font-medium focus-visible"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.name }}
              </a>
              <!-- Internal routes -->
              <NuxtLink
                v-else
                :to="item.href"
                class="btn-link text-sm font-medium focus-visible"
                :aria-current="$route.path === item.href ? 'page' : undefined"
              >
                {{ item.name }}
              </NuxtLink>
            </template>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-gray-100 hover:text-secondary focus:outline-none focus-visible"
            :aria-expanded="open"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span class="sr-only">{{ open ? 'Close' : 'Open' }} main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <DisclosurePanel
      id="mobile-menu"
      class="md:hidden border-t border-gray-200 bg-background/95 backdrop-blur-sm"
      @keydown.esc="closeMobileMenu"
    >
      <div class="space-y-1 px-6 pb-3 pt-2">
        <template v-for="item in navigation" :key="item.name">
          <!-- External links (PDFs, etc.) -->
          <div v-if="item.external" class="w-full">
            <a
              :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </a>
          </div>
          <!-- Internal routes -->
          <DisclosureButton
            v-else
            as="div"
            class="w-full"
          >
            <NuxtLink
              :to="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 hover:text-secondary focus-visible transition-colors duration-200"
              :aria-current="$route.path === item.href ? 'page' : undefined"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </NuxtLink>
          </DisclosureButton>
        </template>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
]

const route = useRoute()

// Close mobile menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})

function closeMobileMenu() {
  // This function will be called by the disclosure component automatically
  // when clicking outside or pressing escape
}
</script>