import Layout from "../components/Layout/Layout";
import PostList from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPosts }) {
  return (
    <Layout siteTitle="Blog - Gaël David">
      <PostList postListTitle="Latest posts" allPosts={allPosts} />
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
