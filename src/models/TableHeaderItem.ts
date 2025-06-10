export class TableHeaderItem {
  key: string
  label: string
  width?: number
  sortable: boolean

  constructor(key: string, label: string, sortable = false, width?: number) {
    this.key = key
    this.label = label
    this.sortable = sortable
    this.width = width
  }
}
