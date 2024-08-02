import React from "react";
import "../blocks/ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch(props) {
  const handleClick = () => {
    props.onChange();
  };
  const currentUnit = React.useContext(CurrentTemperatureUnitContext);
  return (
    <>
      <input
        type="checkbox"
        className="toggle__checkbox"
        id={`temp-switch`}
        checked={props.checked}
        onChange={handleClick}
      />
      <label className="toggle__label" htmlFor={`temp-switch`}>
        <span className="toggle__span"></span>
        <span className="toggle__text toggle__text_left">F</span>
        <span className="toggle__text toggle__text_right">C</span>
      </label>
    </>
  );
}

export default ToggleSwitch;
