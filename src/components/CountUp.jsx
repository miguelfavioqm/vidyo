import React from "react";
import { useCountUp } from "react-countup";

const CountUp = ({ fin = 100 }) => {
  useCountUp({ ref: "counter", end: 300 });
  useCountUp({ ref: "counter2", end: 20 });
  useCountUp({ ref: "counter3", end: 100 });
  useCountUp({ ref: "counter4", end: 24 });
  return (
    <div className="flex mt-2 items-center justify-center w-full text-white font-bold flex-wrap gap-4">
      <div className="w-min flex items-center justify-center bg-red-600 p-2 rounded-lg">
        +
        <span id="counter" className="mr-2" />
        Clientes
      </div>
      <div className="w-min flex items-center justify-center bg-red-600 p-2 rounded-lg">
        +<span id="counter2" className="mr-2" />
        Productos
      </div>
      <div className="w-max flex items-center justify-center bg-red-600 p-2 rounded-lg">
        <span id="counter3" className="mr-2" />% Confiable
      </div>
      <div className="w-max flex items-center justify-center bg-red-600 p-2 rounded-lg">
        Atención
        <span id="counter4" className="ml-1" />/ 7
      </div>
    </div>
  );
};

export default CountUp;
