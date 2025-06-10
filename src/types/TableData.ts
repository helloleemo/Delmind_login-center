export interface EquipmentTableDataItem {
  equipmentId: number
  equipmentName: string
  brand?: string
  sensorQty?: number
  status: 'Active' | 'Inactive' | 'Maintenance'
  memo: string
  action?: {
    label: string
    icon?: string
    action?: () => void
  }[]
}
