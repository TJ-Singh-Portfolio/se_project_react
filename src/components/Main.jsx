import React from "react";
import "../blocks/Main.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function Main(props) {
  const filteredArray = props.array.filter((item) => {
    return item.weather === props.weather;
  });
  const currentUnit = React.useContext(CurrentTemperatureUnitContext);

  return (
    <>
      <WeatherCard temperature={props.temperature} />
      <h2 className="main__header">{`Today is ${props.temperature}°${currentUnit["currentTemperatureUnit"]} / You may want to wear:`}</h2>
      <ul className="main__items">
        {filteredArray.map((item) => {
          return (
            <li className="main__item-card" key={item._id}>
              <ItemCard
                card={item}
                onClick={props.onClick}
                //setSelectedCard={props.setSelectedCard}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Main;
