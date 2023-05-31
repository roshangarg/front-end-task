import React, { useState } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "../style/componentB.css";

const ComponentB = ({ cendol, handleIncreaseCounter }) => {
  const [clr, setClr] = useState(false);
  console.log(clr);
  const handleclr = () => {
    setClr(!clr);
  };
  return (
    <div className="container">
      <div className="card">
        <div className={clr ? "blucircle" : "redcircle"}>
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
      <div className="button">
        <button onClick={handleclr}>Change Color</button>
      </div>
    </div>
  );
};

export default ComponentB;
