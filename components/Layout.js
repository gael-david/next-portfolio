import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ siteTitle, children }) => (
  <>
    <Head>
      <title>{siteTitle || "Gaël David - Portfolio"}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
