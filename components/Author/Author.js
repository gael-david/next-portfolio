import ProfileImage from "../ProfileImage/ProfileImage";
import Date from "../Date/Date";
import styles from "./author.module.scss";

const Author = ({ post }) => (
  <div className={styles.authorComponent}>
    <div className={styles.authorImageWrapper}>
      <ProfileImage src={post.authorImage} className={styles.authorImage} />
    </div>
    <div>
      <p className={styles.authorName}>{post.author}</p>
      <Date dateString={post.date} className={styles.authorDate} />
    </div>
  </div>
);

export default Author;
