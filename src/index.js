import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import styles from "./main.module.scss";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Modal from "./components/Modal";
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
    console.log("hhh");
    this.setState((current) => {
      const carts = [...current.favourite];

      const index = carts.findIndex((el) => el.id === card.id);

      if (index === -1) {
        carts.push({ ...card, count: 1 });
      } else {
        carts[index].count += 1;
      }

      localStorage.setItem("favourite", JSON.stringify(carts));
      return { carts };
    });
  };
  incrementFavItem = (id) => {
    this.setState((current) => {
      const carts = [...current.carts];

      const index = carts.findIndex((el) => el.id === id);

      if (index !== -1) {
        carts[index].count += 1;
      }

      localStorage.setItem("carts", JSON.stringify(carts));
      return { carts };
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
