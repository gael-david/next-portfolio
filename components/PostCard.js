import Link from "next/link";
import Author from "./Author";
import styles from "../styles/card.module.scss";

const PostCard = ({ post }) => (
  <>
    <Link href={`/posts/${post.id}`}>
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
