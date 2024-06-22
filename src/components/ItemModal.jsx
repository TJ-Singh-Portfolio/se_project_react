import { useEffect, useState } from "react";
import "../blocks/ItemModal.css";
function ItemModal(props) {
  useEffect(() => {
    function handleClickClose(event) {
      if (
        event.target.classList.contains("modal_opened") ||
        event.target.classList.contains("modal__close")
      ) {
        props.onClose();
      }
    }
    function handleEscapeClose(event) {
      if (event.key === "Escape") {
        props.onClose();
      }
    }
    document.addEventListener("mousedown", handleClickClose);
    document.addEventListener("keydown", handleEscapeClose);

    return () => {
      document.removeEventListener("mousedown", handleClickClose);
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, []);

  return (
    <div className={`modal modal_${props.state}`}>
      <div className="item-modal__container">
        <button
          className="item-modal__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img src={props.image} alt="" className="item-modal__image" />
        <h3 className="item-modal__name">{props.name}</h3>
        <p className="item-modal__weather">{`Weather: ${props.weather}`}</p>
      </div>
    </div>
  );
}

export default ItemModal;
