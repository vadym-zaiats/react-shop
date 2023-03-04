import React, { Component } from "react";
import styles from "./Modal.module.scss";

class Modal extends Component {
  render() {
    let { isActive, question, actions, onClick } = this.props;
    return isActive ? (
      <div className={styles.modal_overlay} onClick={onClick}>
        <div className={styles.modal_window}>
          <div>{question}</div>
          <div className={styles.modal_window_buttons}>{actions}</div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
