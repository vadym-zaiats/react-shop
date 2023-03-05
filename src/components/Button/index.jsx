import React, { Component } from "react";
// import styles from "./Button.module.scss";
class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return <button onClick={onClick}>{text}</button>;
  }
}

export default Button;
