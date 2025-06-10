<script setup lang="ts">
import { TableViewItem } from '@/types/TableView'
import { ref } from 'vue'

// menulist
const menuList = ref<TableViewItem[]>([
  new TableViewItem('設備列表', 'Equipment list', '', true),
  new TableViewItem('感測器列表', 'Sensor list', '', false),
  new TableViewItem('節點清單', 'Tag list', '', false),
])

//
const clickMenu = (index: number, item: string) => {
  // handle error
  if (index < 0 || !item) {
    console.error('invalid index or item')
    return
  }
  menuList.value.forEach((item, idx) => {
    if (idx === index) item.activate()
    else item.deactivate()
  })
}
</script>

<template>
  <div class="relative flex gap-5 border-b-gray-200 border-b-[1px]">
    <p
      @click="clickMenu(index, item.label)"
      v-for="(item, index) in menuList"
      :key="index"
      class="px-2 cursor-pointer pb-1"
    >
      {{ item.label }}
    </p>
    <div
      :class="{
        'left-[0px] w-[82px]': menuList[0].active,
        'left-[100px] w-[95px] ': menuList[1].active,
        'left-[215px] w-[83px]': menuList[2].active,
      }"
      class="absolute border-b-primary border-b-[3px] bottom-0 transition-all"
    ></div>
  </div>
</template>
