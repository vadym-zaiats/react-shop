import React, { Component } from "react";
import Button from "../Button";
import styles from "./Modal.module.scss";

class Modal extends Component {
  render() {
    return this.props.isActive ? (
      <div className={styles.modal_overlay} onClick={this.props.onClick}>
        <div className={styles.modal_window}>
          <div>{this.props.question}</div>
          <div className={styles.modal_window_buttons}>
            <Button
              text={"Ok"}
              onClick={() => {
                alert("You added car on basket!");
                const setActive = this.state.modal;
                setActive.isActive = !setActive.isActive;
                this.setState({ setActive });
              }}
            />

            <Button
              text={"Сancel"}
              onClick={() => {
                alert("You canceled this action");
                this.openModal();
              }}
            />
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
