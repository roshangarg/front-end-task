import React, { useState } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "../style/componentB.css";

const ComponentB = ({ cendol, handleIncreaseCounter, backgroundclr }) => {
  const [clr, setClr] = useState(false);
  console.log(clr);
  const handleclr = () => {
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
            // width: 150px;
            // height: 150px;
            // border-radius: 50%;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
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
