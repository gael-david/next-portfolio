import styles from "../styles/header.module.scss";

const Header = () => (
  <>
    <header>
      <a href="" className={styles.navIcon}>
        G<em>D</em>
      </a>
      <div className={styles.navButtons}>
        <a
          target="_blank"
          href="bucket/CV_G_David.pdf"
          className={styles.resumeNav}
        >
          Resume
        </a>
        <a href="/#projects">Projects</a>
        <a href="/#technologies">Technologies</a>
      </div>
    </header>
  </>
);

export default Header;
