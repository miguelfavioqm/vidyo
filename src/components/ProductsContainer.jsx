import React from "react";
import Product from "./Product";

const ProductsContainer = () => {
  return (
    <section className="overflow-hidden container-md mt-2 flex gap-4 flex-col-reverse md:flex-row items-center">
      <div className="rounded-lg bg-red-400/50  items-center p-5 flex-col w-80 h-80 justify-between hidden md:flex">
        <h4 className="font-black">ESTRENO</h4>
        <div className="bg-red-400/70 p-2 rounded-lg">
          <h3 className="font-bold text-center">TITULO</h3>
          <p className="text-center px-2 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="rounded-lg bg-red-400/50 flex items-center p-5 flex-col w-80 h-80 justify-between mb-4 md:!mb-0">
        <h4 className="font-black">ESTRENO</h4>
        <div className="bg-red-400/70 p-2 rounded-lg">
          <h3 className="font-bold text-center">TITULO</h3>
          <p className="text-center px-2 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide w-full md:w-1/2 "
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active !bg-red-500 !h-2 !w-2"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="!bg-red-500 !h-2 !w-2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="!bg-red-500 !h-2 !w-2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Product />
          </div>
          <div className="carousel-item">
            <Product />
          </div>
          <div className="carousel-item">
            <Product />
          </div>
        </div>
        <button
          className="carousel-control-prev hidden md:inline-block "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default ProductsContainer;
