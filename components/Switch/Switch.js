import React, { useState, useEffect } from "react";
import styles from "./switch.module.scss";

const Switch = () => {
  const light = "🌞";
  const dark = "🌖";

  const [mode, setMode] = useState("initial");

  const switchMode = () => {
    if (mode === light) {
      setMode(dark);
      localStorage.setItem("Theme", dark);
      document.body.classList.replace(light, dark);
    } else {
      setMode(light);
      localStorage.setItem("Theme", light);
      document.body.classList.replace(dark, light);
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === dark) {
      setMode(dark);
      document.body.classList.replace(light, dark);
    } else {
      setMode(light);
      document.body.classList.replace(dark, light);
    }
  }, [mode]);

  if (mode === "initial") return <div></div>;
  return (
    <div>
      <label className={styles.switch}>
        <input type="checkbox" onClick={() => switchMode()} />
        <div className={styles.slider}>
          <div
            className={`${styles.sliderButton} ${
              mode === dark ? styles.sliderButtonOn : ""
            }`}
          >
            {mode}
          </div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
