import React from "react";
import list from "../database";
import { save, retrievedData } from "../API/api";

const Display_List = ({ list_type }) => {
  function handleTitleClick(e) {
    let list_title_elements = document.querySelectorAll("div.list_title");
    console.log(list_title_elements);
    for (let elem of list_title_elements) {
      if (elem.textContent === list_type) {
        let li_Items = elem.nextElementSibling.children;
        for (let li_Item of li_Items) {
          li_Item.firstElementChild.click();
          console.log(li_Items.firstElementChild);
        }
      }
    }
  }

  let display;
  let listDisplay = list[0][list_type].map((item) => (
    <li key={item[1]}>
      <a href={item[1]} target="_blank">
        {item[0]}
      </a>
    </li>
  ));
  let rdata = retrievedData();
  console.log(rdata);

  return (
    <div className="display_list">
      <div className="list_title" onClick={handleTitleClick}>
        {list_type}
      </div>
      <ol>{listDisplay}</ol>
    </div>
  );
};

export default Display_List;
