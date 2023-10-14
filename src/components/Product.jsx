import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/playAnim.json";

const Product = () => {
  const [star, setStars] = useState(5);
  const stars = [];
  for (let i = 0; i < star; i++) {
    stars.push(<AiOutlineStar key={i} className="text-yellow-500 w-min" />);
  }
  return (
    <div className="text-black h-80 p-3  rounded-lg flex items-center justify-center">
      <img
        src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
        alt=""
        className="absolute top-0 -z-10"
      />
      <div className="w-3/4 flex items-center gap-4">
        <div className="bg-red-950/50 text-white p-2 rounded-lg">
          <h4>Titulo</h4>
          <p className="text-xs text-justify">Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <div className="flex my-2">{stars}</div>
          <a
            href="#"
            className=" p-2 text-sm text-white font-bold rounded-lg w-full flex items-center justify-center"
          >
            <Lottie
              className="bg-red-500 rounded-full h-10 w-10"
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
