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
      favourite: [],
      products: null,
      modal: {
        isActive: false,
        question: "Do you want to add this product to basket?",
      },
    };
  }
  componentDidMount = () => {
    fetch("./collection.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ products: res });
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
      let allFav = [...states.favourite];
      allFav.push(card);
      localStorage.setItem("favourite", JSON.stringify(allFav));
      return { allFav };
    });
  };

  render() {
    const { products } = this.state;

    if (!products) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Header />
        <div className={styles.main}>
          <CardContainer
            products={products}
            action={this.openModal}
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
