export function FlyingObject(props) {
  const randomPosition = [
    Math.floor(
      (Math.random() * window.innerHeight) / 2 - window.innerWidth / 8
    ),
    Math.floor((Math.random() * window.innerWidth) / 2 - window.innerWidth / 4),
  ];

  return (
    <div
      className={`fixed -top-0 ${props.parentcss} pointer-events-none animate-fall`}
    >
      <div className=" h-full w-full">
        <div
          className={` bg-black opacity-20 h-full w-full ${props.childcss}`}
        ></div>
      </div>
    </div>
  );
}
