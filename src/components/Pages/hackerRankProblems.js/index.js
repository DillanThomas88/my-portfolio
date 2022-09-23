import { useRef, useState, useEffect } from "react";
import { Submission } from "./Submission";

export function HRPRoblems(props) {
  const hrdata = require("./dillanthomas88_data.json");

  const uniques = uniqueSolves();
  const submissionCount = Object.keys(uniques).length;
  const problemTitles = Object.keys(uniques)
    .filter((key) => key.toLowerCase().includes(props.input.toLowerCase()))
    .reverse();
  const [index, setIndex] = useState(0);
  const [problem, setProblem] = useState(uniques[problemTitles[index]]);

  useEffect(() => {
    setProblem(uniques[problemTitles[index]] || 0);
  }, [props.input]);

  return (
    <div className="w-full lg:h-full h-content lg:my-0">
      <div className="w-full flex justify-between h-16 bg-[#1d2127]  lg:border-t ">
        <div className="text-xl px-6 py-2 text-neutral-100 h-content w-1/4 lg:block hidden lg:flex justify-between items-center ">
          <div className="text-sm flex-col items-center h-full text-neutral-500">
            <div>Sorted by</div>
            <div className="text-green-400">Most Recent</div>
          </div>
          <div className="text-amber-200 flex items-center text-3xl font-thin  shadow-inner lg:block hidden">
            Challenges
          </div>
        </div>
        <div className="lg:text-3xl lg:pr-4 py-2 text-neutral-100 h-content lg:w-3/4 w-full  flex lg:justify-between items-center border-b border-neutral-500 ">
          <div className="flex lg:justify-start justify-center lg:w-content w-full">
            <div className="mr-2 lg:text-3xl text-sm flex items-end font-bold lg:block hidden">
              HackerRank |
            </div>
            <div className="flex lg:items-end lg:text-blue-400 text-amber-400 lg:font-thin lg:text-inherit lg:text-lg text-2xl">
              {problemTitles[index] || "..."}
            </div>
          </div>
          <div className="space-x-4 mr-4 font-thin lg:display xs:hidden lg:flex hidden items-center text-lg">
            <div>{submissionCount}</div>
            <div className="flex">solutions</div>
            <div>using</div>
          </div>
          <div className=" text-lg lg:block hidden text-amber-300">
            {problem.language ? problem.language : ""}
          </div>
        </div>
      </div>
      <div className="flex w-full h-full justify-between border lg:border-t-0 border-x-0 overflow-x-hidden">
        <ScrollBox />
        <div className="h-full overflow-scroll lg:w-3/4 w-full scrollbar-none bg-[#0d1117]  ">
          <Submission problem={problem} />
        </div>
      </div>
    </div>
  );

  function ScrollBox() {
    const [divHeight, setDivHeight] = useState(0);
    const [bottom, setBottom] = useState(true);

    const ref = useRef(null);

    function handleScroll(e) {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {
        setBottom(false);
      } else setBottom(true);
    }

    return (
      <div
        onScroll={handleScroll}
        className="h-full relative lg:block hidden font-thin w-1/4  bg-[#1d2127] overflow-y-scroll scrollbar-none border-r border-neutral-500 "
      >
        <div
          className={`sticky w-full h-5 top-0 left-0 pointer-events-none bg-gradient-to-b from-black to-transparent opacity-25 -pr-2`}
        ></div>
        {problemTitles.map((title, i) => (
          <TitleButton key={i} id={i} title={title} />
        ))}
        <div
          className={`sticky w-full h-5 bottom-0 left-0 pointer-events-none bg-gradient-to-t from-black to-transparent opacity-25 -pr-2`}
        ></div>
      </div>
    );
  }

  function TitleButton(props) {
    return (
      <button
        onClick={() => {
          setIndex(props.id);
          setProblem(uniques[problemTitles[props.id]]);
        }}
        id={props.id}
        className={`h-content w-full pointer-events-none ${
          index === props.id
            ? "bg-amber-200 text-neutral-900 cursor-default font-semibold "
            : "bg-transparent text-white  hover:text-amber-200 font-thin"
        } text-white text-xl flex justify-end px-4 py-1.5 `}
      >
        <div
          className={`w-content transition duration-100 ${
            index !== props.id && "hover:scale-110 pointer-events-auto"
          }`}
        >
          {props.title}
        </div>
      </button>
    );
  }

  function uniqueSolves() {
    let result = {};

    hrdata.submissions.forEach((element) => {
      if (element.score === 1) {
        let c = {
          challenge: element.challenge,
          language: element.language,
          code: element.code,
        };
        result[element.challenge.trim()] = c;
      }
    });

    return result;
  }
}
