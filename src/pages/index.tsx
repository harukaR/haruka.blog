import Link from 'next/link'
import Image from 'next/image'
import styles from 'pages/index.module.scss'
import Parser from "rss-parser";
import dayjs from 'dayjs';
import 'dayjs/locale/ja'; 

import { Layout } from 'components/Layout/Layout'
import { client } from 'lib/client'
import {SectionTitle} from 'components/Layout/SectionTitle'

import { Button } from 'components/Ui/Button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';



type Feed ={
  title:string;
  link:string;
  enclosure:string;
  pubDate:string;
}

type Props ={
  imageUrl:string;
  title:string;
  link:string;
  isoDate: string;
  zennPosts:Array<Feed>;
}

dayjs.locale('ja');
export default function Home({zennPosts}:Props) {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [ref, inView] = useInView({
    threshold: 0.5, // 画面の50%が要素に重なったら検知
    triggerOnce: true, // 一度アニメーションを開始したら、もう一度再生しない
  });


  
  return (
    <motion.div
    initial={{ opacity: 0 }} // 初期状態
    animate={{ opacity: 1 }} // マウント時
    exit={{ opacity: 0 }}    // アンマウント時
    transition={{ delay: .5 }}
  >
    <Layout>
      <Button>
        もっと知る！
      </Button>
        <SectionTitle>
          OutPuts
        </SectionTitle>
        <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={animationVariants}
        transition={{ delay: .5 }}
      >
        <ul className={styles.articleList}>
          {zennPosts.map((post)=>(
             <li className={styles.articleItem}>
              <Link href={post.link}>
              <Image
                src={post.enclosure.url}
                sizes="100vw"
                width={313}
                height={176}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                alt="記事のアイキャッチ画像"
                className={styles.thumbnail}

              />
              <div className={styles.postDetail}>
                <p className={styles.postTitle}>{post.title}</p>
                <p className={styles.postDate}>{post.pubDate}</p>
              </div>
              </Link>
             </li>


          ))}

        </ul>
        </motion.div>
      </Layout>
    </motion.div>
  )
}
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" ,queries: { limit: 6, offset: 0} });
  const category = await client.get({ endpoint: "categories" });

  const parser = new Parser();
  const feedZenn = await parser.parseURL('https://zenn.dev/haruka_o/feed');
  const formattedZennPosts = feedZenn.items.map((post)=>{
    const formatDate = dayjs(post.pubDate).format('YYYY-MM-DD');
    return {...post,pubDate:formatDate}
  })
  
  return {
    props: {
      blogs: data.contents,
      eyecatch:data.contents,
      category:category.contents,
      totalCount: data.totalCount,
      zennPosts:formattedZennPosts,
    },
  };
};

