import "../blocks/WeatherCard.css";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
function WeatherCard(props) {
  return (
    <>
      <div className="weather__card">
        <p className="weather__temp">{`${props.temperature}°F`}</p>
        <img src={sun} alt="" className="weather__sun" />
        <img src={cloud} alt="" className="weather__cloud" />
      </div>
    </>
  );
}

export default WeatherCard;
