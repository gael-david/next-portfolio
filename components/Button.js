import React, { useState, useEffect } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  const switchCount = () => {
    setCount(count + 1);
    localStorage.setItem("Count", count + 1);
  };

  useEffect(() => {
    const getNumber = Number(localStorage.getItem("Count"));
    setCount(getNumber);
  }, []);

  return (
    <div>
      <button onClick={() => switchCount()}>{count}</button>
    </div>
  );
};

export default Button;
