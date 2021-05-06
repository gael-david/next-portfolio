import PostCard from "../components/PostCard";

const PostList = ({ postListTitle, allPosts }) => (
  <section className="container">
    <h1>{postListTitle}</h1>
    <div className="grid">
      {allPosts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  </section>
);

export default PostList;
