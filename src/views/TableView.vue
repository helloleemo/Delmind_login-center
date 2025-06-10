<script setup lang="ts">
import type { EquipmentTableDataItem } from '@/types/TableData'
import { ref } from 'vue'

// data structure for the table

const tableHeaders = ref<string[]>([
  'Equipment ID',
  'Equipment Name',
  'Brand',
  'Status',
  'Sensor Quantity',
  'Memo',
])
const tableData = ref<EquipmentTableDataItem[]>([
  {
    equipmentId: 1,
    equipmentName: 'Sensor A',
    brand: 'BrandX',
    sensorQty: 5,
    status: 'Active',
    memo: 'First equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 2,
    equipmentName: 'Sensor B',
    brand: 'BrandY',
    sensorQty: 3,
    status: 'Inactive',
    memo: 'Second equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 3,
    equipmentName: 'Sensor C',
    brand: 'BrandZ',
    sensorQty: 8,
    status: 'Active',
    memo: 'Third equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 4,
    equipmentName: 'Sensor D',
    brand: 'BrandX',
    sensorQty: 10,
    status: 'Maintenance',
    memo: 'Fourth equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 5,
    equipmentName: 'Sensor E',
    brand: 'BrandY',
    sensorQty: 2,
    status: 'Inactive',
    memo: 'Fifth equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 6,
    equipmentName: 'Sensor F',
    brand: 'BrandZ',
    sensorQty: 4,
    status: 'Active',
    memo: 'Sixth equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 7,
    equipmentName: 'Sensor G',
    brand: 'BrandX',
    sensorQty: 7,
    status: 'Active',
    memo: 'Seventh equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 8,
    equipmentName: 'Sensor H',
    brand: 'BrandY',
    sensorQty: 1,
    status: 'Inactive',
    memo: 'Eighth equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 9,
    equipmentName: 'Sensor I',
    brand: 'BrandZ',
    sensorQty: 6,
    status: 'Active',
    memo: 'Ninth equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
  {
    equipmentId: 10,
    equipmentName: 'Sensor J',
    brand: 'BrandX',
    sensorQty: 9,
    status: 'Maintenance',
    memo: 'Tenth equipment',
    action: [
      { label: 'Edit', icon: 'edit', action: () => {} },
      { label: 'Delete', icon: 'delete', action: () => {} },
      { label: 'View', icon: 'view', action: () => {} },
    ],
  },
])

// style
const dataStyle = ref<string>('px-1 py-3 text-sm text-gray-700 border-b border-gray-300')
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

    <div class="table">
      <table class="table-fixed w-full">
        <thead>
          <tr class="border-b-2 border-gray-300 text-center">
            <th class="py-1 text-sm" v-for="(item, index) in tableHeaders" :key="index">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center border-b border-gray-300"
            v-for="(item, index) in tableData"
            :key="index"
          >
            <td :class="dataStyle">{{ item.equipmentId }}</td>
            <td :class="dataStyle">{{ item.equipmentName }}</td>
            <td :class="dataStyle">{{ item.brand }}</td>
            <td :class="dataStyle">{{ item.status }}</td>
            <td :class="dataStyle">{{ item.sensorQty }}</td>
            <td :class="dataStyle">{{ item.memo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
