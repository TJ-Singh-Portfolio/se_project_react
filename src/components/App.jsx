import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import getInfo from "../utils/weatherApi";

function App(props) {
  let apiInfo = [];
  getInfo().then((res) => {
    apiInfo = [...res];
    console.log(apiInfo);
  });
  //const [temp, city] = apiInfo;
  //All of the problems you are running into are coming up due to ansynchroneity.
  function handleClick(event) {
    this.addEventListener("mousedown", (event) => {
      if (
        event.target.classList.contains("modal_opened") ||
        event.target.classList.contains("modal__close")
      ) {
        this.classList.remove("modal_opened");
      }
    });
  }
  //Add functionality for "Add Clothes" button before adding the close funcionality.

  return (
    <>
      <Header name={apiInfo[0]} />
      <ModalWithForm
        name="form1"
        title="New Garment"
        buttonText="Add Garment"
        onClick={handleClick}
      />
      <Footer />
    </>
  );
}

export default App;
