import Link from "next/link";
import Layout from "../components/Layout";
import Author from "../components/Author";
import BlogCard from "../components/BlogCard";
import styles from "../styles/index.module.scss";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPosts }) {
  return (
    <Layout siteTitle="Blog - Gaël David">
      <section className={styles.latestPosts}>
        <h1>Latest posts</h1>
        <div className={styles.grid}>
          {allPosts.map((post) => (
            <BlogCard post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  return {
    props: {
      allPosts,
    },
  };
}
