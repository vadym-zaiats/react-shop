import React, { Component } from "react";
import PropTypes from "prop-types";
// import styles from "./Button.module.scss";
class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return <button onClick={onClick}>{text}</button>;
  }
}
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  text: "Кнопка",
  onClick: () => {
    console.log("Hello world");
  },
};
export default Button;
