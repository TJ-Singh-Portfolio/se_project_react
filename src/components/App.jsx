import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import getInfo from "../utils/errorfix";

function App(props) {
  const apiInfo = getInfo();
  //const [temp, city] = apiInfo;
  //const arr = [1, 2];
  console.log(apiInfo[0]);

  return (
    <>
      <Header name="Test" />
      <Footer />
    </>
  );
}

export default App;
