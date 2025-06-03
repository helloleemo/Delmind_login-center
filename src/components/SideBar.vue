<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue'

const sidebarMenu = ref<NavigationMenuItem[]>([
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    open: true,
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        to: '/',
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download',
        to: '/',
      },
      {
        label: 'GitHub',
        icon: 'i-simple-icons-github',
        badge: 'Hot',
        to: '/',
      },
    ],
  },
])
</script>

<template>
  <!-- side bar -->
  <UNavigationMenu
    orientation="vertical"
    :items="sidebarMenu"
    class="data-[orientation=vertical]:w-60"
  />
</template>
