import React from "react";
import { PiCirclesFourBold } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <header className="flex justify-between py-2 px-4 text-xl bg-red-600 text-white items-center rounded-sm">
      <button className="border-2 border-white rounded-full p-2 text-xl hover:opacity-80">
        <PiCirclesFourBold />
      </button>
      <h1 className="cursor-pointer">VIDYO</h1>
      <button className="border-2 border-white rounded-full p-1 hover:opacity-80">
        <AiOutlineSearch />
      </button>
    </header>
  );
};

export default Header;
