import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Header from "./Header";
import Main from "./Main";
import WeatherCard from "./WeatherCard";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import getInfo from "../utils/weatherApi";
import { defaultClothingItems } from "../utils/constants";

function App(props) {
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [modalState, setModalState] = useState(closed);
  getInfo().then((res) => {
    //apiInfo = [...res];
    setTemp(Math.floor(res[0]));
    //BE SURE TO DO MATH.FLOOR!
    setCity(res[1]);
    setWeather(res[2]);
    //console.log(res);
  });

  /*function handleClick(event) {
    this.addEventListener("mousedown", (event) => {
      if (
        event.target.classList.contains("modal_opened") ||
        event.target.classList.contains("modal__close")
      ) {
        this.classList.remove("modal_opened");
      }
    });
  }*/
  //Add close functionality by hitting "Escape".
  // You can also style the children of ModalWithForm
  return (
    <>
      <Header
        name={city}
        buttonClick={() => {
          setModalState("opened");
        }}
      />
      <Main temperature={temp} weather={weather} array={defaultClothingItems} />
      <ModalWithForm
        name="form1"
        title="New Garment"
        buttonText="Add Garment"
        onClose={(event) => {
          console.log("Clicked");
          if (
            event.target.classList.contains("modal_opened") ||
            event.target.classList.contains("modal__close")
          ) {
            setModalState("closed");
          }
        }}
        onKeyClose={(event) => {
          console.log(event.key);
          if (event.key === "Escape") {
            console.log("Hit Esc");
            setModalState("closed");
          }
          console.log("Wrong Place");
        }}
        state={modalState}
      >
        <label className="modal__label" htmlFor="name">
          Name
        </label>
        <input
          className="modal__input"
          type="text"
          id="name"
          placeholder="Name"
        />
        <label className="modal__label" htmlFor="image">
          Image
        </label>
        <input
          className="modal__input"
          type="text"
          id="image"
          placeholder="Image URL"
        />
        <p className="modal__radio-title">Select the weather type:</p>
        <div className="modal__radio-container">
          <label htmlFor="hot" className="modal__label">
            <input type="radio" id="hot" />
            Hot
          </label>

          <label htmlFor="warm" className="modal__label">
            <input type="radio" id="warm" />
            Warm
          </label>

          <label htmlFor="cold" className="modal__label">
            <input type="radio" id="cold" />
            Cold
          </label>
        </div>
      </ModalWithForm>
      <Footer />
    </>
  );
}

export default App;
