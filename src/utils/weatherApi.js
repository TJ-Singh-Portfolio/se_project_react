import { apiKey, latitude, longitude } from "./constants";
import { processServerResponse } from "./api";

// const processServerResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Error: ${res.status}`);
// };

function sendRequest() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(processServerResponse);
}

function getInfo() {
  // const apiInfo = [];
  // return sendRequest().then((res) => {
  //   apiInfo.push(res["main"]["temp"]);
  //   apiInfo.push(res["name"]);
  //   if (res["main"]["temp"] >= 86) {
  //     apiInfo.push("hot");
  //   } else if (res["main"]["temp"] >= 66) {
  //     apiInfo.push("warm");
  //   } else {
  //     apiInfo.push("cold");
  //   }
  //   apiInfo.push(Math.round(((res["main"]["temp"] - 32) * 5) / 9)); //Math.round((data.main.temp - 32) * 5/9)
  //   return apiInfo;
  // });
  return sendRequest().then((res) => {
    let weather = "";
    if (res["main"]["temp"] >= 86) {
      weather = "hot";
    } else if (res["main"]["temp"] >= 66) {
      weather = "warm";
    } else {
      weather = "cold";
    }
    return {
      Fahrenheit: res["main"]["temp"],
      Celsius: Math.round(((res["main"]["temp"] - 32) * 5) / 9),
      City: res["name"],
      Weather: weather,
    };
  });
}
console.log(getInfo());

export default getInfo;
