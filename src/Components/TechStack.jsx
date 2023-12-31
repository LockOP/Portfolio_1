import React, { useEffect, useState } from "react";

function TechStack() {
  const dev = [
    "React.js",
    "Tailwind CSS",
    "Redux",
    "MicroFrontEnd",
    "JavaScript",
    "MongoDB",
  ];
  const tools = ["VS Code", "Figma", "GitHub", "MongoDB Atlas"];
  //////////////// timer
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        if (counter >= dev.length + tools.length - 1) {
          setCounter(0);
        } else {
          setCounter(counter + 1);
        }
      }, 500);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [running, counter]);

  function handleStartClick() {
    setRunning(true);
  }

  function handleStopClick() {
    setRunning(false);
  }
  /////////////// timer ends

  return (
    <div className="text-2xl pt-2 w-full flex flex-col h-full items-center justify-center gap-6 text-[yellow] tracking-[1px]">
      <div
        className="w-[70%] h-max flex flex-col gap-2"
        onMouseEnter={() => {
          setRunning(false);
        }}
        onMouseLeave={() => {
          setRunning(true);
        }}
      >
        <div className="w-full flex flex-wrap group">
          <p className="font-bold pr-3 italic uppercase">
            {"> "}Development -{" "}
          </p>
          {dev.map((item, ind) => {
            return (
              <p
                className={`w-max pr-2 hover:italic ${
                  ind === counter && running ? "italic" : ""
                }`}
              >
                {item}
                {ind === dev.length - 1 ? "." : ","}
              </p>
            );
          })}
        </div>
        <div className="w-full flex flex-wrap group">
          <p className="font-bold pr-3 italic uppercase">{"> "}Tools - </p>
          {tools.map((item, ind) => {
            return (
              <p
                className={`w-max pr-2 hover:italic ${
                  ind + 1 === counter - 1 - tools.length && running
                    ? "italic"
                    : ""
                }`}
              >
                {item}
                {ind === tools.length - 1 ? "." : ","}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
