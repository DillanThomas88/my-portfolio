import { getColor } from ".";

export function Problem(props) {
  console.log(props);

  const { bg, text, block } = getColor(props.data.difficulty);

  return (
    <div className="animate-appear  relative h-full w-full flex justify-between">
      {/* left section */}
      <div className="w-[48%] relative flex-col">
        <div className=" flex justify-start items-end w-full">
          <label
            className={`text-5xl mr-2 flex items-center overflow-x-scroll scrollbar-none scrollbar-thumb-emerald-400 scrollbar-track-transparent h-20 ${text}`}
          >
            {props.data.title}
          </label>
          {/* <div>{getDifficulty(data.difficulty)}</div> */}
        </div>
        <div className=" overflow-y-auto  text-white h-full">
          <div className={`flex-col text-white ${block} h-full p-4`}>
            <label className={`text-xl font-semibold ${text}`}>Problem</label>
            <div className=" font-thin">
              <div className="pb-5">{props.data.desc}</div>
            </div>
            <label className={`text-xl font-semibold ${text}`}>
              Function Description
            </label>
            <div className=" font-thin">
              <div className="pb-5">{props.data.functionDesc}</div>
            </div>
            <label className={`text-xl font-semibold ${text}`}>Returns</label>
            <div className=" font-thin">
              <div className="pb-5">{props.data.returns}</div>
            </div>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="relative w-[48%] flex-col">
        <div className="  flex justify-start w-full">
          <label
            className={` flex items-center  text-5xl font-medium mr-2 h-20 ${text}`}
          >
            My Solution
          </label>
        </div>
        <pre
          className={`${block} h-full -ml-4 pr-2 font-mono text-white  overflow-y-auto `}
        >
          {props.data.answer}
        </pre>
      </div>
    </div>
  );
}
