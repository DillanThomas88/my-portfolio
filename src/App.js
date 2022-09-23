import "./output.css";
import React, { useEffect, useState } from "react";
import { Navbar, NavItem } from "./components/Navbar";
import { SinglePage } from "./components/Utility/SinglePage";
import { Home, HackerRank } from "./components/Pages";
import { CapitalizeFirstLetter } from "./components/Logic/arrays";
import { FlyerContainer } from "./components/Flyers/FlyerContainer";
import { FlyingObject } from "./components/Flyers/FlyingObject";
import "./text.css";
import { Contact } from "./components/Pages/Contact";

function App() {
  const pages = ["Home", "HackerRank", "Contact"];
  const [tab, setTab] = useState(pages[0]);

  console.log(tab);

  return (
    <div className="bg-transparent ">
      <SinglePage
        style={
          "select-none font-medium lg:px-[20%] h-content px-0 text-[#D4ECDD] bg-[#112031] flex flex-col items-center justify-start lg:pt-[4%] pb-[2%] lg:overflow-x-hidden lg:overflow-y-hidden overflow-y-auto overflow-x-hidden"
        }
      >
        {/* <FlyerContainer amount={10} /> */}
        <Navbar
          onClick={onClick}
          tab={tab}
          header={"Dillan Thomas Mansor"}
          center={"My Portfolio"}
        >
          {pages.map((data, i) => (
            <NavItem key={i} title={data} />
          ))}
        </Navbar>
        {/* <div className="fixed w-full h-full left-0 top-0"> */}
        <FlyingObject
          parentcss={"h-[75vh] w-[100vw]  animate-delay"}
          childcss={"rotate-[30deg] translate-x-[35vw] -translate-y-[40vh]"}
        />
        <FlyingObject
          parentcss={"h-[75vw] w-[100vh]  animate-delay"}
          childcss={"rotate-[30deg] -translate-x-[6vw] translate-y-[6.5vh]"}
        />
        <FlyingObject
          parentcss={"h-[75vh] w-[50vw] animate-delay"}
          childcss={"rotate-[30deg] -translate-x-[40vw] -translate-y-[40vh]"}
        />
        <FlyingObject
          parentcss={"h-[50vh] w-[85vh] animate-delay"}
          childcss={"rotate-[30deg] -translate-x-[5vw] translate-y-[20vh]"}
        />
        <FlyingObject
          parentcss={"h-[75vh] w-[75vh] animate-delay"}
          childcss={"rotate-[30deg] -translate-x-[7vw] -translate-y-[70vh]"}
        />
        <FlyingObject
          parentcss={"h-[75vh] w-[25vh] animate-delay"}
          childcss={"rotate-[30deg] translate-x-[15vw] -translate-y-[44vh]"}
        />
        {/* </div> */}
        {/* <FlyingObject css={'h-[75vh] w-[100vw]'} /> */}
        {/* <FlyingObject css={'h-[75vh] w-[100vw]'} /> */}
        {mountPage()}
        {tab === pages[0] ? (
          <div className="lg:px-0 w-full px-6">
            <button
              onClick={() => setTab(pages[1])}
              className="lg:hidden w-full block px-4 py-2 my-4  bg-gradient-to-tl from-violet-600 to-rose-400 z-50 animate-delay"
            >
              <div className="">Certificates and HackerRank Data</div>
            </button>
          </div>
        ) : (
          <div className="w-full lg:px-0 px-6">
            <button
              onClick={() => setTab(pages[0])}
              className="lg:hidden w-full block px-4 py-2 my-4 bg-gradient-to-tl from-violet-600 to-rose-400 z-50 animate-appear"
            >
              <div className="">Go To Home Page</div>
            </button>
          </div>
        )}
      </SinglePage>
    </div>
  );

  function toggle() {
    if (tab === pages[0]) setTab(pages[1]);

    setTab(pages[0]);
  }

  function onClick(e) {
    setTab(e.target.textContent);
  }

  function mountPage() {
    switch (tab) {
      case pages[0]:
        return <Home />;
      case pages[1]:
        return <HackerRank />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <></>;
      // 404 page
      default:
        return (
          <div className="h-full grid content-center justify-center text-xl">
            <div className="text-center text-5xl">- 404 -</div>
            <div>page not found</div>
          </div>
        );
    }
  }
}

export default App;
