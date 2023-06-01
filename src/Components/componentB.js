import React, { useState } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "../style/componentB.css";

const ComponentB = ({ cendol, handleIncreaseCounter }) => {
  const [clr, setClr] = useState(false);
  console.log(clr);
  const [backgroundclr, setBackgroundclr] = useState("#FFFF00");
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const handleclr = () => {
    const randomColor = getRandomColor();
    setBackgroundclr(randomColor);
    setClr(!clr);
  };
  return (
    <div className="container">
      <div className="card">
        <div
          style={{
            backgroundColor: backgroundclr,
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{cendol}</h2>

          <p
            onClick={handleIncreaseCounter}
            style={{
              fontSize: "10px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "white",
              fontWeight: "900",
            }}
          >
            click to increment counter{" "}
          </p>
        </div>
      </div>
      <div>
        <button className={clr ? " button1" : "button2"} onClick={handleclr}>
          Change Color
        </button>
      </div>
    </div>
  );
};

export default ComponentB;
