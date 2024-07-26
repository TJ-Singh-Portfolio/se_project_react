import React from "react";
import "../blocks/WeatherCard.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
function WeatherCard(props) {
  const currentUnit = React.useContext(CurrentTemperatureUnitContext);
  return (
    <div className="weather__card">
      <p className="weather__temp">{`${props.temperature}°${currentUnit["currentTemperatureUnit"]}`}</p>
      <img src={sun} alt="A picture of the Sun." className="weather__sun" />
      <img src={cloud} alt="A picture of a cloud." className="weather__cloud" />
    </div>
  );
}

export default WeatherCard;
