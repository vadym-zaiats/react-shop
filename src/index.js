import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import styles from "./main.module.scss";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Basket from "./components/Basket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      modal: {
        id: 1,
        isActive: false,
        question: "Do you want to add this product to basket?",
        actions: [
          <Button
            text={"Ok"}
            backgroundColor="red-button"
            onClick={() => {
              this.secondModal();
              alert("You agreed this action");
            }}
          />,
          <Button
            text={"Сancel"}
            backgroundColor="red-button"
            onClick={() => {
              this.secondModal();
              alert("You canceled this action");
            }}
          />,
        ],
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
  secondModal = () => {
    // const setActive = this.state.modals;
    // setActive.isActive = !setActive.isActive;
    // this.setState({ setActive });
    console.log("hhh");
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
          <CardContainer products={products} action={this.secondModal} />
          <Basket />
        </div>

        <Modal
          isActive={this.state.modal.isActive}
          question={this.state.modal.question}
          actions={this.state.modal.actions}
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
