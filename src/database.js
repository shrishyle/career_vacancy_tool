import {save, retrievedData} from "./API/api"

let retrivedList = retrievedData();

let readyList = [
  {
    "Regulator Body": [],
    "Central PSU": [],
    "State PSU": [],
    "Autonomous Body": [],
  },
];

let list;

if (retrivedList) {
  list = retrivedList;
} else {
  list = readyList;
}

export default list;
