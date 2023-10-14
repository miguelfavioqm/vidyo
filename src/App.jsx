import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Offer from "./components/Offer";
import ProductsContainer from "./components/ProductsContainer";
import NavBar from "./components/NavBar";

import CountUp from "./components/CountUp";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Offer />
      <CountUp />
      <ProductsContainer />
      <NavBar />
      <Contact />
    </>
  );
}

export default App;
