const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getItems = () => {
  return fetch(`${baseUrl}/items`).then(processServerResponse);
};

const addItem = () => {
  //logic of api method
};

const deleteItem = () => {
  //logic of api method
};

export { getItems, addItem, deleteItem };
