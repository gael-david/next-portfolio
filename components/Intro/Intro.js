import styles from "./intro.module.scss";
import ProfileImage from "../ProfileImage/ProfileImage";

const Intro = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileImage src="/images/profile.png" />
      <h1>Hi, I'm Gaël 👋</h1>
      <h2>
        Web <em>Developer</em>
      </h2>
      <p>
        Self-taught Fullstack web developer, former Wavestone IT Consultant and
        Audencia Business School graduate
      </p>
    </div>
  );
};

export default Intro;
