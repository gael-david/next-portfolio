import Layout from "../../components/Layout/Layout";
import GridList from "../../components/GridList/GridList";
import { getSortedPostsData } from "../../lib/posts";

export default function Blog({ allPosts }) {
  return (
    <Layout siteTitle="Blog - Gaël David">
      <GridList
        listTitle="Latest posts"
        allContent={allPosts}
        url="blog/posts/"
      />
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
