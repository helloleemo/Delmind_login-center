<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = ref<string>(router.currentRoute.value.path)

// lifecycle hook to watch for route changes

// side bar menu
const titleStyle = ref<string>('text-base  flex justify-between py-3')
const listStyle = ref<string>(
  ' hover:bg-gray-100 flex items-center gap-2 px-3 py-2 rounded-sm transition-colors text-gray-500',
)
// const activeStyle = ref<string>('text-red-500 font-semibold')

const sidebarMenu = ref<NavigationMenuItem[]>([
  {
    label: 'Section1',
    class: titleStyle.value,
    open: true,
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        to: '/about',
        class: listStyle.value,
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download',
        to: '/',
        class: listStyle.value,
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        to: '',
        class: listStyle.value,
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
        to: '',
        class: listStyle.value,
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description:
          'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
        to: '',
        class: listStyle.value,
      },
    ],
  },
  {
    label: 'Section2',
    class: titleStyle.value,
    open: true,
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        to: '/',
        class: listStyle.value,
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download',
        to: '',
        class: listStyle.value,
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        to: '',
        class: listStyle.value,
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
        to: '',
        class: listStyle.value,
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description:
          'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
        to: '',
        class: listStyle.value,
      },
    ],
  },
])

// menu active state
function isActive(item: NavigationMenuItem): boolean {
  console.log('isActive', item, currentRoute.value)
  return item.to ? currentRoute.value === item.to : false
}
</script>

<template>
  <div class="border-r border-gray-500 width-fit">
    <!-- side bar -->
    <UNavigationMenu
      orientation="vertical"
      :items="sidebarMenu"
      class="data-[orientation=vertical]:w-64"
      :active="isActive"
    />
  </div>
</template>
