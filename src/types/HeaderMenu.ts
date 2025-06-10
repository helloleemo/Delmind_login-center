export interface HeaderMenuItem {
  name?: string
  label?: string
  icon: string
  linkTo?: string
  action?: () => void
}

export const headerMenu: HeaderMenuItem[] = []
