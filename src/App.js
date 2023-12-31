import "./App.css";
import { useEffect, useState } from "react";
import { AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/ai";
import { FiMinimize } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";

import Education from "./Components/Education";
import TechStack from "./Components/TechStack";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Others from "./Components/Others";

function App() {
  const [maxLength, setMaxLength] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  let mL = 0;

  if (window.innerWidth < window.innerHeight) {
    mL = window.innerWidth * 0.8;
  } else {
    mL = window.innerHeight * 0.8;
  }

  function onResize() {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    if (window.innerWidth < window.innerHeight) {
      setMaxLength(window.innerWidth * 0.8); //0.577
    } else {
      setMaxLength(window.innerHeight * 0.8);
    }
  }

  useEffect(() => {
    function handleResize() {
      window.location.reload(true);
      onResize();
    }

    function handleLoad() {
      onResize();
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  //////////////// timer
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        setCounter(counter + 1);
      }, 1000);
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

  //////// cube angle control
  const [xA, setXA] = useState(50);
  const [yA, setYA] = useState(30);
  const [zA, setZA] = useState(100);
  //////// cube angle control ends

  ////// hover
  const [hov, setHov] = useState(false);

  ///// hover ends

  //// relative mouse position to center of screen
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function logMousePosition(event) {
    const halfWindowWidth = window.innerWidth / 2;
    const halfWindowHeight = window.innerHeight / 2;
    const mouseXRelativeToCenter =
      (event.clientX - halfWindowWidth) / halfWindowWidth;
    const mouseYRelativeToCenter =
      (event.clientY - halfWindowHeight) / halfWindowWidth;

    setMouseX(mouseXRelativeToCenter * 90 + 45);
    setMouseY(-mouseYRelativeToCenter * 180 + 45);
  }

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  });
  //// relative mouse position to center of screen ends

  //// page control
  const [page, setPage] = useState(0);
  //// page control ends

  //// side hover state
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  const [s5, setS5] = useState(false);
  const [s6, setS6] = useState(false);

  //// side hover state ends

  const commonCSS =
    "[position:absolute] [transform-style:preserve-3d] [transition:all_0.5s_linear]";

  return (
    <div className="tracking-[1px] h-screen w-screen bg-[black] [transform-style:preserve-3d] z-50 flex items-center justify-center overflow-clip top-0 left-0">
      <div
        className={`absolute top-0 right-0 m-4 outline outline-2 outline-[#ffff0000] hover:outline-[yellow] h-6 w-6 flex items-center justify-center hover:outline-offset-[10px] z-30 ${
          hov ? "" : "[animation:catchAttention_0.7s_ease-out_infinite] hidden"
        } cursor-pointer ${page === 0 ? "hidden" : ""}`}
        onClick={() => {
          if (hov) {
            setPage(0);
          }
        }}
      >
        {hov ? <IoHomeOutline className="text-[yellow] text-[30px]" /> : <></>}
      </div>

      <div
        className={`flex justify-center items-center relative [transform-style:preserve-3d] [transform:translateZ(260px)] [transition:all_1s_linear] ${
          hov ? "[scale:100%]" : "[scale:40%]"
        }`}
      >
        <div
          className={`absolute bg-[black] w-[99%] h-[50%] [transform-style:preserve-3d] [transition:all_0.4s_linear] [transform:translateZ(${
            hov ? "3000" : "-5000"
          }px)] ${
            hov && page === 0 ? "[scale:100%]" : "[scale:0%]"
          } flex items-center justify-center`}
        >
          <div
            className="w-full h-full flex items-center justify-center text-[yellow] cursor-pointer group"
            onClick={() => {
              setHov(false);
              setPage(0);
              setS1(false);
              setS2(false);
              setS3(false);
              setS4(false);
              setS5(false);
              setS6(false);
            }}
          >
            <div className="w-max h-max z-10 flex flex-col items-start justify-center p-6 group">
              <div className="flex flex-row items-center text-4xl gap-4 justify-between w-full">
                <p>Hi,</p>{" "}
              </div>
              <p className="text-4xl bg-[black] border-b-2 pb-2 mb-2 border-[yellow]">
                I'm Arul Madhava
              </p>
              <p className="text-xl font-bold bg-[black]">
                Creative Front-End Developer
              </p>
              <p className="text-sm font-extralight tracking-[2px] pt-4 bg-[black] flex flex-row">
                Click to{" "}
                <p className="group-hover:font-bold">&nbsp;shrink&nbsp;</p> it
                back !!
              </p>
            </div>
          </div>
        </div>
        {/* <div
          className={`absolute w-[99%] h-[50%] border border-[yellow] [transform-style:preserve-3d] [transition:all_0.5s_ease-out] [transform:translateZ(${
            hov ? "30000px" : "-30000px"
          })] ${
            hov && page === 0 ? "[scale:100%]" : "[scale:0%]"
          } flex items-center justify-center`}
          style={{ width: maxLength || mL, height: maxLength || mL }}
        ></div> */}

        <div
          className={`absolute w-full h-full bg-transparent [transform-style:preserve-3d] [transition:all_1s_linear] [transform:translateZ(${
            s1 || s2 || s3 || s4 || s5 || s6 ? "-2800" : "-3001"
          }px)]`}
        >
          <div className="w-full h-full bg-transparent flex items-center justify-center relative text-xl font-bold select-none">
            <div
              className={`[transition:all_0.5s_linear] px-2 absolute top-[8%] left-[8%] ${
                s1 ? "text-[yellow]" : "text-[black]"
              }`}
            >
              ABOUT
            </div>
            <div
              className={`[transition:all_0.5s_linear] px-2 absolute self-center top-[18%] ${
                s2 ? "text-[yellow]" : "text-[black]"
              }`}
            >
              EDUCATION
            </div>
            <div
              className={`[transition:all_0.5s_linear] px-2 absolute top-[8%] right-[8%]  ${
                s3 ? "text-[yellow]" : "text-[black]"
              }`}
            >
              TECH-STACK
            </div>
            <div
              className={`[transition:all_0.5s_linear] px-2 absolute bottom-[8%] left-[8%] ${
                s4 ? "text-[yellow]" : "text-[black]"
              }`}
            >
              EXPERIENCE
            </div>
            <div
              className={`[transition:all_0.5s_linear] px-2 absolute  self-center bottom-[18%] ${
                s5 ? "text-[yellow]" : "text-[black]"
              }`}
            >
              PROJECTS
            </div>
            <div
              className={`[transition:all_0.5s_linear] px-2 absolute bottom-[8%] right-[8%] ${
                s6 ? "text-[yellow]" : "text-[black]"
              }`}
            >
              CONTACT
            </div>
          </div>
        </div>

        <div
          className={`absolute bg-[black] w-[99%] h-[50%] [transform-style:preserve-3d] [transition:all_0.5s_linear] [transform:translateZ(3000px)] ${
            hov && page === 1 ? "[scale:100%]" : "[scale:0%]"
          } flex items-center justify-center`}
        >
          <About />
        </div>

        <div
          className={`absolute bg-[black] w-[99%] h-[50%] [transform-style:preserve-3d] [transition:all_0.5s_linear] [transform:translateZ(3000px)] ${
            hov && page === 2 ? "[scale:100%]" : "[scale:0%]"
          } flex items-center justify-center`}
        >
          <Education />
        </div>

        <div
          className={`absolute bg-[black] w-[99%] h-[50%] [transform-style:preserve-3d] [transition:all_0.5s_linear] [transform:translateZ(3000px)] ${
            hov && page === 3 ? "[scale:100%]" : "[scale:0%]"
          } flex items-center justify-center`}
        >
          <TechStack />
        </div>

        <div
          className={`absolute bg-[black] w-[99%] h-[50%] [transform-style:preserve-3d] [transition:all_0.5s_linear] [transform:translateZ(3000px)] ${
            hov && page === 4 ? "[scale:100%]" : "[scale:0%]"
          } flex items-center justify-center`}
        >
          <Experience />
        </div>

        <div
          className={`absolute bg-[black] w-[99%] h-[50%] [transform-style:preserve-3d] [transition:all_0.5s_linear] [transform:translateZ(3000px)] ${
            hov && page === 5 ? "[scale:100%]" : "[scale:0%]"
          } flex items-center justify-center`}
        >
          <Projects />
        </div>

        <div
          className={`absolute bg-[black] w-[99%] h-[50%] [transform-style:preserve-3d] [transition:all_0.5s_linear] [transform:translateZ(3000px)] ${
            hov && page === 6 ? "[scale:100%]" : "[scale:0%]"
          } flex items-center justify-center`}
        >
          <Others />
        </div>

        <div
          className={`relative [transform:translateZ(-${
            (maxLength || mL) / 2
          }px)] [transform-style:preserve-3d] [transition:all_${
            !hov ? 0.5 : 0.7
          }s_ease] [transform:rotateX(${!hov ? mouseY : 45}deg)_rotateY(${
            !hov ? mouseX : 45
          }deg)_rotateZ(${0}deg)] ${hov ? "" : "cursor-pointer"}`}
          style={{ width: maxLength || mL, height: maxLength || mL }}
          onClick={() => {
            setHov(true);
          }}
        >
          <div
            className={`${
              s3 ? "[background-color:yellow]" : "[background-color:black]"
            } ${commonCSS} [transform:translateZ(${
              !hov ? (maxLength || mL) / 2 : (maxLength || mL) * 1.1
            }px)] ${hov ? "cursor-pointer" : ""}`}
            style={{ width: maxLength || mL, height: maxLength || mL }}
            onClick={() => {
              if (hov) {
                setPage(3);
              }
            }}
            onMouseEnter={() => {
              if (hov) {
                setS3(true);
              }
            }}
            onMouseLeave={() => {
              setS3(false);
            }}
          >
            {animBorder(counter, s3)}
          </div>

          <div
            className={`${
              s6 ? "[background-color:yellow]" : "[background-color:black]"
            } ${commonCSS} [transform:rotateY(90deg)_translateZ(${
              !hov ? (maxLength || mL) / 2 : (maxLength || mL) * 1.1
            }px)] ${hov ? "cursor-pointer" : ""}`}
            style={{ width: maxLength || mL, height: maxLength || mL }}
            onClick={() => {
              if (hov) {
                setPage(6);
              }
            }}
            onMouseEnter={() => {
              if (hov) {
                setS6(true);
              }
            }}
            onMouseLeave={() => {
              setS6(false);
            }}
          >
            {animBorder(counter, s6)}
          </div>

          <div
            className={`${
              s1 ? "[background-color:yellow]" : "[background-color:black]"
            } ${commonCSS} [transform:rotateY(90deg)_translateZ(-${
              !hov ? (maxLength || mL) / 2 : (maxLength || mL) * 1.1
            }px)] ${hov ? "cursor-pointer" : ""}`}
            style={{ width: maxLength || mL, height: maxLength || mL }}
            onClick={() => {
              if (hov) {
                setPage(1);
              }
            }}
            onMouseEnter={() => {
              if (hov) {
                setS1(true);
              }
            }}
            onMouseLeave={() => {
              setS1(false);
            }}
          >
            {animBorder(counter, s1)}
          </div>

          <div
            className={`${
              s4 ? "[background-color:yellow]" : "[background-color:black]"
            } ${commonCSS} [transform:translateZ(-${
              !hov ? (maxLength || mL) / 2 : (maxLength || mL) * 1.1
            }px)] ${hov ? "cursor-pointer" : ""}`}
            style={{ width: maxLength || mL, height: maxLength || mL }}
            onClick={() => {
              if (hov) {
                setPage(4);
              }
            }}
            onMouseEnter={() => {
              if (hov) {
                setS4(true);
              }
            }}
            onMouseLeave={() => {
              setS4(false);
            }}
          >
            {animBorder(counter, s4)}
          </div>

          <div
            className={`${
              s2 ? "[background-color:yellow]" : "[background-color:black]"
            } ${commonCSS} [transform:rotateX(90deg)_translateZ(${
              !hov ? (maxLength || mL) / 2 : (maxLength || mL) * 1.2
            }px)] ${hov ? "cursor-pointer" : ""}`}
            style={{ width: maxLength || mL, height: maxLength || mL }}
            onClick={() => {
              if (hov) {
                setPage(2);
              }
            }}
            onMouseEnter={() => {
              if (hov) {
                setS2(true);
              }
            }}
            onMouseLeave={() => {
              setS2(false);
            }}
          >
            {animBorder(counter, s2)}
          </div>

          <div
            className={`${
              s5 ? "[background-color:yellow]" : "[background-color:black]"
            } ${commonCSS} [transform:rotateX(90deg)_translateZ(-${
              !hov ? (maxLength || mL) / 2 : (maxLength || mL) * 1.2
            }px)] ${hov ? "cursor-pointer" : ""}`}
            style={{ width: maxLength || mL, height: maxLength || mL }}
            onClick={() => {
              if (hov) {
                setPage(5);
              }
            }}
            onMouseEnter={() => {
              if (hov) {
                setS5(true);
              }
            }}
            onMouseLeave={() => {
              setS5(false);
            }}
          >
            {animBorder(counter, s5)}
          </div>
        </div>
      </div>
    </div>
  );
}

function animBorder(c, s = false) {
  return (
    <div className="w-full h-full bg-transparent relative [transform-style:preserve-3d]">
      <svg className="w-full h-full [transform-style:preserve-3d]">
        <rect
          className={`[transform-style:preserve-3d]  [fill:transparent] w-full h-full absolute [stroke-dasharray:${
            !s ? "50%_50%" : "100%_0%"
          }] [stroke-dashoffset:${c * 100}] [stroke-width:${
            !s ? "10" : "30"
          }px] ${s ? "[stroke:black]" : "[stroke:yellow]"}  [transition:all_${
            s ? 0.5 : 2
          }s_linear] [stroke-linecap:round]`}
        />
      </svg>
    </div>
  );
}

export default App;
