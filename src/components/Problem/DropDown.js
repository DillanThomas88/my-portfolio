import { useState, useEffect } from "react";
import { getColor, getDifficulty } from ".";
import { myPortfolioData } from "../../Data/data";
import { TabTitle } from "./TabTitle";

export function DropDown(props) {
  const { bg, text, head } = getColor(props.difficulty);
  const [active, setActive] = useState(
    props.difficultyIndex === props.difficulty
  );

  // console.log(props);

  useEffect(() => {
    if (props.difficultyIndex === props.difficulty) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.difficultyIndex]);

  const list = getList(props.difficulty);
  console.log(list);
  return (
    <div
      className={`relative w-full flex-col justify-center items-center my-2 ${
        props.difficultyIndex !== props.difficulty && "opacity-50"
      } transition ease-in-out  duration-[5ms] hover:opacity-100`}
    >
      <button
        onClick={() => props.setDifficultyIndex(props.difficulty)}
        className={`h-[3vh] w-full flex justify-end items-center  px-2 ${
          active && `border-t mt-2 py-2 ${head}`
        }`}
      >
        {props.difficultyIndex === props.difficulty && (
          <>
            <div className=" w-1/3 flex justify-start font-semibold">
              Solved
            </div>
            <div className=" w-1/3 flex justify-center">
              ( <span className="font-semibold px-1">{list.length}</span> )
            </div>
          </>
        )}
        {props.difficultyIndex !== props.difficulty && (
          <>
            <div className=" w-1/3 flex justify-end pr-1">
              ( <span className="font-semibold px-1">{list.length}</span> )
            </div>
          </>
        )}
        <div className={`w-1/3 flex justify-end font-semibold `}>
          {getDifficulty(props.difficulty)}
        </div>
        {props.difficultyIndex !== props.difficulty && (
          <div
            className={`${getColor(props.difficulty).bg} h-3/4 w-1 ml-2 mr-2`}
          ></div>
        )}
      </button>

      {active && (
        <>
          {/* <div className="absolute z-10 top-9 left-0 w-full h-12 bg-gradient-to-b from-[#112031] to-transparent pointer-events-none"></div>
          <div className="absolute z-10 bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#112031] to-transparent pointer-events-none"></div> */}
          <div
            className={`relative border-b h-content max-h-[41rem] overflow-y-scroll overflow-x-hidden scrollbar-none scrollbar-thumb-emerald-400 scrollbar-track-transparent ${
              list.length && " animate-appear"
            }`}
          >
            {!list.length ? (
              <></>
            ) : (
              <div className="relative py-2">
                {list.map((data, i) => (
                  <TabTitle
                    key={i}
                    index={i}
                    activeIndex={props.activeIndex}
                    title={data.title}
                    difficulty={data.difficulty}
                    setActiveIndex={props.setActiveIndex}
                  />
                ))}
                <div className="absolute -bottom-0 w-full h-full bg-black opacity-25 -z-10"></div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export function getList(x) {
  const hackerRankData = myPortfolioData();
  switch (x) {
    case 0:
      return [...hackerRankData].filter((data) => data.difficulty === 0);
    case 1:
      return [...hackerRankData].filter((data) => data.difficulty === 1);
    case 2:
      return [...hackerRankData].filter((data) => data.difficulty === 2);
    case 3:
      return [...hackerRankData].filter((data) => data.difficulty === 3);
  }
}
