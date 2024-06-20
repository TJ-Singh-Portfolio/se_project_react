function ItemCard(props) {
  return (
    <>
      <div className="item__container">
        <p className="item__text">{props.name}</p>
        <img src={props.link} alt="" className="item__image" />
      </div>
    </>
  );
}

export default ItemCard;
