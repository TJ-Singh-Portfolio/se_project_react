import "../blocks/Header.css";
import headerAvatar from "../assets/avatar.png";
function Header(props) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className="header">
      <div className="header__container-left">
        <p className="header__logo">wtwr°</p>
        <p className="header__date-city">
          {currentDate}, {props.name}
        </p>
      </div>
      <div className="header__container-right">
        <button
          className="header__button"
          type="button"
          onClick={props.buttonClick}
        >
          + Add Clothes
        </button>
        <p className="header__name">Terrence Tegegne</p>
        <img
          className="header__avatar"
          src={headerAvatar}
          alt="Avatar Picture"
        />
      </div>
    </div>
  );
}

export default Header;
