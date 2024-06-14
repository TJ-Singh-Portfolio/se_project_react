function ModalWithForm(props) {
  <div className="modal">
    <div className={`modal__container modal_type_${name}`}>
      <h2 className="modal__title">{props.title}</h2>
      <button className="modal__close" type="button"></button>
      <form action="" className="modal__form" name={props.name}>
        {props.children}
      </form>
      <button className="modal__submit" type="submit">
        {props.buttonText}
      </button>
    </div>
  </div>;
}
