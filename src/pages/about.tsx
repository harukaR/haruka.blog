import { Header } from 'components/Layout/Header'
import { Layout } from 'components/Layout/Layout'
import { ToggleMode } from 'components/Layout/ToggleMode'
import styles from 'pages/about.module.scss'
import Link from 'next/link'
import { Children } from 'react'
// import styles from 'components/Layout/header.module.scss'

export default function about() {
  return (
    <>

    <Layout>

        <h2 className={styles.aboutH2}>about me!</h2>
        <p className={styles.name}>haruka</p>
        <p className={styles.text}>東京の会社でフロントエンドエンジニアとして働いています。</p>
        <div className={styles.content}>
          <div className={styles.contentParts}>
            <h3>趣味</h3>
            <p>ゲーム(FPS・ソシャゲ) / 読書</p>
          </div>
          <div className={styles.contentParts}>
            <h3>ちょっとできること</h3>
            <p >HTML,SCSS</p>
          </div>
          <div className={styles.contentParts}>
            <h3>ほんのちょっとできる</h3>
            <p>Javascript</p>
          </div>
          <div className={styles.contentParts}>
            <h3>触ったことある</h3>
            <p>Next.js,React,Typescript</p>
          </div>


        </div>
    </Layout>
    </>
  )
}