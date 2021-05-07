import React, { useState, useEffect } from "react";
import styles from "../styles/switch.module.scss";

const DarkSwitch = () => {
  const [mode, setMode] = useState("🌟");
  const light = "🌟";
  const dark = "🌖";

  const switchMode = (mode, setMode) => {
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

  return (
    <div>
      <div className={styles.switchAxis}>
        <button
          className={styles.switchButton}
          onClick={() => switchMode(mode, setMode)}
        >
          {mode}
        </button>
      </div>
    </div>
  );
};

export default DarkSwitch;
