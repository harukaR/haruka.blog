import { ToggleMode } from 'components/Layout/ToggleMode'


import Link from 'next/link'
import { Layout } from 'components/Layout/Layout'
import { client } from 'lib/client'
import {Blog,Eyecatch,Category} from 'types/blog'
import styles from 'pages/index.module.scss'


type Props ={
  blogs: Blog[];
  eyecatch:Eyecatch[];
  category:Category[];
}
export default function Home({blogs,eyecatch,category}:Props) {

  return (
    <Layout>
      <ul className={styles.articleList}>
        {blogs.map((blog) => (
          <li key={blog.id} className={styles.articleItem}>
            <Link href={`/blog/${blog.id}`}>
            {blog.title}
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

