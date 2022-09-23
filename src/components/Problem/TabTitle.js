import React, { useState, useEffect } from "react";
import { getColor, getDifficulty } from ".";

export function TabTitle(props) {
  const [probIndex, setProbIndex] = useState(props.activeIndex);

  // console.log(props);

  return (
    <div
      className={`flex items-center justify-end h-6 py-0 my-2 font-semibold transition ease-in-out hover:scale-110 duration-[5ms] ${
        props.activeIndex !== props.index && "opacity-50"
      } hover:opacity-100`}
    >
      <button
        onClick={() => props.setActiveIndex(props.index)}
        className={`${
          props.activeIndex === props.index
            ? `${getColor(props.difficulty).text}`
            : // "text-white"
              `text-white`
        } w-full h-full  flex items-center justify-end`}
      >
        <div className="h-full flex justify-end items-center pointer-events-none ">
          {props.title}
        </div>
      </button>
      <div
        className={`${getColor(props.difficulty).bg} h-full w-1 ml-2 mr-4`}
      ></div>
    </div>
  );
}
