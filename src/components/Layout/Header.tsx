
import { ToggleMode } from 'components/Ui/ToggleMode'

import styles from 'components/Layout/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'


export const Header = () => {

  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerFlex}>
         <Link href='/' className={styles.headerLogo}>
         <Image src='/avatar.png' width={40} height={40} alt='アバターの画像'/>
            <h1 className={styles.headerH1}>haruka.log</h1>
            
          </Link>

          {/* <Link href='/about' className={styles.headerLink}>
              <p>about Me!</p>
          </Link> */}
          <div>
            <ToggleMode/>
          </div>
        </div>
    </header>
    </>
  )
}