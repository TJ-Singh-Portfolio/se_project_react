import React from "react";
import "../blocks/ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch(props) {
  const handleClick = () => {
    props.onClick();
  };
  const currentUnit = React.useContext(CurrentTemperatureUnitContext);
  return (
    <>
      <input
        type="checkbox"
        className="toggle__checkbox"
        id={`temp-switch`}
        checked={props.checked}
        onClick={handleClick}
      />
      <label className="toggle__label" htmlFor={`temp-switch`}>
        <span className="toggle__span"></span>
      </label>
    </>
  );
}

export default ToggleSwitch;
