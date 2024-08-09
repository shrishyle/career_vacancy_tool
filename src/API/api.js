let save = function (list) {
  let data = JSON.stringify(list);
  window.localStorage.setItem("data", data);
};

let retrievedData = function () {
  let retrievedItem = window.localStorage.getItem("data");
  let data = JSON.parse(retrievedItem);
  return data;
};

export { save, retrievedData };
