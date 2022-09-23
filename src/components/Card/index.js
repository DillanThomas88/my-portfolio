export function Card(props) {
  return (
    <div
      onClick={() => {
        props.setActiveIndex(0);
        props.setDifficultyIndex(0);
      }}
      className="w-full py-6 lg:text-2xl text-white flex flex-col pointer-events-auto cursor-pointer border border-[#112031]  transition duration-500 bg-[#2F3F4F] hover:bg-white hover:text-[#112031] hover:shadow-lg hover:shadow-black hover:scale-[102%]"
    >
      <div className="h-content w-full  font-medium text-center">
        <h1 className="text-lg w-full drop-shadow-sm shadow-black">
          HackerRank
        </h1>
        <div className="py-1 uppercase lg:text-4xl text-lg lg:underline">
          {props.title}
        </div>
        <div className=" text-lg w-full text-center font-thin">
          {props.subtitle}
        </div>
      </div>
    </div>
  );
}
