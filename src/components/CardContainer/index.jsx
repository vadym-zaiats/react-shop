import React, { Component } from "react";
import CardItem from "../CardItem";
import styles from "./CardContainer.module.scss";
class CardContainer extends Component {
  render() {
    const { products, toggleModal, favourites, addToFav, addToBasket } =
      this.props;

    return (
      <>
        <ul className={styles.list}>
          {products.map(({ name, price, picture, barcode, color }) => (
            <li key={barcode} className={styles.item}>
              <CardItem
                logo={picture}
                title={name}
                color={color}
                price={price}
                code={barcode}
                toggleModal={toggleModal}
                favourites={favourites}
                addToFavourite={addToFav}
                addToBasket={addToBasket}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CardContainer;
