import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Experience() {
  const edArr = [
    {
      ins: "HealthWorksAI",
      year: "June 2023 - ongoing",
      branch: "Assocoiate Software Developer",
      marks: "-",
      perc: 0,
    },
    {
      ins: "HealthWorksAI",
      year: "Jan 2023 - June 2023",
      branch: "Technology Intern",
      marks: "-",
      perc: 0,
    },
    {
      ins: "India Fintech Forum's IFTA",
      year: "June 2022",
      branch: "Graphic Designer",
      marks: "-",
      perc: 0,
    },
    {
      ins: "CashRich",
      year: "June 2022",
      branch: "UI/UX Intern",
      marks: "-",
      perc: 0,
    },
    {
      ins: "India Fintech Forum's IFTA",
      year: "Sep 2021 - Nov 2021",
      branch: "Graphic Designer",
      marks: "-",
      perc: 0,
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
        <div className="h-full w-[70%] bg-transparent relative overflow-hidden flex items-center justify-center">
          <div
            className={`h-max w-full px-10 bg-transparent flex flex-col items-center absolute [transition:all_0.5s_linear] text-center gap-2 ${
              ind === 0
                ? "translate-x-[0%]"
                : ind > 0
                ? `translate-x-[-${(ind - 0) * 100}%]`
                : `translate-x-[${(0 - ind) * 100}%]`
            }`}
          >
            <p className="text-xl pt-2 uppercase tracking-[0.7px]">
              {edArr[0].ins}
            </p>
            <p className="text-lg pt-2 tracking-[0.7px] italic font-extralight">
              {edArr[0].year}
            </p>
            <p className="text-lg pt-1 tracking-[0.7px] italic font-extralight">
              {edArr[0].branch}
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
            <p className="text-xl pt-2 uppercase tracking-[0.7px]">
              {edArr[1].ins}
            </p>
            <p className="text-lg pt-2 tracking-[0.7px] italic font-extralight">
              {edArr[1].year}
            </p>
            <p className="text-lg pt-1 tracking-[0.7px] italic font-extralight">
              {edArr[1].branch}
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
            <p className="text-xl pt-2 uppercase tracking-[0.7px]">
              {edArr[2].ins}
            </p>
            <p className="text-lg pt-2 tracking-[0.7px] italic font-extralight">
              {edArr[2].year}
            </p>
            <p className="text-lg pt-1 tracking-[0.7px] italic font-extralight">
              {edArr[2].branch}
            </p>
          </div>
          <div
            className={`h-max w-full px-10 bg-transparent flex flex-col absolute [transition:all_0.5s_linear] text-center gap-2 ${
              ind === 3
                ? "translate-x-[0%]"
                : ind > 3
                ? `translate-x-[-${(ind - 3) * 100}%]`
                : `translate-x-[${(3 - ind) * 100}%]`
            }`}
          >
            <p className="text-xl pt-2 uppercase tracking-[0.7px]">
              {edArr[3].ins}
            </p>
            <p className="text-lg pt-2 tracking-[0.7px] italic font-extralight">
              {edArr[3].year}
            </p>
            <p className="text-lg pt-1 tracking-[0.7px] italic font-extralight">
              {edArr[3].branch}
            </p>
          </div>
          <div
            className={`h-max w-full px-10 bg-transparent flex flex-col absolute [transition:all_0.5s_linear] text-center gap-2 ${
              ind === 4
                ? "translate-x-[0%]"
                : ind > 4
                ? `translate-x-[-${(ind - 4) * 100}%]`
                : `translate-x-[${(4 - ind) * 100}%]`
            }`}
          >
            <p className="text-xl pt-2 uppercase tracking-[0.7px]">
              {edArr[4].ins}
            </p>
            <p className="text-lg pt-2 tracking-[0.7px] italic font-extralight">
              {edArr[4].year}
            </p>
            <p className="text-lg pt-1 tracking-[0.7px] italic font-extralight">
              {edArr[4].branch}
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

export default Experience;
