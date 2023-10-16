import React from "react";
import Product from "./Product";
import { useEffect, useState } from "react";
const ProductsContainer = ({}) => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [title2, setTitle2] = useState("");
  const [desc2, setDesc2] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      alert(error);
    }
  }, []);
  const urlImages = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  const url =
    "https://api.themoviedb.org/3/discover/movie?language=es-US&page=1";
  const dataAPI = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjliNWY4YWRiMDMyMDFhNjk3MTY3YmVhMGRkYTMwYiIsInN1YiI6IjY1MmMyYTkyMDI0ZWM4MDBhZWNjMDViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kt9r6J_rTAGTG7CJ-DyiwDdLM8ZY3tksh-Tz5APkrl8",
    },
  };
  const fetchData = async () => {
    const dataf = await fetch(url, dataAPI);
    const dataJSON = await dataf.json();
    setData(dataJSON);
    setTitle(dataJSON.results[0].title);
    setDesc(dataJSON.results[0].overview);
    setTitle2(dataJSON.results[1].title);
    setDesc2(dataJSON.results[1].overview);
    setImg1(dataJSON.results[0].poster_path);
    setImg2(dataJSON.results[1].poster_path);
  };
  return (
    <section className="overflow-hidden container-md mt-2 flex gap-4 flex-col-reverse md:flex-row items-center">
      <div className="rounded-lg  items-center flex-col w-80 h-80 justify-between hidden md:flex">
        <img
          src={urlImages + img1}
          alt="IMG1"
          width={200}
          className="rounded-lg"
        />
        <h4 className="font-black">ESTRENO</h4>
        <div className="bg-red-500/70 p-2 rounded-lg absolute bottom-1/4 text-white flex flex-col items-center justify-center">
          <h3 className="font-bold text-center text-xs">{title}</h3>
          <p className="text-center px-2 mt-2 text-xs line-clamp-5 max-w-[10rem]">
            {desc2}
          </p>
        </div>
      </div>
      <div className="rounded-lg flex items-center flex-col w-80 h-80 justify-between mb-4 md:!mb-0">
        <img
          src={urlImages + img2}
          alt="IMG1"
          width={200}
          className="rounded-lg"
        />
        <h4 className="font-black">ESTRENO</h4>
        <div className="bg-red-500/70 p-2 rounded-lg absolute md:bottom-1/4 text-white flex flex-col items-center justify-center">
          <h3 className="font-bold text-center text-xs">{title2}</h3>
          <p className="text-center px-2 mt-2 text-xs line-clamp-5 max-w-[10rem]">
            {desc2}
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
            <Product
              title={"SPOTIFY"}
              desc={"20 Bs. x 2 meses"}
              nstars={5}
              img={
                "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png"
              }
            />
          </div>
          <div className="carousel-item">
            <Product
              title={"CRUNCHYROLL"}
              desc={"10 Bs."}
              nstars={5}
              img={
                "https://images.squarespace-cdn.com/content/v1/51a92ee2e4b07ac5e8bc00b6/1609360558166-9SVO03DA96RG665VNGPJ/crunchyroll.jpg?format=2500w"
              }
            />
          </div>
          <div className="carousel-item">
            <Product
              title={"MAGIS TV"}
              desc={"23 Bs. Cuenta Personal"}
              nstars={4}
              img={
                "https://images.squarespace-cdn.com/content/v1/63d000c24f3e050f0826b466/63378a80-62b0-4c5b-8c7c-e832a97b63ed/magistv+vectorizado.png"
              }
            />
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
