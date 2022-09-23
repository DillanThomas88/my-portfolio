import { useState, useEffect } from "react";
import { Img } from "../../images";
import { ScalableVectorGraphic } from "../../svgs";

export function Home() {
  const categories = ["Arrays", "Sorting", "Strings"];

  const [data, setData] = useState("");

  console.log();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="text-white w-full h-content grid content-start lg:justify-start justify-center lg:px-0 px-6">
      {/* <Header /> */}
      <div className="z-0 lg:text-4xl h-content ">
        <div className="flex items-center justify-between animate-appear">
          <div className=" flex-col h-content lg:pb-4 items-center uppercase z-50 lg:justify-start justify-center lg:my-[8vh] my-10 lg:text-4xl lg:border-y lg:animate-delay">
            {/* <div className="font-thin uppercase animate-delay">
            Dillan Thomas Mansor
          </div> */}
            <h1 className="lg:hidden flex justify-start font-thin">
              Dillan Thomas Mansor
            </h1>
            <h1 className=" lg:text-9xl text-4xl lg:animate-right lg:flex lg:justify-start">
              full stack
            </h1>
            <h2 className="lg:text-7xl text-2xl lg:animate-right2  lg:flex lg:justify-start font-thin  bg-clip-text bg-gradient-to-tl from-violet-600 to-rose-400 text-transparent">
              web developer
            </h2>
          </div>
          <div className="lg:hidden">
            <Img
              title={"mini"}
              width={100}
              hight={100}
              classes={"rounded-r-full"}
            />
          </div>
        </div>
        <div className="lg:text-lg text-xs lg:w-[30vw] w-full animate-delay font-default z-50">
          ▪ Computer Science, Agile Methodologies, Database Theory, HTML5, CSS3,
          <br></br>TailwindCSS 3.0 JavaScript, React, JSX, Express, Node,
          MongoDB, <br></br>MySQL, GraphQL, Insomnia, Git. <br></br>
          <br></br>▪ Web Developer Adept in all stages of advanced web
          <br></br>development. Knowledgeable in User Interfaces, Testing,{" "}
          <br></br>and Debugging. Bringing forth Expertise in design,
          <br></br>installation, testing, and maintenance of web systems.{" "}
          <br></br>
          <br></br>▪ Over 10 years of Game Development <br></br>including:
          Mapping, Concept Art, Story-Boarding, <br></br>Color-Theory, and
          3D-modeling.
        </div>
        <div className="mt-4 space-y-4 h-content text-lg z-50 animate-delay lg:hidden">
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/dillanthomasmansor/",
                "_blank"
              )
            }
            className="flex justify-start items-center cursor-pointer"
          >
            <ScalableVectorGraphic
              title={"link"}
              classes={"text-white w-8 w-content mr-2"}
            />
            <div>LinkedIn</div>
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/DillanThomas88", "_blank")
            }
            className="flex justify-start items-center cursor-pointer"
          >
            <ScalableVectorGraphic
              title={"link"}
              classes={"text-white w-8 w-content mr-2"}
            />
            <div>GitHub</div>
          </button>
        </div>
      </div>

      <div className="fixed w-full left-0 bottom-0 h-full lg:block hidden">
        <div className="relative w-full h-full animate-delay">
          <img
            style={{
              WebkitMaskImage:
                "-webkit-gradient(linear, left 50%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
              position: "absolute",
              bottom: 0,
              right: "17rem",
              height: "110vh",
            }}
            src={require("../../images/headshot.png")}
          />
          {/* <Img
            title={"headshot"}
            alt={"avatar of dillan thomas mansor"}
            classes={
              "absolute z-50 h-[110vh] bottom-0 right-[17rem] animate-delay"
            }
          /> */}
        </div>
      </div>
    </div>
  );

  function Header() {
    return (
      <div className="grid grid-cols-3 gap-x-8 content-between justify-between text-5xl pt-20">
        {categories.map((data, i) => (
          <Category key={i} title={data} />
        ))}
      </div>
    );

    function Category(props) {
      return (
        <div className="flex-col justify-start items-start p-4 text-lg h-80 border">
          <div className="grid grid-cols-2 content-center justify-between h-20  border-b">
            <h1 className="text-[1.8rem] w-1/3 font-bold">{props.title}</h1>
            <div className="flex w-2/3">Solved ( 4 )</div>
          </div>
          <div className="flex justify-center items-center pt-4">
            a collection of similar data elements stored at contiguous memory
            locations. It is the simplest data structure where each data element
            can be accessed directly by only using its index number
          </div>
        </div>
      );
    }
  }
}
