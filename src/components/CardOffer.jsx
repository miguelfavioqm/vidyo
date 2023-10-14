import React from "react";

const CardOffer = () => {
  return (
    <div className="h-48 ">
      <div className="bg-red-500/60 w-fit absolute top-10 left-20 p-2 text-white rounded-lg gap-2 flex flex-col md:left-40">
        <h3 className="">PRECIO: 7 Bs.</h3>
        <p className="text-xs">720p 1080p 4K Calidad</p>
        <a
          href="#"
          className="bg-red-500 px-3 py-1 rounded-lg text-white font-semibold z-50"
        >
          SOLICITARLO
        </a>
      </div>
      <img
        // tamaño de imagen 1920x600
        src="https://wallpaperaccess.com/full/2461288.jpg"
        alt=""
        className="w-full rounded-lg h-full"
      />
    </div>
  );
};

export default CardOffer;
