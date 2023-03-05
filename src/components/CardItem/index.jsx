import React, { Component } from "react";
import PropTypes from "prop-types";
import star from "../../img/star.svg";
import addStar from "../../img/star0.svg";
import death from "../../img/death.svg";
import styles from "./CardItem.module.scss";
import Button from "../Button";
import Modal from "../Modal";

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      modal: {
        isActive: false,
        question: "Do you want to add this product to basket?",
      },
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
  toggleModal = () => {
    const setActive = this.state.modal;
    setActive.isActive = !setActive.isActive;
    this.setState({ setActive });
  };
  closeModal = (e) => {
    if (e.target.classList.contains("Modal_modal_overlay__0uG9G")) {
      this.toggleModal();
    }
  };
  render() {
    const { logo, title, color, price, code, addToFavourite, addToBasket } =
      this.props;
    return (
      <>
        <img className={styles.size} src={logo} alt="logo" />
        <p>Brand: {title}</p>
        <p>Color: {color}</p>
        <p>Price: {price}$</p>
        <p>Barcode: {code}</p>
        <div className={styles.footer}>
          <Button text="Add to basket" onClick={this.toggleModal} />
          <img
            src={this.state.favourite ? star : addStar}
            onClick={() => {
              addToFavourite({ title, code });
            }}
            alt={"is-favourite"}
          />
        </div>
        <Modal
          isActive={this.state.modal.isActive}
          question={this.state.modal.question}
          toggleModal={this.toggleModal}
          onClick={this.closeModal}
          addToBasket={addToBasket}
          title={title}
          code={code}
        />
      </>
    );
  }
}
CardItem.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
  code: PropTypes.number,
  toggleModal: PropTypes.func,
  favourites: PropTypes.array,
  addToFavourite: PropTypes.func,
  addToBasket: PropTypes.func,
};
CardItem.defaultProps = {
  logo: { death },
  title: "Назва марки",
  color: "Колір кузова",
  price: "Вартість авто",
  code: "Штрих-код",
  toggleModal: () => {
    console.log("Hello world");
  },
  favourites: () => {
    console.log("Hello world");
  },
  addToFavourite: () => {
    console.log("Hello world");
  },
  addToBasket: () => {
    console.log("Hello world");
  },
};
export default CardItem;
