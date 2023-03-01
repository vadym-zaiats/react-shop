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
      favourites: "",
      code: "",
    };
  }
  componentDidMount = () => {
    const { code } = this.props;
    for (var i = 0; i < localStorage.length; i++) {
      if (+localStorage.getItem(localStorage.key(i)) === code) {
        this.setState({ favourite: true });
      }
    }
  };

  addToFav = (position) => {
    this.setState((states) => {
      let allFav = [...states.favourites];
      allFav.push(position);
      localStorage.setItem(position.title, JSON.stringify(position.code));
      return { allFav };
    });
  };
  render() {
    const { logo, title, color, price, code, action } = this.props;
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
              this.addToFav({ title, code });
            }}
            alt={"is-favourite"}
          />
        </div>
      </>
    );
  }
}

export default CardItem;
