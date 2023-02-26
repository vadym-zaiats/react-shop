import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import star from "../../img/star.svg";
import starAdd from "../../img/star0.svg";
import styles from "./CardItem.module.scss";
import Button from "../Button";

class CardItem extends Component {
  render() {
    const { logo, title, color, price, code } = this.props;
    return (
      <div className={styles.item}>
        <img className={styles.size} src={logo} alt="logo" />
        <p>Brand: {title}</p>
        <p>Color: {color}</p>
        <p>Price: {price}$</p>
        <p>Barcode: {code}</p>
        <Button text="Add to basket" />
        {/* <img src={isFavorite ? star : starAdd} alt="Favourite" /> */}
      </div>
    );
  }
}

export default CardItem;
