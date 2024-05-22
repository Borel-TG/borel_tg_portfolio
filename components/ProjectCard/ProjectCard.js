import Image from "next/image";
import React from "react";
import Link from "next/link";
import StackUsed from "@/components/StackUsed/StackUsed";
import { Space_Mono } from "next/font/google";

function ProjectCard({
  name = "",
  technologies = [],
  summary = "",
  projectUrl = "#",
  industry = "",
  type = "",
  role = "",
}) {
  return (
    <div
      className={`group cursor-pointer border border-slate-600/50
    min-w-fit backdrop-blur-lg rounded-xl p-5 relative bg-primary/10
   shadow-xl hover:bg-white/40
   `}
    >
      <div className="transition-all rounded-full ease-in-out duration-500 absolute top-5 right-5 md:group-hover:block md:group-hover:-right-5 group-hover:bg-black/70">
        <StackUsed tools={technologies} />
      </div>
      <div>
        <p className="text-md xl:text-lg">{industry}</p>
        <h3 className="text-xl xl:text-2xl font-bold">{name}</h3>
        <p className="line-clamp-3  text-base mr-12 mt-5 min-h-[60px]">
          {summary}
        </p>
      </div>

      <div className="mt-5 relative overflow-hidden h-[49px] ">
        <span className="invisible md:visible text-sm text-truncate block group-hover:invisible">
          {type}
        </span>
        <span className="invisible text-green-600 md:visible  text-truncate block group-hover:invisible">
          {"As " + role}
        </span>
        <div className="absolute flex transition-all duration-500 ease-in-out content-center bottom-0 md:-bottom-14 md:group-hover:-bottom-0">
          <Link
            href={projectUrl}
            className="p-2 rounded-xl text-[#f1f1f1] bg-black transition-colors ease-in-out shadow-md"
          >
            Open Live project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
