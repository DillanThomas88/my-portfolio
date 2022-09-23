import { useState } from "react";
import { Certificate } from "../Card/Certificate";
import { HackerDisplay } from "./HackerDisplay";
import { HRPRoblems } from "./hackerRankProblems.js";

export function HackerRank() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [difficultyIndex, setDifficultyIndex] = useState(1);
  // const [problems, setProblems] = useState(
  //   getList(difficultyIndex).map((data, i) => (
  //     <Problem key={i} data={data} activeIndex={activeIndex} />
  //   ))
  // );
  const [input, setInput] = useState("");

  return (
    <div
      className={`relative h-content w-full lg:px-0 px-8 lg:py-0 pt-8 lg:px-0 ${
        activeIndex !== -1 ? "px-0" : "px-6"
      }`}
    >
      {/* main section */}
      <div
        className={`w-full ${
          activeIndex === -1 ? "" : "lg:h-10"
        } flex justify-between items-center text-center`}
      >
        <div className="w-full flex lg:justify-between justify-center items-center">
          {/* Mini Navigation bar */}
          {activeIndex !== -1 ? (
            <div className="flex lg:justify-start justify-between w-full space-x-4 h-10 mb-4 lg:px-0 px-8">
              <input
                className="text-black h-10 mb-4 lg:w-1/4 w-full pl-4 bg-neutral-100"
                placeholder="Search..."
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>

              <button
                onClick={() => setActiveIndex(-1)}
                className="ease-in-out hover:text-amber-200 hover:scale-110"
              >
                {window.innerWidth < 400 ? "RETURN" : "Return to Dashboard >"}
              </button>
            </div>
          ) : (
            <div className="w-full">
              <div className="lg:text-7xl lg:hidden text-4xl text-emerald-400 font-semibold lg:flex lg:justify-center w-full lg:mt-0 lg:mb-0">
                HackerRank
              </div>
              <div className=" xl:flex lg:h-full w-full xs:flex-col">
                <div className="lg:text-4xl text-2xl lg:w-1/4 lg:flex-col">
                  <h1
                    className={
                      " uppercase font-thin pt-8 pb-4 lg:flex lg:py-4 lg:border-b lg:mb-8 lg:border-zinc-500"
                    }
                  >
                    Certificates
                  </h1>
                  <div className={"flex-col w-full space-y-4"}>
                    <Certificate title={"javascriptbasic"} completed={true} />
                    <Certificate title={"reactbasic"} completed={true} />
                    {/* <Certificate title={"css"} completed={false} /> */}
                  </div>
                </div>
                <div className="lg:text-4xl text-2xl lg:w-3/4 flex-col lg:pl-[4%] transition duration-300">
                  <div
                    className={
                      "uppercase font-thin w-full lg:flex h-content pt-8 pb-4 lg:py-4 lg:border-b lg:border-zinc-500 lg:mb-8"
                    }
                  >
                    Skill Showcase
                  </div>
                  <div className={"flex pb-8"}>
                    {activeIndex === -1 && (
                      <div className=" w-full h-content">
                        <HackerDisplay
                          setActiveIndex={setActiveIndex}
                          setDifficultyIndex={setDifficultyIndex}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* <div className={` w-full opacity-50  py-6`}>
                <div className="border-b w-full"></div>
              </div> */}
            </div>
          )}
        </div>
      </div>

      {/* PROBLEMS */}
      {activeIndex !== -1 && (
        <div className="lg:h-[75vh] h-content lg:bg-[#0d1117] bg-transparent pb-4">
          <HRPRoblems input={input} />
          {/* <Problems activeIndex={activeIndex} problems={problems} /> */}
        </div>
      )}
    </div>
  );
}
