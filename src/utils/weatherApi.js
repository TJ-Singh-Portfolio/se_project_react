import { apiKey, latitude, longitude } from "./constants";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

function sendRequest() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(processServerResponse);
}

function getInfo() {
  const apiInfo = [];
  return sendRequest().then((res) => {
    apiInfo.push(res["main"]["temp"]);
    apiInfo.push(res["name"]);
    if (res["main"]["temp"] >= 86) {
      apiInfo.push("hot");
    } else if (res["main"]["temp"] >= 66) {
      apiInfo.push("warm");
    } else {
      apiInfo.push("cold");
    }
    apiInfo.push(Math.round(((res["main"]["temp"] - 32) * 5) / 9)); //Math.round((data.main.temp - 32) * 5/9)
    return apiInfo;
  });
}

export default getInfo;
