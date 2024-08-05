import { apiKey, latitude, longitude } from "./constants";
import { processServerResponse } from "./api";

function sendRequest() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(processServerResponse);
}

function getInfo() {
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

export default getInfo;
