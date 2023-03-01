import React, { Component } from "react";
import CardItem from "../CardItem";
import styles from "./CardContainer.module.scss";
class CardContainer extends Component {
  render() {
    const { products, action } = this.props;

    return (
      <>
        <ul className={styles.list}>
          {products.map(({ id, name, price, picture, barcode, color }) => (
            <li key={id} className={styles.item}>
              <CardItem
                logo={picture}
                title={name}
                color={color}
                price={price}
                code={barcode}
                action={action}
                // addToFavourite={addToFav}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CardContainer;
