import { useState } from "react";
import ContactForm from "../Card/ContactForm";
import { ScalableVectorGraphic } from "../../svgs";

export function Contact() {
  return (
    <div className="z-10 text-white w-full h-content grid grid-cols-2 grid-rows-1 mt-12  rounded-2xl overflow-hidden animate-appear">
      <section className="h-full w-full lg:grid lg:content-center lg:justify-center hidden">
        <img src={require("../../images/puppy-blur.jpg")} />
      </section>
      <div className="z-10 relative grid content-center justify-center">
        <div className="absolute w-full h-full bg-white opacity-10"></div>
        <div className=" flex justify-evenly h-content text-lg z-50 animate-delay">
          <button
            className="flex justify-start items-center cursor-pointer transition hover:scale-110"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/dillanthomasmansor/",
                "_blank"
              )
            }
          >
            <ScalableVectorGraphic
              title={"link"}
              classes={"text-blue-400 w-8 w-content mr-2"}
            />
            <div>LinkedIn</div>
          </button>
          <button
            className="flex justify-start items-center cursor-pointer  transition hover:scale-110"
            onClick={() =>
              window.open("https://github.com/DillanThomas88", "_blank")
            }
          >
            <ScalableVectorGraphic
              title={"link"}
              classes={"text-blue-400 w-8 w-content mr-2"}
            />
            <div>GitHub</div>
          </button>
        </div>
        <div className="uppercase text-7xl font-bold text-center animate-appear mt-12">
          Get in touch!
        </div>
        <div className="text-center text-lg mb-12 animate-appear">
          Thanks for stopping by, Have a wonderful week!
        </div>

        <div className="z-50 animate-delay">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

function Input(props) {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className=" px-4 py-2 bg-white text-black w-full h-content my-2"
        placeholder={props.placeholder ? props.placeholder : "...Search"}
      ></input>
      <div className="w-full h-6 px-4 text-amber-500"></div>
    </>
  );
}
