const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

const getItems = () => {
  return request(`${baseUrl}/items`);
};

const addItem = ({ name, weather, imageUrl }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  });
};

const deleteItem = (id) => {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: headers,
  });
};

export { processServerResponse, getItems, addItem, deleteItem };
