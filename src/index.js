import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import styles from "./main.module.scss";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
// import Basket from "./components/Basket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      basket: [],
      products: null,
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
    this.setState(() => {
      let carsFromJson = JSON.parse(localStorage.getItem("basket"));
      if (carsFromJson) {
        return { basket: carsFromJson };
      }
    });
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

  addToBasket = (card) => {
    this.setState((states) => {
      let allCarsInBasket = [...states.basket];
      for (let car of allCarsInBasket) {
        if (car.code === card.code) {
          return alert("Авто вже у корзині");
        }
      }
      allCarsInBasket.push(card);
      localStorage.setItem("basket", JSON.stringify(allCarsInBasket));
      return { basket: allCarsInBasket };
    });
  };

  render() {
    const { products, favourites } = this.state;

    if (!products) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Header
          favourites={this.state.favourites.length}
          basket={this.state.basket.length}
        />
        <div className={styles.main}>
          <CardContainer
            products={products}
            toggleModal={this.toggleModal}
            favourites={favourites}
            addToFav={this.addToFav}
            addToBasket={this.addToBasket}
          />
          {/* <Basket /> */}
        </div>
      </>
    );
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
