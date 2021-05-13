import styles from "./header.module.scss";
import Link from "next/link";
import DarkSwitch from "../Switch/Switch";

const Header = () => (
  <>
    <header className={styles.appHeader}>
      <Link href="/">
        <a className={`${styles.navIcon}`}>
          Gaël <span className="colorBlue">David</span>
        </a>
      </Link>
      <div className={styles.navBar}>
        <DarkSwitch />
        <div className={styles.navButtons}>
          <Link href="/bucket/CV_Developer_G_David.pdf" target="_blank">
            <a className={styles.resumeNav}>Resume</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div className={styles.navBurger}>|||</div>
      </div>
    </header>
  </>
);

export default Header;
