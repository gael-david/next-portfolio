import Layout from "../components/Layout/Layout";
import Intro from "../components/Intro/Intro";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <Layout siteTitle="Gaël David - Portfolio">
      <Intro />
      <Contact />
    </Layout>
  );
};

export default Home;
