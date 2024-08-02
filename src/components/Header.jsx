import "../blocks/Header.css";
import { Link } from "react-router-dom";
import headerAvatar from "../assets/avatar.png";
import ToggleSwitch from "./ToggleSwitch";

function Header(props) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__container-left">
        <Link to="/" className="header__link">
          <p className="header__logo">wtwr°</p>
        </Link>
        <p className="header__date-city">
          {currentDate}, {props.name}
        </p>
      </div>
      <div className="header__container-right">
        <ToggleSwitch checked={props.checked} onChange={props.onChange} />
        <button
          className="header__button"
          type="button"
          onClick={props.buttonClick}
        >
          + Add Clothes
        </button>
        <Link to="/profile" className="header__link">
          <p className="header__name">Terrence Tegegne</p>
          <img
            className="header__avatar"
            src={headerAvatar}
            alt="Avatar Picture"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
