import React, { useState, useRef } from "react";
import list from "../database";
import { save, retrievedData } from "../API/api";

const InputTab = () => {
  const [userInput, setUserInput] = useState(["", "", ""]);
  const [select, setSelect] = useState(false);


  const entityRef = useRef();
  const linkRef = useRef();

  function handleBtnClick(identifier) {
    setUserInput((prevInput) => {
      let newInput = [...prevInput];
      newInput[0] = identifier.textContent;
      setSelect((prev) => !prev);
      return newInput;
    });
  }

  function handleInput(value, id) {
    setUserInput((prevInput) => {
      let newInput = [...prevInput];
      if (id === "entity_name") {
        newInput[1] = value;
      }
      if (id === "entity_link") {
        newInput[2] = value;
      }
      return newInput;
    });
  }

  function handleSave() {
    let newEntity = [];
    newEntity[0] = userInput[1];
    newEntity[1] = userInput[2];
    list[0][userInput[0]].push(newEntity);
    save(list);
    entityRef.current.value = "";
    linkRef.current.value = "";
    setSelect((prev) => !prev);
  }

  return (
    <div className="input_tab_content">
      <fieldset>
        <legend>Enter Your Data</legend>
        <p className="select_entity_label">Select Entity Type</p>
        <div className="entity_type_selectors">
          <button className="option_button" onClick={(e) => handleBtnClick(e.target)}>
            Regulator Body
          </button>
          <button className="option_button" onClick={(e) => handleBtnClick(e.target)}>
            Central PSU
          </button>
          <button className="option_button" onClick={(e) => handleBtnClick(e.target)}>
            State PSU
          </button>
          <button className="option_button" onClick={(e) => handleBtnClick(e.target)}>
            Autonomous Body
          </button>
        </div>
        <br />
        <label htmlFor="">Entity Name</label> <br />
        <input type="text" className="input_elem" onChange={(e) => handleInput(e.target.value, "entity_name")} ref={entityRef} /> <br /> <br />
        <label htmlFor="">Link</label> <br />
        <input type="text" className="input_elem" onChange={(e) => handleInput(e.target.value, "entity_link")} ref={linkRef} /> <br /> <br />
        <button className="save_btn" onClick={handleSave}>
          Save
        </button>
      </fieldset>
    </div>
  );
};

export default InputTab;
