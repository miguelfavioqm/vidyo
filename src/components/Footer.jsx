import React from "react";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-red-600 text-white flex flex-col p-2 mt-2 md:flex-row items-center">
        <div className="w-2/6">
          <ul className="flex w-full justify-around md:flex-col text-center gap-2">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contactos</a>
            </li>
          </ul>
        </div>
        <div className="md:w-2/6 flex flex-col items-center justify-center m-2 gap-3">
          <h3>NUESTRAS REDES</h3>
          <div className="flex w-full justify-around md:text-2xl">
            <a
              href="https://www.facebook.com/VidyoOficial"
              className="hover:animate-bounce text-white"
            >
              <BsFacebook />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=59164121283&text=HOLA%20QUIERO%20MAS%20INFORMACION%20DE%20LAS%20PLATAFORMAS"
              className="hover:animate-bounce text-white"
            >
              <IoLogoWhatsapp />
            </a>
            <a href="#" className="hover:animate-bounce text-white">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="md:w-2/6 flex items-center justify-center flex-col gap-2">
          <h5>QUIERES RECIBIR OFERTAS??</h5>
          <input
            type="text"
            placeholder="correo"
            className="rounded-lg p-2 w-3/4 outline-none text-black"
          />
          <button className="border-2 rounded-lg border-white p-2 hover:opacity-80">
            SUSCRIBIRSE
          </button>
        </div>
      </footer>
      <div className=" bg-red-600 text-white text-center">
        <p>© Copyright Derechos Reservados 2023 </p>
      </div>
    </>
  );
};

export default Footer;
