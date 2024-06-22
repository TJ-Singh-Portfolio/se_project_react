import "../blocks/ItemCard.css";
function ItemCard(props) {
  const click = () => {
    props.cardClick(props.card);
  };

  return (
    <>
      <div className="item__container" onClick={click}>
        <p className="item__text">{props.card.name}</p>
        <img src={props.card.link} alt="" className="item__image" />
      </div>
    </>
  );
}

export default ItemCard;
