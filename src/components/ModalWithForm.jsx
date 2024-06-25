import { useEffect, useState } from "react";
import "../blocks/ModalWithForm.css";

function ModalWithForm(props) {
  return (
    <div className={`modal modal_${props.state}`}>
      <div className={`modal__container modal_type_${name}`}>
        <h3 className="modal__title">{props.title}</h3>
        <button className="modal__close" type="button"></button>
        <form action="" className="modal__form" name={props.name}>
          {props.children}
        </form>
        <button className="modal__submit modal__submit_disabled" type="submit">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
