<script setup lang="ts">
import { TableHeaderItem } from '@/models/TableHeaderItem'
import { TableRowItem } from '@/models/TableRowItem'
import type { EquipmentTableDataItem } from '@/types/TableData'
import { ref } from 'vue'

// data structure for the table

const tableHeaders = ref<TableHeaderItem[]>([
  new TableHeaderItem('equipmentName', '設備名稱'),
  new TableHeaderItem('brand', '品牌'),
  new TableHeaderItem('sensorQty', '感測器數量'),
  new TableHeaderItem('status', '狀態'),
  new TableHeaderItem('memo', '備註'),
])
const tableData = ref<TableRowItem[]>([
  new TableRowItem({
    equipmentName: 'Sensor A',
    brand: 'BrandX',
    sensorQty: 5,
    status: true,
    memo: 'First equipment',
  }),
  new TableRowItem({
    equipmentName: 'Sensor B',
    brand: 'BrandY',
    sensorQty: 3,
    status: false,
    memo: 'Second equipment',
  }),
])
</script>

<template>
  <div class="p-2">
    <MenuList />

    <div class="table2">
      <UTable
        loading
        loading-color="primary"
        loading-animation="carousel"
        :data="tableData"
        class="flex-1"
      />
    </div>
  </div>
</template>
