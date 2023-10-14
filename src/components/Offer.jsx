import React from "react";
import CardOffer from "./CardOffer";

const Offer = () => {
  return (
    <section className="container-md mt-2 md:flex items-center justify-between ">
      <h3 className="md:text-2xl text-center mb-2">
        EXPLORA NUESTROS PRODUCTOS
      </h3>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide md:max-w-2xl"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CardOffer />
          </div>
          <div className="carousel-item">
            <CardOffer />
          </div>
          <div className="carousel-item">
            <CardOffer />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
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
          data-bs-target="#carouselExampleAutoplaying"
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

export default Offer;
