import Link from "next/link";
import Author from "../Author/Author";
import styles from "./card.module.scss";

const PostCard = ({ post }) => (
  <>
    <Link href={`/blog/posts/${post.id}`}>
      <a className={styles.card}>
        <img src={post.image} className={styles.cardImage} />
        <div className={styles.cardDetails}>
          <h4>{post.title}</h4>
          <Author post={post} />
        </div>
      </a>
    </Link>
  </>
);

export default PostCard;
