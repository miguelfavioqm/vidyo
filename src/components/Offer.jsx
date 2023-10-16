import React from "react";
import CardOffer from "./CardOffer";

const Offer = () => {
  return (
    <section className="container-md mt-2 md:flex items-center justify-between ">
      <h3 className="md:text-2xl text-center mb-2 font-semibold">
        EXPLORA NUESTROS PRODUCTOS
      </h3>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide md:max-w-xl"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <CardOffer
              titulo={"DISNEY +"}
              precio={7}
              imagen={
                "https://www.novacinemas.cr/wp-content/uploads/2023/06/elementos_banner-1.jpg"
              }
              link={
                "https://api.whatsapp.com/send?phone=59176281196&text=HOLA%20QUIERO%20ADQUIRIR%DISNEY%20+"
              }
            />
          </div>
          <div className="carousel-item">
            <CardOffer
              titulo={"HBO MAX"}
              precio={7}
              imagen={
                "https://i0.wp.com/fandompelicula.com/wp-content/uploads/2020/07/all6-1-1.jpg?resize=1920%2C600&ssl=1"
              }
              link={
                "https://api.whatsapp.com/send?phone=59176281196&text=HOLA%20QUIERO%20ADQUIRIR%HBO%20MAX"
              }
            />
          </div>
          <div className="carousel-item">
            <CardOffer
              titulo={"NETFLIX"}
              precio={19}
              imagen={
                "https://www.cinegeek.com.mx/wp-content/uploads/2020/11/Narcos-MExico-1-1920x600.jpg"
              }
              link={
                "https://api.whatsapp.com/send?phone=59176281196&text=HOLA%20QUIERO%20ADQUIRIR%NETLFIX"
              }
            />
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
