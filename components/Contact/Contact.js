import styles from "./contact.module.scss";
import Button from "../Button/Button";
import Social from "../Social/Social";

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.socialWrapper}>
        <Social
          media="linkedin"
          href="https://www.linkedin.com/in/gaeldavid/"
        />
        <Social media="github" href="https://github.com/gael-david" />
        <Social media="twitter" href="https://twitter.com/gaeldavid44" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          href="/bucket/CV_Developer_G_David.pdf"
          type="primary"
          content="Download CV"
          icon={"arrow-down"}
        />
        <Button
          href="mailto:gaelcdavid@gmail.com"
          type="secondary"
          content="Contact"
          icon={"paper-plane"}
        />
      </div>
    </div>
  );
};

export default Contact;
