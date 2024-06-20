import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import getInfo from "../utils/weatherApi";

function App(props) {
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState();
  const [modalState, setModalState] = useState(closed);
  getInfo().then((res) => {
    //apiInfo = [...res];
    setTemp(Math.floor(res[0]));
    //BE SURE TO DO MATH.FLOOR!
    setCity(res[1]);
    //console.log(apiInfo);
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
          <input type="radio" id="hot" />
          <label htmlFor="hot">Hot</label>
          <input type="radio" id="warm" />
          <label htmlFor="warm">Warm</label>
          <input type="radio" id="cold" />
          <label htmlFor="cold">Cold</label>
        </div>
      </ModalWithForm>
      <Footer />
    </>
  );
}

export default App;
