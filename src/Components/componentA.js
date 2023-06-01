import React, { useState } from "react";
import ComponentB from "./componentB";

const ComponentA = () => {
  const [cendol, setCendol] = useState(2);

  const handleIncreaseCounter = () => {
    setCendol(cendol + 10);
  };
  return (
    <div>
      <ComponentB
        cendol={cendol}
        handleIncreaseCounter={handleIncreaseCounter}
      />
    </div>
  );
};

export default ComponentA;
