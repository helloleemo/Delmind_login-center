<script setup lang="ts">
import type { HeaderMenuItem } from '@/types/HeaderMenu'
import { ref } from 'vue'

// header menu items
const headerMenu = ref<HeaderMenuItem[]>([
  {
    label: 'User',
    icon: 'material-symbols:person-outline-rounded',
    linkTo: '/',
  },
  {
    name: '',
    icon: 'material-symbols:notifications-outline-rounded',
    linkTo: '/',
  },

  {
    name: 'settings',
    icon: 'material-symbols:settings-outline-rounded',
    // linkTo: '/',
    action: () => {
      toggleSubMenu()
    },
  },
  {
    name: '',
    icon: 'solar:sun-2-outline',
    action: () => {
      toggleDarkMode()
    },
  },
])

// dark mode toggle
const toggleDarkMode = () => {
  console.log('Toggle dark mode action triggered')
  // const htmlElement = document.documentElement
  // if (htmlElement.classList.contains('dark')) {
  //   htmlElement.classList.remove('dark')
  // } else {
  //   htmlElement.classList.add('dark')
  // }
}

// sub menu toggle
const toggleSubMenu = () => {
  console.log('Toggle sub menu action triggered')
}
</script>

<template>
  <!-- header -->
  <div
    class="header flex items-center justify-between p-2 px-3 bg-white dark:bg-gray-800 border-b border-gray-200"
  >
    <div class="logo flex items-center gap-2">
      <div class="icon p-2 rounded-sm hover:bg-gray-100 transition-colors cursor-pointer">
        <UIcon name="material-symbols:menu-rounded" class="size-5" />
      </div>
      <img class="w-[120px]" src="../assets/logo.svg" alt="" />
    </div>
    <div class="menuList relative">
      <ul class="flex items-center gap-2">
        <li v-for="(item, index) in headerMenu" :key="index" class="relative">
          <!-- Handle items with actions -->
          <div
            v-if="item.action"
            class="flex justify-center items-center w-full rounded-sm hover:bg-gray-100 transition-colors p-2 cursor-pointer"
            @click="item.action"
          >
            <UIcon :name="item.icon" class="size-5 text-gray-500" />
            <p v-if="item.label" class="text-sm pl-2 text-gray-500">{{ item.label }}</p>
            <div v-show="item.name === 'settings'" class="absolute top-12 border">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>

          <!-- Handle items with links -->
          <RouterLink
            v-else-if="item.linkTo"
            :to="item.linkTo"
            class="flex justify-center items-center w-full rounded-sm hover:bg-gray-100 transition-colors p-2"
          >
            <UIcon :name="item.icon" class="size-5 text-gray-500" />
            <p v-if="item.label" class="text-sm pl-2 text-gray-500">{{ item.label }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
