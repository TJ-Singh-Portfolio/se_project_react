import { useEffect, useState } from "react";
//import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Header from "./Header";
import Main from "./Main";
import WeatherCard from "./WeatherCard";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import getInfo from "../utils/weatherApi";
import { defaultClothingItems } from "../utils/constants";

function App(props) {
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [modalState, setModalState] = useState(closed);
  const [itemModalState, setItemModalState] = useState(closed);
  const [itemModalImage, setItemModalImage] = useState();
  const [itemModalText, setItemModalText] = useState();

  useEffect(() => {
    getInfo().then((res) => {
      setTemp(Math.floor(res[0]));
      // Math.floor() is used here because requests will keep firing to the server otherwise.
      setCity(res[1]);
      setWeather(res[2]);
    });
  }, []);

  function handleCardClick(event) {
    setItemModalState("opened");
    setItemModalImage(event.target.closest("img").src);
    //setItemModalText("Cap");
    setItemModalText(event.target.closest("p").textContent);
    console.log(itemModalText);
  }

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
      <Main
        temperature={temp}
        weather={weather}
        array={defaultClothingItems}
        cardClick={(event) => {
          handleCardClick(event);
        }}
      />
      <ModalWithForm
        name="form1"
        title="New Garment"
        buttonText="Add Garment"
        onClose={() => {
          console.log("Clicked");

          setModalState("closed");
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
      <ItemModal
        state={itemModalState}
        weather={weather}
        name={itemModalText}
        image={itemModalImage}
        onClose={() => {
          console.log("Clicked");

          setItemModalState("closed");
        }}
      />
      <Footer />
    </>
  );
}

export default App;
