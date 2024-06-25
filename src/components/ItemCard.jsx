import "../blocks/ItemCard.css";
function ItemCard(props) {
  const handleClick = () => {
    props.onClick(props.card);
  };

  return (
    <div className="item__container" onClick={handleClick}>
      <p className="item__text">{props.card.name}</p>
      <img src={props.card.link} alt="" className="item__image" />
    </div>
  );
}

export default ItemCard;
