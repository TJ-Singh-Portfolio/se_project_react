import { useEffect, useState } from "react";
import "../blocks/ItemModal.css";
function ItemModal(props) {
  return (
    <div className={`modal modal_${props.state}`}>
      <div className="item-modal__container">
        <button className="item-modal__close" type="button"></button>
        <img
          src={props.selectedCard.link}
          alt={props.selectedCard.name}
          className="item-modal__image"
        />
        <h3 className="item-modal__name">{props.selectedCard.name}</h3>
        <p className="item-modal__weather">{`Weather: ${props.weather}`}</p>
      </div>
    </div>
  );
}

export default ItemModal;
