import React, { Component } from "react";
import PropTypes from "prop-types";
import basket from "../../img/basket.svg";
import favourite from "../../img/favourite.svg";
import styles from "./Button.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header_favourite}>
          <div>{this.props.favourites}</div>
          <img src={favourite} alt="favourite" />
        </div>
        <div className={styles.header_basket}>
          <div>{this.props.basket}</div>
          <img src={basket} alt="basket" />
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  favourites: PropTypes.number,
  basket: PropTypes.number,
};
Header.defaultProps = {
  favourites: null,
  basket: null,
};
export default Header;
