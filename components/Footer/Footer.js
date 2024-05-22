import React from "react";

function Footer() {
  return (
    <div>
      <div className="text-center mb-1 font-bold">
        I Built this with Next.js & Tailwind, I am impatient to work on your
        projects
      </div>
      <footer className="py-5 text-sm md:text-base text-center border-t border-[#555555]">
        <div>
          Copyright &copy; 2024 <span className="ms-3 font-bold">Borel</span>
          <span className="ms-1 text-green-800 font-bold">T.G &#128512;</span> -
          All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default Footer;
