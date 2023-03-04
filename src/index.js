import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import styles from "./main.module.scss";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Modal from "./components/Modal";
import { logDOM } from "@testing-library/react";
// import Basket from "./components/Basket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      products: null,
      modal: {
        isActive: false,
        question: "Do you want to add this product to basket?",
      },
    };
  }
  componentDidMount = () => {
    // завантаження списку авто
    fetch("./collection.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ products: res });
      });
    // витягуємо favourite з localStorage
    this.setState(() => {
      let carsFromJson = JSON.parse(localStorage.getItem("favourites"));
      if (carsFromJson) {
        return { favourites: carsFromJson };
      }
    });
  };
  openModal = () => {
    const setActive = this.state.modal;
    setActive.isActive = !setActive.isActive;
    this.setState({ setActive });
  };
  closeModal = (e) => {
    if (e.target.classList.contains("Modal_modal_overlay__0uG9G")) {
      this.openModal();
    }
  };
  addToFav = (card) => {
    this.setState((states) => {
      let allFavCars = [...states.favourites];
      for (let car of allFavCars) {
        if (car.code === card.code) {
          localStorage.setItem(
            "favourites",
            JSON.stringify(
              this.state.favourites.filter((el) => el.code !== card.code)
            )
          );
          return {
            favourites: this.state.favourites.filter(
              (el) => el.code !== card.code
            ),
          };
        }
      }
      allFavCars.push(card);
      localStorage.setItem("favourites", JSON.stringify(allFavCars));
      return { favourites: allFavCars };
    });
  };

  render() {
    const { products, favourites } = this.state;

    if (!products) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Header favourites={this.state.favourites.length} />
        <div className={styles.main}>
          <CardContainer
            products={products}
            action={this.openModal}
            favourites={favourites}
            addToFav={this.addToFav}
          />
          {/* <Basket /> */}
        </div>
        <Modal
          isActive={this.state.modal.isActive}
          question={this.state.modal.question}
          actions={this.state.modal.actions}
          onClick={this.closeModal}
        />
      </>
    );
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
