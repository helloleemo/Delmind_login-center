<script setup lang="ts">
import type { HeaderMenuItem } from '@/types/HeaderMenu'
import { ref } from 'vue'

const headerMenu = ref<HeaderMenuItem[]>([
  {
    label: 'User',
    icon: 'material-symbols:account-circle-full',
    linkTo: '/',
  },
  {
    icon: 'mdi:bell-outline',
    linkTo: '/',
  },

  {
    icon: 'mdi:cog-outline',
    linkTo: '/',
  },
])
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
    <div class="menuList">
      <ul class="flex items-center gap-2">
        <li v-for="(item, index) in headerMenu" :key="index" class="">
          <RouterLink
            v-if="item.linkTo"
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
