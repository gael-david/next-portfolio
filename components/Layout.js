import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ siteTitle, children }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,300;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css"
      ></link>
      <title>{siteTitle || "Gaël David - Portfolio"}</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
