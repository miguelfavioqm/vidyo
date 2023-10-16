import Header from "./components/Header";
import Offer from "./components/Offer";
import ProductsContainer from "./components/ProductsContainer";
import NavBar from "./components/NavBar";
import CountUp from "./components/CountUp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
function App() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=59164121283&text=HOLA%20QUIERO%20MAS%20INFORMACION%20DE%20LAS%20PLATAFORMAS"
        className="fixed bottom-2 right-2 md:text-5xl text-green-600 border-2 border-green-600 rounded-full md:p-2 hover:animate-bounce  text-xl p-1 z-20"
        target="_blank"
      >
        <IoLogoWhatsapp className="bg-white rounded-full md:p-1 z-20 text-green-600" />
      </a>
      <Header />
      <Offer />
      <CountUp />
      <ProductsContainer />
      <NavBar />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
