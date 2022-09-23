import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as Link } from "./link.svg";

export function ScalableVectorGraphic({ title, classes }) {
  const svg = {
    close: <Close />,
    link: <Link />,
  };

  return (
    <>
      <div className={classes}>{svg[title]}</div>
    </>
  );
}
