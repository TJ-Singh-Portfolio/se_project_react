import { useEffect, useState } from "react";

import viteLogo from "/vite.svg";
import "../App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import getInfo from "../utils/weatherApi";
import { defaultClothingItems } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function App(props) {
  const [tempF, setTempF] = useState([]);
  const [tempC, setTempC] = useState([]);
  const [temp, setTemp] = useState(tempF);
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [modalState, setModalState] = useState(closed);
  const [itemModalState, setItemModalState] = useState(closed);
  const [checkboxState, setCheckboxState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  // Plans

  useEffect(() => {
    getInfo()
      .then((res) => {
        setTempF(Math.floor(res[0]));
        setTemp(Math.floor(res[0]));
        // Math.floor() is used here because requests will keep firing to the server otherwise.
        setCity(res[1]);
        setWeather(res[2]);
        setTempC(res[3]);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    function onClose() {
      setModalState("closed");
      setItemModalState("closed");
    }
    function handleClickClose(event) {
      if (
        event.target.classList.contains("modal_opened") ||
        event.target.classList.contains("item-modal__close") ||
        event.target.classList.contains("modal__close")
      ) {
        onClose();
      }
    }
    function handleEscapeClose(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickClose);
    document.addEventListener("keydown", handleEscapeClose);

    return () => {
      document.removeEventListener("mousedown", handleClickClose);
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, []);

  function handleCardClick(card) {
    setItemModalState("opened");
    setSelectedCard(card);
  }

  function handleCheckboxClick() {
    setCheckboxState(!checkboxState);
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
      setTemp(tempC);
    }
    if (currentTemperatureUnit === "C") {
      setCurrentTemperatureUnit("F");
      setTemp(tempF);
    }
  }

  return (
    <div className="app__page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleCheckboxClick }} //handleToggleSwitchChange was substituted with handleCheckboxClick
      >
        <Header
          name={city}
          buttonClick={() => {
            setModalState("opened");
          }}
          checked={checkboxState}
          checkboxClick={handleCheckboxClick}
        />
        <Main
          temperature={temp}
          weather={weather}
          array={defaultClothingItems}
          onClick={handleCardClick}
          //setSelectedCard={setSelectedCard}
        />
        <ModalWithForm
          name="form1"
          title="New Garment"
          buttonText="Add Garment"
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
            <div className="modal__radio-box">
              <input
                className="modal__radio-box"
                type="radio"
                id="hot"
                name="weather"
              />
              <label htmlFor="hot" className="modal__radio-label">
                Hot
              </label>
            </div>
            <div className="modal__radio-box">
              <input
                className="modal__radio-box"
                type="radio"
                id="warm"
                name="weather"
              />
              <label htmlFor="warm" className="modal__radio-label">
                Warm
              </label>
            </div>
            <div className="modal__radio-box">
              <input
                className="modal__radio-box"
                type="radio"
                id="cold"
                name="weather"
              />
              <label htmlFor="cold" className="modal__radio-label">
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
        <ItemModal
          selectedCard={selectedCard}
          state={itemModalState}
          weather={weather}
        />
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
