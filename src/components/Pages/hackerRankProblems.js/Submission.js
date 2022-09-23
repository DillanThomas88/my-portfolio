import Highlight from "react-highlight";

export function Submission(props) {
  if (!props.problem)
    return (
      <div className="h-full w-full flex justify-center items-center lg:text-4xl">
        NOT FOUND
      </div>
    );
  const { challenge, language, code } = props.problem;

  const c = code.split("/*");
  console.log(c);
  const codeLines = c[1].split("\n");

  return (
    <>
      <div className="relative w-full lg:py-0 py-2">
        <div className="flex-col">
          {codeLines.map((line, i) => {
            return <Line key={i} number={i + 1} line={line} />;
          })}
        </div>
      </div>
    </>
  );
}

function Line(props) {
  return (
    <>
      <div className="lg:pl-0 lg:pl-2 px-4 w-full h-content flex  bg-[#0d1117] font-mono lg:border-l border-neutral-700  lg:text-lg text-xs">
        <div className="lg:w-8 w-4 h-content pr-2  bg-[#0d1117] flex  justify-end text-neutral-500 ">
          {props.number}
        </div>
        <pre className="w-full pl-2 flex justify-left items-center  bg-[#0d1117]">
          <code className="h-content lg:w-full">
            <Highlight className="javascript">{props.line}</Highlight>
          </code>
        </pre>
      </div>
    </>
  );
}
