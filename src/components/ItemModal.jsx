import "../blocks/ItemModal.css";
function ItemModal(props) {
  return (
    <div className={`modal modal_${props.state}`}>
      <div className="item-modal__container">
        <img src={props.image} alt="" className="item-modal__image" />
        <p className="item-modal__name">{props.name}</p>
        <p className="item-modal__weather">{props.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
