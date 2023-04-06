import Link from 'next/link'
import Image from 'next/image'
import styles from 'pages/index.module.scss'

import { ToggleMode } from 'components/Layout/ToggleMode'
import { Layout } from 'components/Layout/Layout'
import { client } from 'lib/client'
import {SectionTitle} from 'components/Layout/SectionTitle'
import {Blog,Eyecatch,Category} from 'types/blog'
import { Button } from 'components/Ui/Button'




type Props ={
  blogs: Blog[];
  eyecatch:Eyecatch[];
  category:Category[];
  imageUrl:string;
}
export default function Home({blogs,category,imageUrl}:Props) {

  return (
    <Layout>
    <Button>
      もっと知る！
    </Button>
      <SectionTitle>
         OutPuts
      </SectionTitle>
      <ul className={styles.articleList}>
        {blogs.map((blog) => (
          <li key={blog.id} className={styles.articleItem}>
            <Link href={`/blog/${blog.id}`}>
            <Image
              src={blog.eyecatch && `${blog.eyecatch.url}`}
              sizes="100vw"
              width={313}
              height={176}
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt="ブログのアイキャッチ画像"
              className={styles.thumbnail}

            />
            <p className={styles.articleTitle}>{blog.title}</p>
  
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" ,queries: { limit: 6, offset: 0} });
  const category = await client.get({ endpoint: "categories" });

  return {
    props: {
      blogs: data.contents,
      eyecatch:data.contents,
      category:category.contents,
      totalCount: data.totalCount,
    },
  };
};

