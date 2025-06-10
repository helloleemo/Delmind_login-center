export class TableRowItem {
  [key: string]: unknown

  constructor(data: Record<string, unknown>) {
    Object.assign(this, data)
  }

  getValue(key: string): string {
    const value = this[key]
    return typeof value === 'string' ? value : ''
  }
}
