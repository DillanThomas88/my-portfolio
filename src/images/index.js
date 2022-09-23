import ps from "./problem-solving_vector.png";
import headshot from "./headshot.png";
import miniAvatar from "./headshotsmall.jpg";
import hr from "./hackerrank.jpeg";
import medal from "./medal.png";
export function Img(props) {
  const twcss =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg";
  const reactjs =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
  const image = {
    tailwind: twcss,
    react: reactjs,
    ps: ps,
    headshot: headshot,
    hr: hr,
    mini: miniAvatar,
  };

  return (
    <img
      width={props.width}
      height={props.height}
      src={image[props.title]}
      alt={props.alt}
      className={props.classes}
    />
  );
}
