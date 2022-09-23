import { Card } from "../Card";
export function HackerDisplay(props) {
  return (
    <div className="flex-col">
      <div>
        <Card
          setActiveIndex={props.setActiveIndex}
          setDifficultyIndex={props.setDifficultyIndex}
          title={"Problem Solving: JavaScript"}
          subtitle={"Solutions"}
        />
      </div>

      <div className=" grid grid-cols-2 gap-2 content-center justify-center ">
        <div className="absolute top-0 left-0 z-50"></div>
      </div>
    </div>
  );
}
