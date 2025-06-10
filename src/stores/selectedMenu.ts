import { defineStore } from 'pinia'

export const useTableViewStore = defineStore('tableView', {
  state: () => ({
    selectedMenu: '',
  }),
  actions: {
    setSelectedMenu(menu: string) {
      this.selectedMenu = menu
    },
  },
  persist: true,
})
