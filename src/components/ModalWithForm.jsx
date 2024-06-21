import { useEffect, useState } from "react";
import "../blocks/ModalWithForm.css";

function ModalWithForm(props) {
  //const [modalState, setModalState] = useState("closed");
  //useEffect();
  return (
    <div className={`modal modal_${props.state}`} onClick={props.onClose}>
      <div
        className={`modal__container modal_type_${name}`}
        onKeyDown={props.onKeyClose}
      >
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
