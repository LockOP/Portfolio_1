import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Others() {
  return (
    <div className="text-2xl w-full flex flex-row h-full items-center justify-center gap-6 text-[yellow]">
      <a
        href="https://www.linkedin.com/in/arul-madhava-3a4238196"
        target="_blank"
        rel="noreferrer"
        className="w-max h-max"
      >
        <FaLinkedinIn size={40} />
      </a>
      <a
        href="https://github.com/LockOP"
        target="_blank"
        rel="noreferrer"
        className="w-max h-max"
      >
        <FaGithub size={40} />
      </a>
      <a
        href="https://madhavaarul@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="w-max h-max"
      >
        <BiLogoGmail size={40} />
      </a>
    </div>
  );
}

export default Others;
