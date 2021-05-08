import styles from "./button.module.scss";

const Button = ({ content, icon, type, href }) => {
  return (
    <>
      <a
        className={`${styles.button} ${
          type === "primary" ? styles.primaryButton : styles.secondaryButton
        }`}
        href={href}
      >
        <i className={`fas fa-${ icon }`}></i>
        {content}
      </a>
    </>
  );
};

export default Button;
