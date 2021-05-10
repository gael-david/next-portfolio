import Card from "../Card/Card";
import styles from "./gridList.module.scss";

const GridList = ({ listTitle, allContent, type, url }) => (
  <section className="container">
    <h1>{listTitle}</h1>
    <div
      className={`${styles.grid} ${type === "vertical" ? styles.gridFull : ""}`}
    >
      {allContent.map((content) => (
        <Card
          url={url || content.url}
          content={content}
          key={content.id || content.title}
          type={type}
        />
      ))}
    </div>
  </section>
);

export default GridList;
