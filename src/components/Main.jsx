import "../blocks/Main.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main(props) {
  const filteredArray = props.array.filter((item) => {
    //console.log(item);
    return item.weather === props.weather;
  });
  //console.log(filteredArray);
  return (
    <>
      <WeatherCard temperature={props.temperature} />
      <h2 className="main__header">{`Today is ${props.temperature}° F / You may want to wear:`}</h2>
      <ul className="main__items">
        {filteredArray.map((item) => {
          //console.log(item);
          return (
            <li className="main__item-card" key={item._id}>
              <ItemCard
                name={item.name}
                link={item.link}
                cardClick={props.cardClick}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Main;
