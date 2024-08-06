import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddItemModal from "./AddItemModal";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import getInfo from "../utils/weatherApi";
import { getItems, addItem, deleteItem } from "../utils/api";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function App(props) {
  const [tempF, setTempF] = useState([]);
  const [tempC, setTempC] = useState([]);
  const [temp, setTemp] = useState(tempF);
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [clothingItems, setClothingItems] = useState([]);
  const [modalState, setModalState] = useState("closed");
  const [itemModalState, setItemModalState] = useState("closed");
  const [checkboxState, setCheckboxState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getInfo()
      .then((res) => {
        setTempF(Math.floor(res["Fahrenheit"]));
        setTemp(Math.floor(res["Fahrenheit"]));
        // Math.floor() is used here because requests will keep firing to the server otherwise.
        setCity(res["City"]);
        setWeather(res["Weather"]);
        setTempC(res["Celsius"]);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getItems()
      .then((res) => {
        setClothingItems(res);
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

  function handleAddItemSubmit({
    nameInputValue,
    imageInputValue,
    weatherInputValue,
  }) {
    const item = {
      name: nameInputValue,
      weather: weatherInputValue,
      imageUrl: imageInputValue,
    };
    setIsLoading(true);
    addItem(item)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        setModalState("closed");
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleDeleteItem(selectedCard) {
    setIsLoading(true);
    deleteItem(selectedCard._id)
      .then((res) => {
        const filteredArray = clothingItems.filter((item) => {
          return item.name !== selectedCard.name ? item : null;
        });
        setClothingItems(filteredArray);
        setItemModalState("closed");
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
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
          onChange={handleCheckboxClick}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                temperature={temp}
                weather={weather}
                array={clothingItems}
                onClick={handleCardClick}
                //setSelectedCard={setSelectedCard}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                array={clothingItems}
                onClick={handleCardClick}
                buttonClick={() => {
                  setModalState("opened");
                }}
              />
            }
          />
        </Routes>
        <AddItemModal
          state={modalState}
          onAddItem={handleAddItemSubmit}
          buttonText={isLoading ? "Loading" : "Add Garment"}
        />
        <ItemModal
          selectedCard={selectedCard}
          state={itemModalState}
          weather={selectedCard.weather}
          onClick={handleDeleteItem}
          buttonText={isLoading ? "Loading" : "Delete Item"}
        />
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
