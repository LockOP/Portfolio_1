import React from "react";

function About() {
  return (
    <div className="w-full h-full flex items-center justify-center text-[yellow] relative">
      <div className="absolute bg-[black] w-[100%] h-max z-10 flex flex-col items-center justify-center p-6">
        <p className="text-xl pt-2 w-full tracking-[1px] font-extralight">
          With a passion for designing exceptional user experiences and a solid
          foundation in front-end development technologies, I am eager to apply
          my skills to contribute to your Vision . . .
        </p>
      </div>
    </div>
  );
}

export default About;
