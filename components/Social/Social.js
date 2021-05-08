import styles from "./social.module.scss";

const Social = ({ media, href }) => {
  return (
    <>
      <a href={href} target="_blank">
        <i className={`fab fa-${media} ${styles.socialIcon}`}></i>
      </a>
    </>
  );
};

export default Social;
