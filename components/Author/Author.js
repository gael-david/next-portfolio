import ProfileImage from "../ProfileImage/ProfileImage";
import Date from "../Date/Date";
import styles from "./author.module.scss";

const Author = ({ content }) => (
  <div className={styles.authorComponent}>
    <div className={styles.authorImageWrapper}>
      <ProfileImage src={content.authorImage} className={styles.authorImage} />
    </div>
    <div>
      <p className={styles.authorName}>{content.author}</p>
      <Date dateString={content.date} className={styles.authorDate} />
    </div>
  </div>
);

export default Author;
