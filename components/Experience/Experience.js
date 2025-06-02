import Link from "next/link";
import React from "react";

function Experience() {
  return (
    <div className="w-full">
      <ExperienceItem
        date={"February 2025 - Present"}
        role={"Product Owner / Fullstack Developer"}
        //   role={"Senior  Fullstack Developer"}
        company={"Gamler"}
        companyUrl={"https://gamler.online"}
        address={"Remote - Russia"}
      />
      <ExperienceItem
        date={"April 2024 - December 2025"}
        role={"Product Owner / Fullstack Developer"}
        // role={"Lead React/Fullstack Developer"}
        company={"Afiwa Exchange"}
        companyUrl={"https://afiwaexchange.com"}
        address={"Remote - Russia"}
      />
      <ExperienceItem
        date={"August 2023 - January 2024"}
        role={"Frontend Developer"}
        company={"8-Billion-minds"}
        companyUrl={"https://www.8billionminds.com/home"}
        address={"Remote - United Kingdom"}
      />
      <ExperienceItem
        date={"January 2018 - July 2022"}
        role={"Lead Frontend Developer / Fullstack developer"}
        company={"Loosto LTD"}
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
          target="_blank"
          href={companyUrl}
        >
          {company}
        </Link>
      </span>
      <p className="text-base mb-5 text-[#999999]">{address}</p>
    </div>
  );
}
