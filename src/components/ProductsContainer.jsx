import React from "react";
import Product from "./Product";

const ProductsContainer = () => {
  return (
    <section className="overflow-hidden container-md mt-2">
      <div id="carouselExampleCaptions" className="carousel slide">
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
          className="carousel-control-next hidden md:inline-block"
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
