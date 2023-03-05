import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import Button from "../Button";
class Modal extends Component {
  render() {
    let { isActive, question, toggleModal, onClick, addToBasket, title, code } =
      this.props;
    return isActive ? (
      <div className={styles.modal_overlay} onClick={onClick}>
        <div className={styles.modal_window}>
          <div>{question}</div>
          <div className={styles.modal_window_buttons}>
            <Button
              text={"Ok"}
              onClick={() => {
                console.log("You added car on basket!");
                toggleModal();
                addToBasket({ title, code });
              }}
            />
            <Button
              text={"Сancel"}
              onClick={() => {
                console.log("You canceled this action");
                toggleModal();
              }}
            />
          </div>
        </div>
      </div>
    ) : null;
  }
}
Modal.propTypes = {
  isActive: PropTypes.bool,
  question: PropTypes.string,
  toggleModal: PropTypes.func,
  onClick: PropTypes.func,
  addToBasket: PropTypes.func,
  title: PropTypes.string,
  code: PropTypes.number,
};
Modal.defaultProps = {
  isActive: false,
  question: "Згодження",
  toggleModal: () => {
    console.log("Hello world");
  },
  onClick: () => {
    console.log("Hello world");
  },
  addToBasket: () => {
    console.log("Hello world");
  },
  title: "Модель авто",
  code: "Штрих-код авто",
};
export default Modal;
