// App.js
import React from "react";
import ProductSection from "./components/Product";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const [SearchValue, setSearchValue] = useState("");
  console.log(SearchValue);
  return (
    <>
      <Header cartItems={cartItems} setSearchValue={setSearchValue}></Header>;
      <ProductSection
        setCartItems={setCartItems}
        cartItems={cartItems}
        SearchValue={SearchValue}
      ></ProductSection>
    </>
  );
}

export default App;
