import { apiKey, latitude, longitude } from "./constants";

function sendRequest() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

function getInfo() {
  const apiInfo = [];
  return sendRequest().then((res) => {
    apiInfo.push(res["main"]["temp"]);
    apiInfo.push(res["name"]);
    return apiInfo;
  });
  //console.log(apiInfo)
}

//const apiInfo = getInfo();
//console.log(apiInfo);

//console.log("Hi");

export default getInfo;
