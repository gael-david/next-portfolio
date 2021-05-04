import Link from "next/link";
import Layout from "../components/Layout";
import ProfileImage from "../components/ProfileImage";
import Date from "../components/Date";
import styles from "../styles/index.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout siteTitle="Blog - Gaël David">
      <div className={styles.container}>
        <ProfileImage />
        <h1 className={styles.title}>Gaël David</h1>
        <p className={styles.description}>
          Hello, I'm Gaël. I am a self-taught web developer who loves cinema and
          everything food-related.
        </p>

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
