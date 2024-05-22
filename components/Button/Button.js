import React from "react";
import Link from "next/link";

function Button({
  type = "button",
  label = "A button",
  cssClass = "",
  ...props
}) {
  if (type === "link") {
    return (
      <Link
        {...props}
        className={`p-3 px-5 text-black rounded-2xl shadow-xl bg-primary transition-all
      ease-linear hover:bg-[#526b2b] hover:text-white hover:scale-105 ${cssClass}`}
      >
        {label}
      </Link>
    );
  }
  return (
    <button
      {...props}
      className={`p-3 px-5 text-black rounded-2xl shadow-xl bg-primary transition-all 
      ease-linear hover:bg-[#526b2b] hover:text-white hover:scale-105 ${cssClass}`}
    >
      {label}
    </button>
  );
}

export default Button;
