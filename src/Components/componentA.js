import React, { useState } from "react";
import ComponentB from "./componentB";

const ComponentA = () => {
  const [cendol, setCendol] = useState(2);
  const [backgroundclr, setBackgroundclr] = useState("#FFFF00");
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const handleIncreaseCounter = () => {
    const randomColor = getRandomColor();
    setBackgroundclr(randomColor);

    setCendol(cendol + 10);
  };
  return (
    <div>
      <ComponentB
        cendol={cendol}
        handleIncreaseCounter={handleIncreaseCounter}
        backgroundclr={backgroundclr}
      />
    </div>
  );
};

export default ComponentA;
