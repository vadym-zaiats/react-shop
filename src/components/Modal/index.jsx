import React, { Component } from "react";
import styles from "./Modal.module.scss";
import Button from "../Button";
class Modal extends Component {
  render() {
    let { isActive, question, toggleModal, onClick, addToBasket } = this.props;
    return isActive ? (
      <div className={styles.modal_overlay} onClick={onClick}>
        <div className={styles.modal_window}>
          <div>{question}</div>
          <div className={styles.modal_window_buttons}>
            <Button
              text={"Ok"}
              onClick={() => {
                alert("You added car on basket!");
                toggleModal();
                addToBasket();
              }}
            />
            <Button
              text={"Сancel"}
              onClick={() => {
                alert("You canceled this action");
                toggleModal();
              }}
            />
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
