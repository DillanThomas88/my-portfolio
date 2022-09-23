import { useState } from "react";
import { FlyingObject } from "./FlyingObject";

export function FlyerContainer({ amount }) {
  const [flyers, setFlyers] = useState();

  return <div className="fixed -z-10 h-full w-full">{<FlyingObject />}</div>;
}
