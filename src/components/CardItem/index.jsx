import React, { Component } from "react";
import star from "../../img/star.svg";
import starAdd from "../../img/star0.svg";
import styles from "./CardItem.module.scss";
import Button from "../Button";

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      favProducts: [],
    };
  }
  addToFav = () => {
    this.setState({ favourite: !this.state.favourite });
    // const item = document.querySelector(".item").innerHTML;
    // localStorage.setItem("product", item);
  };

  render() {
    const { logo, title, color, price, code, action, addToFavourite } =
      this.props;
    return (
      <>
        <img className={styles.size} src={logo} alt="logo" />
        <p>Brand: {title}</p>
        <p>Color: {color}</p>
        <p>Price: {price}$</p>
        <p>Barcode: {code}</p>
        <div className={styles.footer}>
          <Button text="Add to basket" onClick={action} />
          <img
            src={this.state.favourite ? star : starAdd}
            onClick={() => {
              this.addToFav();
              addToFavourite({ title });
            }}
            alt={this.state.favourite ? "favourite" : "not-favourite"}
          />
        </div>
      </>
    );
  }
}

export default CardItem;
