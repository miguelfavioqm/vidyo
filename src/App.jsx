import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Offer from "./components/Offer";
import ProductsContainer from "./components/ProductsContainer";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Offer />
      <ProductsContainer />
      <NavBar />
      <Feature />
    </>
  );
}

export default App;
