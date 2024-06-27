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

function App(props) {
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [modalState, setModalState] = useState(closed);
  const [itemModalState, setItemModalState] = useState(closed);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    getInfo()
      .then((res) => {
        setTemp(Math.floor(res[0]));
        // Math.floor() is used here because requests will keep firing to the server otherwise.
        setCity(res[1]);
        setWeather(res[2]);
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

  return (
    <div className="app__page">
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
    </div>
  );
}

export default App;
