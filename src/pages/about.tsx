import { motion } from 'framer-motion'
import { Layout } from 'components/Layout/Layout'
import styles from 'pages/about.module.scss'
// import styles from 'components/Layout/header.module.scss'

export default function about() {
  return (
    <>
    <motion.div
    initial={{ opacity: 0 }} // 初期状態
    animate={{ opacity: 1 }} // マウント時
    exit={{ opacity: 0 }}    // アンマウント時
    transition={{ delay: .5 }}
  >
    <Layout>

        <div className={styles.content}>
        <h2 className={styles.aboutH2}>about me!</h2>
        <p className={styles.text}>東京の会社でフロントエンドエンジニアとして働いています。<br/>興味を持ったものにはすぐに飛びつきます。</p>
          <div className={styles.contentParts}>
          <h3>このサイトの目的</h3>
            <p>運用を通して「Search Console」「Analytics」について学んだり、学習のアウトプットのために運用をしております。このサイトを通してお金稼ぎとかは一切考えておりません...</p>
          </div>
          <div className={styles.contentParts}>
            <h3>趣味</h3>
            <p>ゲーム(FPS・ソシャゲ) / 読書</p>
          </div>
          <div className={styles.contentParts}>
            <h3>ちょっとできる</h3>
            <p >Html,Scss,Photoshop,Illustrator</p>
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
    </motion.div>
    </>
  )
}