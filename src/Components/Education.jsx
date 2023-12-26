import React, { useState } from "react";

function Education() {
  const edArr = [
    {
      ins: "National Institute of Technology Agartala",
      year: "2019-2023",
      branch: "Production Engineering",
      marks: "CGPA- 8.68/10",
      perc: 86.8,
    },
    {
      ins: "G. N. National Public School, Gorakhpur, UP",
      year: "2016-2018",
      branch: "CBSE Class XII",
      marks: "Percentage- 89.6%",
      perc: 89.6,
    },
    {
      ins: "G. N. National Public School, Gorakhpur, UP",
      year: "2014-2016",
      branch: "CBSE Class X",
      marks: "CGPA- 9.6/10",
      perc: 96,
    },
  ];
  const [ind, setInd] = useState(0);
  return (
    <div className="text-2xl pt-2 w-full flex flex-row h-max gap-6">
      <div className="h-auto w-max bg-transparent flex flex-col justify-between pb-2 pt-3">
        <div
          className={`${
            ind === 0 ? "bg-[yellow] rotate-45" : "bg-transparent"
          } [transition:all_0.3s_linear] border border-[yellow] hover:bg-[yellow] w-3 h-3 cursor-pointer`}
          onClick={() => {
            setInd(0);
          }}
        ></div>
        <div
          className={`${
            ind === 1 ? "bg-[yellow] rotate-45" : "bg-transparent"
          } [transition:all_0.3s_linear] border border-[yellow] hover:bg-[yellow] w-3 h-3 cursor-pointer`}
          onClick={() => {
            setInd(1);
          }}
        ></div>
        <div
          className={`${
            ind === 2 ? "bg-[yellow] rotate-45" : "bg-transparent"
          } [transition:all_0.3s_linear] border border-[yellow] hover:bg-[yellow] w-3 h-3 cursor-pointer`}
          onClick={() => {
            setInd(2);
          }}
        ></div>
      </div>
      <div className="flex-grow h-max bg-transparent flex flex-col">
        <p className="text-xl pt-2 w-full uppercase tracking-[0.7px]">
          {edArr[ind].ins}
        </p>
        <p className="text-lg pt-2 w-full tracking-[0.7px] italic ">
          {edArr[ind].year}
        </p>
        <p className="text-lg pt-2 w-full tracking-[0.7px] italic">
          {edArr[ind].branch}
        </p>
        <p className="text-lg pt-2 w-full tracking-[0.7px] italic">
          {edArr[ind].marks}
        </p>
      </div>
    </div>
  );
}

export default Education;
