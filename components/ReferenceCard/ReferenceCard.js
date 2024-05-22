import React from "react";

function ReferenceCard({ name, role, image, testimony }) {
  return (
    <div className=" text-black bg-black/10 text-cente p-5 rounded-xl transition-colors ease-linear backdrop-blur-lg hover:bg-black/20 cursor-pointer">
      <div className="border-b  border-black/70 pb-3 ml-3 pl-3">
        <h5 className="mt-1 font-bold">{name}</h5>
        <p>{role}</p>
      </div>
      <p className="mt-3 mb-">{testimony}</p>
    </div>
  );
}

export default ReferenceCard;
