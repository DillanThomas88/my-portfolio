import { useState } from "react";
import { Img } from "../../../images";

export function Certificate(props) {
  const links = {
    javascriptbasic: {
      title: "JavaScript (Basic)",
      link: "https://www.hackerrank.com/certificates/8c5a868d0fb2",
      date: "8/10/2022",
    },
    reactbasic: {
      title: "React (Basic)",
      link: "https://www.hackerrank.com/certificates/595bd90623b5",
      date: "8/08/2022",
    },
    css: {
      title: "CSS",
      // link: "https://www.hackerrank.com/certificates/595bd90623b5",
      // date: "8/10/2022",
    },
  };

  const [isCompleted, setIsCompleted] = useState(
    props.completed ? true : false
  );

  const { title, link, date } = links[props.title];

  return <>{isCompleted ? completedCertificate() : inProgressCertificate()}</>;

  function completedCertificate() {
    return (
      <div className="">
        <button
          onClick={() => window.open(`${link}`, "_blank")}
          className=" h-[9.5rem] w-full p-[2px] lg:text-xl transition duration-500 hover:shadow-lg hover:shadow-black  hover:scale-[102%]  text-white flex flex-col pointer-events-auto cursor-pointer  bg-gradient-to-tl from-zinc-800 to-[#496089]"
        >
          <div className=" z-10 w-full h-[85%] overflow-hidden transition duration-500  flex flex-col justify-between ">
            <div className="relative w-full h-full flex flex-col justify-between items-between  ">
              <div className="h-full flex justify-center text-[1.8rem] font-medium px-4">
                <div className="h-full w-full pt-[1rem] shadow-black z-10">
                  {title}
                </div>
              </div>

              <div className="absolute h-full w-full flex justify-center items-center top-5">
                <Img title={"hr"} css={""} />
              </div>
              <div className="absolute w-full h-full top-0 left-0 -z-10"></div>
              <div className="absolute h-full w-full flex justify-center items-center"></div>
            </div>
          </div>
          <div className=" text-[#091929] font-normal flex h-[15%] w-full justify-between items-center items-end text-sm px-4">
            <div className="text-white">View Certificate</div>
            <div className=" italic text-white">{date}</div>
          </div>
        </button>
      </div>
    );
  }

  function inProgressCertificate() {
    return (
      <div className="flex-col relative h-[12rem] w-[24rem] justify-center items-center animate-slideright">
        {/* <div className="absolute -top-5 w-full text-xl text-center text-blue-300 animate-pulse">
          In Progress...
        </div> */}
        <button
          // onClick={() => window.open(`${link}`, "_blank")}
          className=" w-full h-[12rem] text-2xl p-1 mr-4 text-white flex flex-col pointer-events-none cursor-default border border-[#112031] bg-gradient-to-tl from-blue-800 to-emerald-800 scale-90"
        >
          <div className=" z-20 w-full h-full overflow-hidden transition duration-500 bg-[#091929] flex flex-col">
            <div className="relative w-full h-full flex flex-col p-4">
              <div className=" flex justify-center text-[1.9rem] font-medium ">
                {"?"}
              </div>
              <div className="text-red-600 font-semibold text-lg h-full flex justify-center items-end pb-2 animate-pulse">
                <div className="">... IN PROGRESS ...</div>
              </div>
              <div className="absolute h-full w-full top-0 left-0 -z-10">
                <Img title={"hr"} css={""} />
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 -z-10"></div>
              <div className="absolute w-full h-full top-0 left-0 backdrop-blur-[2px] -z-10"></div>
            </div>
          </div>
        </button>
      </div>
    );
  }
}
