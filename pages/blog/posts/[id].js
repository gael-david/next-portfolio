import Link from "next/link";
import Layout from "../../../components/Layout/Layout";
import Author from "../../../components/Author/Author";
import styles from "../../../styles/post.module.scss";
import { getAllPostIds, getPostData } from "../../../lib/posts";

export default function Post({ post }) {
  return (
    <Layout siteTitle={`${post.title} - Gaël David`}>
      <div className={styles.postContainer}>
        <header className={styles.postHeader}>
          <h1>{post.title}</h1>
          <Author post={post} />
        </header>
        <img
          src={post.image}
          height={150}
          width={150}
          alt="Post Image"
          className={styles.postImage}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className={styles.postContent}
        />
        <Link href="/blog">
          <a>
            <p>
              <span>⬅</span> Go back
            </p>
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
};
