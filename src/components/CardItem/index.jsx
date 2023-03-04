import React, { Component } from "react";
import star from "../../img/star.svg";
import addStar from "../../img/star0.svg";
import styles from "./CardItem.module.scss";
import Button from "../Button";

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
    };
  }
  componentDidMount = () => {
    this.setState(() => {
      const { favourites, code } = this.props;
      for (const car of favourites) {
        if (car.code === code) {
          return { favourite: true };
        }
      }
    });
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
            src={this.state.favourite ? star : addStar}
            onClick={() => {
              addToFavourite({ title, code });
            }}
            alt={"is-favourite"}
          />
        </div>
      </>
    );
  }
}

export default CardItem;
