import ProfileImage from "./ProfileImage";
import Date from "./Date";
import styles from "../styles/author.module.scss";

const Author = ({ post }) => (
  <div className={styles.authorComponent}>
    <div className={styles.authorImageWrapper}>
      <ProfileImage src={post.authorImage} className={styles.authorImage} />
    </div>
    <div>
      <p className="colorBlue bold">{post.author}</p>
      <Date dateString={post.date} className={styles.authorDate} />
    </div>
  </div>
);

export default Author;
