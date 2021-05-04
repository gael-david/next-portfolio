import Link from "next/link";
import ProfileImage from "../../components/ProfileImage";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  return (
    <Layout siteTitle={`${post.title} - Gaël David`}>
      <h1>{post.title}</h1>
      <Date dateString={post.date} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div>
        <p>Author: Gaël David</p>
      </div>
      <Link href="/">
        <a>Back to the homepage</a>
      </Link>
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
