import React, { Component } from "react";
import basket from "../../img/basket.svg";
import favourite from "../../img/favourite.svg";
import styles from "./Button.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header_basket}>
          <div>0</div>
          <img src={basket} alt="basket" />
        </div>
        <div className={styles.header_favourite}>
          <div>0</div>
          <img src={favourite} alt="favourite" />
        </div>
      </div>
    );
  }
}
export default Header;
