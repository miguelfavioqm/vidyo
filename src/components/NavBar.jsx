import React from "react";

const NavBar = () => {
  return (
    <section className="flex items-center justify-center mx-2 my-2">
      <div className="w-full md:w-1/4 flex items-center justify-around bg-red-500 text-white text-xs p-2 rounded-full font-black md:m-auto">
        <a className="text-white" href="#">
          EXPLORA
        </a>
        <div className="h-4 w-[2px] bg-slate-300 rounded-lg"></div>
        <a className="text-white" href="#">
          VIDEOS
        </a>
        <div className="h-4 w-[2px] bg-slate-300 rounded-lg"></div>
        <a className="text-white" href="#">
          FAVORITOS
        </a>
        <div className="h-4 w-[2px] bg-slate-300 rounded-lg"></div>
        <a className="text-white" href="#">
          LOGIN
        </a>
      </div>
    </section>
  );
};

export default NavBar;
