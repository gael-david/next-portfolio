import Link from "next/link";
import Author from "../Author/Author";
import styles from "./card.module.scss";

const Card = ({ type, url, content }) => (
  <>
    <Link href={`${url}${content.id ? content.id : ""}`}>
      <a
        className={`${styles.card} ${
          type === "vertical" ? styles.verticalCard : ""
        }`}
      >
        <img src={content.image} className={styles.cardImage} />
        <div className={styles.cardDetails}>
          <h4>{content.title}</h4>
          {content.description ? (
            <p className={styles.cardDescription}>{content.description}</p>
          ) : null}
          {content.author ? <Author content={content} /> : null}
          {content.stack ? (
            <p className={styles.cardStack}>{`${content.stack}`}</p>
          ) : null}
        </div>
      </a>
    </Link>
  </>
);

export default Card;
