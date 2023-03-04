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
    if (e.target.classList.contains("modal-overlay")) {
      this.openModal();
    }
  };
  addToFav = (card) => {
    this.setState((states) => {
      let allFav = [...states.favourites];
      if (allFav.length === 0) {
        allFav.push(card);
        localStorage.setItem("favourites", JSON.stringify(allFav));
        return { favourites: allFav };
      } else {
        for (let car of allFav) {
          if (car.code === card.code) {
            return console.log("Це авто вже є у favourites, треба видалити");
          }
          // else {
          //   console.log("Цього авто нема");
          //   allFav.push(card);
          //   localStorage.setItem("favourites", JSON.stringify(allFav));
          //   return { favourites: allFav };
          // }
        }
      }
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
          onClick={this.openModal}
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
