import { Header } from 'components/Layout/Header'
import { Footer } from 'components/Layout/Footer';
import styles from 'components/Layout/layout.module.scss'
import { ReactNode } from 'react';

type Props ={
  children:ReactNode
}

export const Layout = ({children}:Props) => {

  return (
    <>
      <Header/>
        <main className={styles.main}>
          {children}
        </main>
      <Footer />
    </>
  )
  
}
