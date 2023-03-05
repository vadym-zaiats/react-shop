import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Basket.module.scss";

class Basket extends Component {
  render() {
    const {
      carts,
      incrementCartItem,
      dicrementCartItem,
      toggleModal,
      setModalProps,
    } = this.props;

    return (
      <div className={styles.basket}>
        <ul>
          {/* {carts.map(({ title, img, count, id }) => {
            return (
              <CartItem
                setModalProps={setModalProps}
                toggleModal={toggleModal}
                title={title}
                img={img}
                count={count}
                id={id}
                incrementCartItem={incrementCartItem}
                dicrementCartItem={dicrementCartItem}
              />
            );
          })} */}
        </ul>
      </div>
    );
  }
}

export default Basket;
