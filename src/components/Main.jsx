import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main(props) {
  const filteredArray = props.array.filter((item) => {
    //console.log(item);
    return item.weather === props.weather;
  });
  console.log(filteredArray);
  return (
    <>
      <WeatherCard temperature={props.temperature} />
      <ul>
        {filteredArray.map((item) => {
          console.log(item);
          return <ItemCard name={item.name} link={item.link} />;
        })}
      </ul>
    </>
  );
}
export default Main;
