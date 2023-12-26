import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Education() {
  const edArr = [
    {
      ins: "National Institute of Technology Agartala",
      year: "2019 - 2023",
      branch: "Production Engineering",
      marks: "CGPA - 8.68 / 10",
      perc: 86.8,
    },
    {
      ins: "G. N. National Public School, Gorakhpur, UP",
      year: "2016 - 2018",
      branch: "CBSE Class XII",
      marks: "Percentage - 89.6 %",
      perc: 89.6,
    },
    {
      ins: "G. N. National Public School, Gorakhpur, UP",
      year: "2014 - 2016",
      branch: "CBSE Class X",
      marks: "CGPA - 9.6 / 10",
      perc: 96,
    },
  ];
  const [ind, setInd] = useState(0);
  return (
    <div className="text-2xl pt-2 w-full flex flex-col h-full items-center gap-6 text-[yellow]">
      <div className="w-full flex-grow bg-transparent flex flex-row justify-between">
        <div
          className="h-full flex-grow bg-transparent flex items-center justify-center cursor-pointer group"
          onClick={() => {
            setInd((cur) => {
              if (cur - 1 < 0) {
                return ((cur - 1) % edArr.length) + edArr.length;
              }
              return (cur - 1) % edArr.length;
            });
          }}
        >
          <div
            className={`w-[80%] h-[0px] group-hover:h-[70px] [transition:all_0.2s_linear] flex flex-row items-center justify-evenly border-y border-[yellow] py-3 relative overflow-hidden`}
          >
            <div
              className={`w-full text-[50px] absolute flex justify-start px-2 [animation:leftAnim_2s_linear_infinite] group-hover:[animation:leftAnim_0.7s_linear_infinite]`}
            >
              <AiOutlineLeft />
            </div>
            <div
              className={`w-full text-[50px] absolute flex justify-end px-2 [animation:leftAnim_2s_linear_infinite] group-hover:[animation:leftAnim_0.7s_linear_infinite]`}
            >
              <AiOutlineLeft />
            </div>
          </div>
        </div>
        <div className="h-full w-[60%] bg-transparent relative overflow-hidden flex items-center justify-center">
          <div
            className={`h-max w-full px-10 bg-transparent flex flex-col items-center absolute [transition:all_0.5s_linear] text-center gap-2 ${
              ind === 0
                ? "translate-x-[0%]"
                : ind > 0
                ? `translate-x-[-${(ind - 0) * 100}%]`
                : `translate-x-[${(0 - ind) * 100}%]`
            }`}
          >
            <p className="text-3xl pt-2 uppercase tracking-[0.7px]">
              {edArr[0].ins}
            </p>
            <p className="text-xl pt-2 tracking-[0.7px] italic ">
              {edArr[0].year}
            </p>
            <p className="text-xl pt-2 tracking-[0.7px] italic">
              {edArr[0].branch}
            </p>
            <p className="text-xl pt-2 tracking-[0.7px] italic">
              {edArr[0].marks}
            </p>
          </div>
          <div
            className={`h-max w-full px-10 bg-transparent flex flex-col absolute [transition:all_0.5s_linear] text-center gap-2 ${
              ind === 1
                ? "translate-x-[0%]"
                : ind > 1
                ? `translate-x-[-${(ind - 1) * 100}%]`
                : `translate-x-[${(1 - ind) * 100}%]`
            }`}
          >
            <p className="text-3xl pt-2 uppercase tracking-[0.7px]">
              {edArr[1].ins}
            </p>
            <p className="text-xl pt-2 w-full tracking-[0.7px] italic ">
              {edArr[1].year}
            </p>
            <p className="text-xl pt-2 w-full tracking-[0.7px] italic">
              {edArr[1].branch}
            </p>
            <p className="text-xl pt-2 w-full tracking-[0.7px] italic">
              {edArr[1].marks}
            </p>
          </div>
          <div
            className={`h-max w-full px-10 bg-transparent flex flex-col absolute [transition:all_0.5s_linear] text-center gap-2 ${
              ind === 2
                ? "translate-x-[0%]"
                : ind > 2
                ? `translate-x-[-${(ind - 2) * 100}%]`
                : `translate-x-[${(2 - ind) * 100}%]`
            }`}
          >
            <p className="text-3xl pt-2 uppercase tracking-[0.7px]">
              {edArr[2].ins}
            </p>
            <p className="text-xl pt-2 w-full tracking-[0.7px] italic ">
              {edArr[2].year}
            </p>
            <p className="text-xl pt-2 w-full tracking-[0.7px] italic">
              {edArr[2].branch}
            </p>
            <p className="text-xl pt-2 w-full tracking-[0.7px] italic">
              {edArr[2].marks}
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setInd((cur) => {
              return (cur + 1) % edArr.length;
            });
          }}
          className="h-full flex-grow bg-transparent flex items-center justify-center cursor-pointer group"
        >
          <div
            className={`w-[80%] h-[0px] group-hover:h-[70px] [transition:all_0.2s_linear] flex flex-row items-center justify-evenly border-y border-[yellow] py-3 relative overflow-hidden`}
          >
            <div
              className={`w-full text-[50px] absolute flex justify-start px-2 [animation:rightAnim_2s_linear_infinite] group-hover:[animation:rightAnim_0.7s_linear_infinite]`}
            >
              <AiOutlineRight />
            </div>
            <div
              className={`w-full text-[50px] absolute flex justify-end px-2 [animation:rightAnim_2s_linear_infinite] group-hover:[animation:rightAnim_0.7s_linear_infinite]`}
            >
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
