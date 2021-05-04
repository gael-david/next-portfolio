import Link from "next/link";
import Layout from "../components/Layout";
import ProfileImage from "../components/ProfileImage";
import Date from "../components/Date";
import styles from "../styles/index.module.scss";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout siteTitle="Blog - Gaël David">
      <h1>Latest posts</h1>
      <div className={styles.grid}>
        {allPostsData.map(({ id, title, date }) => (
          <>
            <Link href={`/posts/${id}`}>
              <a className={styles.card}>
                <h3>{title}</h3>
                <Date dateString={date} />
              </a>
            </Link>
          </>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
