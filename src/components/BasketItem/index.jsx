import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./CartItem.module.scss";

class CartItem extends Component {
  render() {
    const {
      title,
      img,
      count,
      id,
      incrementCartItem,
      dicrementCartItem,
      toggleModal,
      setModalProps,
    } = this.props;

    return (
      <div className={styles.cartItem}>
        <div className={styles.contentContainer}>
          <div className={styles.imgWrapper}>
            <img className={styles.itemAvatar} src={img} alt={title} />
          </div>
        </div>

        <span className={styles.quantity}>{count}</span>

        <div className={styles.btnContainer}>
          <Button onClick={() => incrementCartItem(id)} className={styles.btn}>
            +
          </Button>
          <Button onClick={() => dicrementCartItem(id)} className={styles.btn}>
            -
          </Button>
          <Button
            onClick={() => {
              setModalProps({ id, title });
              toggleModal(true);
            }}
            color="red"
            className={styles.btn}
          >
            DEL
          </Button>
        </div>
      </div>
    );
  }
}

// CartItem.propTypes = {
//     title, img, count, id, incrementCartItem, dicrementCartItem, toggleModal, setModalProps
// }

export default CartItem;
