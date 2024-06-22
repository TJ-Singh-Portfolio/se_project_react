import { useEffect, useState } from "react";
import "../blocks/ModalWithForm.css";

function ModalWithForm(props) {
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
      <div className={`modal__container modal_type_${name}`}>
        <h3 className="modal__title">{props.title}</h3>
        <button
          className="modal__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <form action="" className="modal__form" name={props.name}>
          {props.children}
        </form>
        <button className="modal__submit" type="submit">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
