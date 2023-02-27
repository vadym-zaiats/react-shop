import React, { Component } from "react";
import CardItem from "../CardItem";
import styles from "./CardContainer.module.scss";
class CardContainer extends Component {
  render() {
    const { products, action, addToFav } = this.props;
    return (
      <div>
        <ul className={styles.list}>
          {products.map(({ id, name, price, picture, barcode, color }) => (
            <li key={id}>
              <CardItem
                logo={picture}
                title={name}
                color={color}
                price={price}
                code={barcode}
                action={action}
                addToFavourite={addToFav}
                // isFavorite={}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CardContainer;
