import "../blocks/ItemCard.css";
function ItemCard(props) {
  return (
    <>
      <div className="item__container" onClick={props.cardClick}>
        <p className="item__text">{props.name}</p>
        <img src={props.link} alt="" className="item__image" />
      </div>
    </>
  );
}

export default ItemCard;
