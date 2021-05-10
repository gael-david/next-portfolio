import Layout from "../components/Layout/Layout";
import Intro from "../components/Intro/Intro";
import Contact from "../components/Contact/Contact";
import GridList from "../components/GridList/GridList";
import BlogPosts from "../components/GridList/GridList";
import projects from "../lib/projects";
import { getSortedPostsData } from "../lib/posts";

const Home = ({ allPosts }) => {
  return (
    <Layout siteTitle="Gaël David - Portfolio">
      <Intro />
      <Contact />
      <GridList
        type="vertical"
        listTitle="My latest projects"
        allContent={projects}
      />
      <GridList
        listTitle="Latest blog posts"
        allContent={allPosts}
        url="/blog/posts/"
      />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  return {
    props: {
      allPosts,
    },
  };
}
