import Link from "next/link";
import React from "react";

function Experience() {
  return (
    <div className="w-full">
      <ExperienceItem
        date={"August 2023 - Present"}
        role={"Frontend Developer"}
        company={"8-Billion-minds"}
        companyUrl={"https://8billionminds"}
        address={"Remote - United Kingdom"}
      />
      <ExperienceItem
        date={"January 2021 - July 2022"}
        role={"Lead Frontend Developer"}
        company={"Loosto.com"}
        companyUrl={"https://loosto.com"}
        address={"Douala - Cameroon"}
      />
      <ExperienceItem
        date={"April 2018 - December 2021"}
        role={"Full Stack Developer"}
        company={"Loosto.com"}
        companyUrl={"https://loosto.com"}
        address={"Douala - Cameroon"}
      />
    </div>
  );
}

export default Experience;

function ExperienceItem({ role, date, company, companyUrl, address }) {
  return (
    <div
      className={`group relative border-l pl-5 pb-5 md:pl-10 cursor-pointer w-full
     before:absolute before:bg-[#999999] before:-top-[0px] before:-left-[5px]  transition-colors ease-in-out
     before:rounded-full before:w-[10px] before:h-[10px] hover:before:bg-indingo-500 hover:before:bg-primary `}
    >
      <span className="text-sm block pb-5 text-[#999999] relative -top-1 group-hover:text-primary">
        {date}
      </span>

      <h5 className="mb-1 text-xl md:text-2xl group-hover:text-primary">
        {role}
      </h5>
      <span className="text-[#999999] block mb-4">
        At
        <Link
          className="text-md ms-2 mb-2 underline transition-colors ease-in-out  "
          href={companyUrl}
        >
          {company}
        </Link>
      </span>
      <p className="text-base mb-5 text-[#999999]">{address}</p>
    </div>
  );
}
