import { HRPRoblems } from "../Pages/hackerRankProblems.js";

export function Problems(props) {
  // console.log(props);

  return (
    <div className=" h-full">
      <HRPRoblems />
    </div>
  );
}

export function getDifficulty(x) {
  switch (x) {
    case 0:
      return "Easy";
    case 1:
      return "Medium";
    case 2:
      return "Hard";
    case 3:
      return "Expert";
    default:
      return "undefined";
  }
}

export function getColor(x) {
  switch (x) {
    case 0:
      return {
        bg: "bg-emerald-400",
        head: "bg-emerald-800",
        text: "text-emerald-300",
        block: `bg-gradient-to-tl from-emerald-900 to-transparent overflow-auto scrollbar scrollbar-thumb-emerald-400 scrollbar-track-transparent`,
      };
    case 1:
      return {
        bg: "bg-amber-400",
        head: "bg-amber-800",
        text: "text-amber-300",
        block: `bg-gradient-to-tl from-amber-900 to-transparent overflow-auto scrollbar scrollbar-thumb-amber-400 scrollbar-track-transparent`,
      };
    case 2:
      return {
        bg: "bg-red-400",
        head: "bg-red-800",
        text: "text-red-300",
        block: `bg-gradient-to-tl from-red-900 to-transparent overflow-auto scrollbar scrollbar-thumb-red-400 scrollbar-track-transparent`,
      };
    case 3:
      return {
        bg: "bg-purple-300",
        head: "bg-purple-800",
        text: "text-purple-300",
        block: `bg-gradient-to-tl from-violet-900 to-transparent overflow-auto scrollbar scrollbar-thumb-violet-400 scrollbar-track-transparent`,
      };
  }
}
