import Link from "next/link";
import React from "react";

function Eduction() {
  return (
    <div className="w-full">
      <EducationItem
        date={"August 2022 - August 224"}
        role={"Master's in Computer Science"}
        company={"University of Innopolis"}
        companyUrl={"https://innopolis.university/en/"}
        address={"Innopolis - Russia"}
      />
      <EducationItem
        date={"October 2014 - October 2017"}
        role={"Bachelor's in Computer Science"}
        company={"University of Buea"}
        companyUrl={"https://www.ubuea.cm/"}
        address={"Buea - Cameroon"}
      />
    </div>
  );
}

export default Eduction;

function EducationItem({ role, date, company, companyUrl, address }) {
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
          target="_blank"
        >
          {company}
        </Link>
      </span>
      <p className="text-base mb-5 text-[#999999]">{address}</p>
    </div>
  );
}
