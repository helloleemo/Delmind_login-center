export class TableViewItem {
  label: string
  subLabel?: string
  icon?: string
  active: boolean

  constructor(label: string, icon?: string, subLabel?: string, active: boolean = false) {
    this.label = label
    this.icon = icon
    this.subLabel = subLabel
    this.active = active
  }

  activate() {
    this.active = true
  }

  deactivate() {
    this.active = false
  }
}
