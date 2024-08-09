import React, { useState } from "react";
import InputTab from "./InputTab";
import Display_Panel from "./Display_Panel";

const Body = () => {
  const [panel, setPanel] = useState(<Display_Panel />);

  function handleClick(id) {
    if (id === "A") {
      setPanel(<Display_Panel />);
    }
    if (id === "B") {
      setPanel(<InputTab />);
    }
    if (id === "C") {
      setPanel(<Display_Panel />);
    }
  }

  return (
    <div className="body_div">
      <div className="sidebar">
        <button className="sidebar_button" onClick={() => handleClick("A")}>
          A
        </button>
        <button className="sidebar_button" onClick={() => handleClick("B")}>
          B
        </button>
        <button className="sidebar_button" onClick={() => handleClick("C")}>
          C
        </button>
      </div>
      {panel}
    </div>
  );
};

export default Body;
