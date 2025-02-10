"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "About-me",
    url: "/",
  },
  {
    label: "Experience",
    url: "#experience",
  },
  {
    label: "Projects",
    url: "#projects",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

function Navbar() {
  useEffect(() => {
    try {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Expands the app to full screen

      console.log(tg.initDataUnsafe); // User info
    } catch (error) {
      console.log("failed to get TG user details");
    }

    window.addEventListener("scroll", stickMe);
    return () => {
      window.removeEventListener("scroll", stickMe);
    };
  }, []);

  const stickMe = () => {
    return null;
    // COMMENT : removed because it lags
    // let navbar = document.getElementById("nav-wrapper");
    // let offset = navbar.offsetTop;
    // if (window.scrollY >= offset) {
    //   navbar.classList.add("sticky");
    // } else {
    //   navbar.classList.remove("sticky");
    // }
  };

  return (
    <div
      className="bg-[#525252] shadow-xl sticky sticky:bg-red-500 top-0  z-50"
      id="nav-wrapper"
    >
      <nav className="container mx-auto p-3 rounded-xl flex gap-5 items-center">
        <div className="flex-2">
          <Link
            href={"/"}
            className="font-bold text-primary text-xl md:text-3xl"
          >
            Borel <span className="text-white">T.G</span>
          </Link>
        </div>
        <div className="hidden md:block flex-1 text-center align-center">
          {links.map((item, key) => (
            <NavLink
              key={key}
              href={item.url}
              className="text-white text-base mx-5 active:font-bold transition ease-linear active:text-primary hover:text-primary"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex-2 ml-auto md:ml-0">
          <Button
            type="link"
            label="Let's Talk"
            href={"https://wa.me/79175766653"}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

function NavLink({ className, ...props }) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={`${className} ${pathname == props.href ? "text-primary" : ""}`}
    />
  );
}
