import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

function AddItemModal(props) {
  useEffect(() => {
    setNameInputValue("");
    setImageInputValue("");
    setWeatherInputValue("");
  }, []);
  const [nameInputValue, setNameInputValue] = useState("");
  const [imageInputValue, setImageInputValue] = useState("");
  const [weatherInputValue, setWeatherInputValue] = useState("");

  const onNameChange = (event) => {
    setNameInputValue(event.target.value);
  };
  const onImageChange = (event) => {
    setImageInputValue(event.target.value);
  };
  const onWeatherChange = (event) => {
    setWeatherInputValue(event.target.id);
  };
  function handleSubmit(event) {
    event.preventDefault();
    props.onAddItem({ nameInputValue, imageInputValue, weatherInputValue });
  }

  return (
    <ModalWithForm
      name="form1"
      title="New Garment"
      buttonText="Add Garment"
      state={props.state}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="name">
        Name
      </label>
      <input
        className="modal__input"
        type="text"
        id="name"
        placeholder="Name"
        onChange={onNameChange}
      />
      <label className="modal__label" htmlFor="image">
        Image
      </label>
      <input
        className="modal__input"
        type="text"
        id="image"
        placeholder="Image URL"
        onChange={onImageChange}
      />
      <p className="modal__radio-title">Select the weather type:</p>
      <div className="modal__radio-container">
        <div className="modal__radio-box">
          <input
            className="modal__radio-box"
            type="radio"
            id="hot"
            name="weather"
            onChange={onWeatherChange}
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
            onChange={onWeatherChange}
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
            onChange={onWeatherChange}
          />
          <label htmlFor="cold" className="modal__radio-label">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
