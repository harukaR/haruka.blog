import { ReactNode } from 'react'
import { ToggleMode } from 'components/Layout/ToggleMode'

import styles from 'components/Layout/header.module.scss'
import Link from 'next/link'


export const Header = () => {

  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerFlex}>
         <Link href='/'>
            <h1 className={styles.headerH1}>haruka.blog</h1>
          </Link>
          <Link href='/about' className={styles.headerLink}>
              <p>about Me!</p>
          </Link>
          <div>
            <ToggleMode/>
          </div>
        </div>
    </header>
    </>
  )
}