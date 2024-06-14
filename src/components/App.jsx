import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import getInfo from "../utils/weatherApi";

function App(props) {
  let apiInfo = [];
  getInfo().then((res) => {
    apiInfo = [...res];
  });
  //const [temp, city] = apiInfo;
  console.log(apiInfo);
  //All of the problems you are running into are coming up due to ansynchroneity.

  return (
    <>
      <Header name="Test" />
      <Footer />
    </>
  );
}

export default App;
