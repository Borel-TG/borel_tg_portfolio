import React from "react";
import Image from "next/image";

import Link from "next/link";

function SocialLinks() {
  const list = [
    {
      url: "mailto:tchassemborel@gmail.com",
      icon: "/gmail.png",
    },
    {
      url: "https://www.linkedin.com/in/borel-tchassem/",
      icon: "/linkedin.png",
    },
    {
      url: "https://github.com/borel-T",
      icon: "/github.png",
    },
  ];

  return (
    <>
      <div className="z-10 mt-5 inline-flex flex-row gap-3 cursor-pointer">
        {list.map((item, key) => (
          <div
            key={key}
            className="p-2 border rounded-lg border-gray-400 transition ease-in-out hover:border-primary hover:scale-105"
          >
            <Link href={item.url}>
              <Image src={item.icon} height={25} width={25} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default SocialLinks;
