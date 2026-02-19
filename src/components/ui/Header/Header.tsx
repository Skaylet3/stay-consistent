import type { ReactNode } from 'react'
import styles from './Header.module.css'

interface HeaderProps {
  logo?: string
  children?: ReactNode
}

export default function Header({ logo = 'stay-consistent', children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>{logo}</span>
      {children && <nav className={styles.nav}>{children}</nav>}
    </header>
  )
}
