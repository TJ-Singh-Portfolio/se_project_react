import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";

function ClothesSection(props) {
  return (
    <div className="clothes-section__content">
      <div className="clothes-section__header">
        <p className="clothes-section__header-text">Your Items</p>
        <button
          className="clothes-section__header-button"
          type="button"
          onClick={props.buttonClick}
        >
          + Add New
        </button>
      </div>
      <div className="clothes-section__items">
        <ul className="clothes-section__items-cards">
          {props.array.map((item) => {
            return (
              <li className="clothes-section__items-card" key={item._id}>
                <ItemCard card={item} onClick={props.onClick} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
