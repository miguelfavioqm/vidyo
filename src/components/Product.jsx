import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/playAnim.json";

const Product = ({ title, desc, nstars = 5, img }) => {
  const [star, setStars] = useState(5);
  const stars = [];
  for (let i = 0; i < nstars; i++) {
    stars.push(<AiFillStar key={i} className="text-yellow-500 w-min" />);
  }
  return (
    <div className=" h-80 p-3  rounded-lg flex items-center justify-center">
      <img
        src={img}
        alt=""
        className="absolute top-0 -z-10 rounded-lg h-full w-full"
      />
      <div className="h-full flex items-center flex-col justify-around gap-4">
        <div className="bg-red-950/50 text-white p-2 rounded-lg">
          <h4 className="text-center">{title}</h4>
          <p className="text-xs text-center">{desc}</p>
        </div>
        <div>
          <div className="flex my-2">{stars}</div>
          <a
            href={
              "https://api.whatsapp.com/send?phone=59164121283&text=HOLA%20QUIERO%20ADQUIRIR%20" +
              title
            }
            className=" p-2 text-sm text-white font-bold rounded-lg w-full flex items-center justify-center hover:opacity-80"
            target="_blank"
          >
            <Lottie
              className="bg-red-600 rounded-full h-10 w-10"
              animationData={groovyWalkAnimation}
              loop={true}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
