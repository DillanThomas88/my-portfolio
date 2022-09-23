import React from "react";
import { CapitalizeFirstLetter } from "../Logic/arrays";

export function Navbar(props) {
  return (
    <nav
      className={`fixed text-[1rem] z-50 top-0 h-20 flex justify-between items-center w-full px-[20%] lg:flex hidden`}
    >
      <div className=" lg:w-1/3 lg:block hidden">
        {props.header ? props.header : "props.header"}
      </div>
      <div className="flex lg:w-1/3 justify-center cursor-pointer">
        {props.children
          ? React.Children.map(props.children, (child) => {
              return React.cloneElement(child, {
                onClick: props.onClick,
                tab: props.tab,
              });
            })
          : "Props.children"}
      </div>
      {props.center && (
        <div className="w-1/3 flex justify-end items-center">
          {props.center}
        </div>
      )}
    </nav>
  );
}

export function NavItem(props) {
  return (
    <div
      onClick={props.onClick}
      className={`relative w-content px-2 mx-2 flex justify-center text-center animate-appear
      // ${props.title === props.tab && "text-[#E7F6F2]"}`}
    >
      <div
        className={`absolute pointer-events-none w-full opacity-0 bottom-0 transform-x-1/2 flex border-b border-[#E7F6F2] ${
          props.title === props.tab && "animate-select"
        }`}
      ></div>
      {props.title ? props.title : "EXAMPLE"}
    </div>
  );
}
