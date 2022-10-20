import React from "react";
import "./App.css";
import Card from "./components/Card";
import CartContext, { CartProvider } from "./context/cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Card />
      </CartProvider>
    </div>
  );
}

export default App;
