import React from "react";
import Lottie from "lottie-react";
import contact from "../assets/contact.json";
const Contact = () => {
  return (
    <section className="w-full container-md mt-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center h-60 rounded-lg border-2 border-red-600/10 shadow-md shadow-stone-500">
        <h4 className=" font-bold">CONTACTANOS</h4>
        <h3 className=" font-bold">VIDYO</h3>
        <Lottie
          className="h-4/5 opacity-70"
          animationData={contact}
          loop={true}
        />
      </div>
      <div className="mt-2 md:!mt-0 md:w-1/2 rounded-lg border-2 border-red-600/10 shadow-md shadow-stone-500 p-2 h-60">
        <form
          action=""
          className="flex flex-col h-full items-center justify-between"
        >
          <div className="flex w-full items-center justify-center">
            <ul className="flex flex-col justify-around h-full">
              <li>
                <label htmlFor="">NOMBRE:</label>
              </li>
              <li>
                <label htmlFor="">CORREO:</label>
              </li>
              <li>
                <label htmlFor="">NUMERO:</label>
              </li>
              <li>
                <label htmlFor="">MENSAJE:</label>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <input
                  type="text"
                  className="w-full border-b-2 border-red-600 outline-none"
                />
              </li>
              <li>
                <input
                  type="email"
                  className="w-full border-b-2 border-red-600 outline-none"
                />
              </li>
              <li>
                <input
                  type="text"
                  className="w-full border-b-2 border-red-600 outline-none"
                />
              </li>
              <li>
                <textarea
                  name=""
                  id=""
                  className="w-full resize-none h-10 border-b-2 border-red-600 outline-none"
                ></textarea>
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
