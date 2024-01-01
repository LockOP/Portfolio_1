import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

function Projects() {
  const pro = [
    {
      name: "advanced-image-sliders",
      skills: "React, Tailwind, HTML, CSS, Javascript",
      about: "",
      link: "https://academian-demo.vercel.app/",
    },
    {
      name: "3d-cube",
      skills: "React, Tailwind, HTML, CSS, Javascript",
      about: "",
      link: "https://3d-cube-henna.vercel.app/",
    },
    {
      name: "water-loader",
      skills: "React, Tailwind, HTML, CSS, Javascript",
      about: "",
      link: "https://water-loader.vercel.app/",
    },
    {
      name: "spotlight-effect",
      skills: "React, Tailwind, HTML, CSS, Javascript",
      about: "",
      link: "https://spotlight-effect.vercel.app/",
    },
    {
      name: "watch-slider",
      skills: "React, Tailwind, HTML, CSS, Javascript",
      about: "",
      link: "https://watch-slider.vercel.app/",
    },
    {
      name: "3d-button",
      skills: "React, Tailwind, HTML, CSS, Javascript",
      about: "",
      link: "https://3d-button.vercel.app/",
    },
    {
      name: "chocolate-slider",
      skills: "React, Tailwind, HTML, CSS, Javascript",
      about: "",
      link: "https://chocolate-slider.vercel.app/",
    },
    {
      name: "time-home-page",
      skills: "React, Tailwind, HTML, CSS, Javascript",
      about: "",
      link: "https://time-home-page.vercel.app/",
    },
  ];
  return (
    <div className="text-2xl w-full flex flex-col h-full items-center gap-4 text-[yellow] pr-3 overflow-auto">
      {pro.map((item) => {
        return (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-full h-max flex flex-col gap-1 border border-[yellow] py-1 px-3"
          >
            <div className="text-xl flex flex-row w-full h-max items-center justify-start gap-3">
              <RiExternalLinkLine />
              <p className="capitalize">{item.name}</p>
            </div>
            <p className="text-base">{item.skills}</p>
            <p className="text-lg">{item.about}</p>
          </a>
        );
      })}
    </div>
  );
}

export default Projects;
