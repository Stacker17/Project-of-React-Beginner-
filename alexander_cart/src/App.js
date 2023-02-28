import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem";

function App() {
  const product = [
    {
      Name: "IPhone 14 MaxPro",
      Price: 70000,
      Quantity: 0,
    },
    {
      Name: "Samsung Galaxy",
      Price: 20000,
      Quantity: 0,
    },
    {
      Name: "IPhone 12 MaxPro",
      Price: 50000,
      Quantity: 0,
    },
    {
      Name: "IPhone 13 MaxPro",
      Price: 60000,
      Quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(product);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].Quantity++;
    newTotalAmount += newProductList[index].Price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].Quantity > 0) {
      newProductList[index].Quantity--;
      newTotalAmount -= newProductList[index].Price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.Quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList.splice(index , 1);
    newTotalAmount -= newProductList[index].Quantity * newProductList[index].Price
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }
  return (
    <>
      <Navbar />
      <main className="container mt-3">
      <AddItem/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}
export default App;
