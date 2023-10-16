import React from "react";

const CardOffer = ({ titulo, precio, imagen, link }) => {
  return (
    <div className="h-48 ">
      <div className="bg-red-500/60 w-fit absolute top-10 left-20 p-2 text-white rounded-lg gap-2 flex flex-col md:left-40">
        <h3 className="">PRECIO: {precio} Bs.</h3>
        <h4>{titulo}</h4>
        <p className="text-xs">720p 1080p 4K Calidad</p>
        <a
          href={link}
          className="bg-red-500 px-3 py-1 rounded-lg text-white font-semibold z-50"
          target="_blank"
        >
          SOLICITARLO
        </a>
      </div>
      <img
        // tamaño de imagen 1920x600
        src={imagen}
        alt=""
        className="w-full rounded-lg h-full"
      />
    </div>
  );
};

export default CardOffer;
