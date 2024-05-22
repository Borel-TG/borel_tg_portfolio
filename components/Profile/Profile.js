import React from "react";
import Image from "next/image";
import Link from "next/link";

function Profile() {
  return (
    <div className="">
      <div className="group groupi relative min-h-fit w-fit cursor-pointer">
        <div
          className={`relative rounded-xl after:absolute inset-0
       after:h-[100%] after:w-[100%] after:rounded-xl after:bg-primary
       after:top-5 after:-left-3 md:before:top-10 md:before:-left-14 lg:after:top-14 lg:after:-left-20 
       after:transition-all after:ease-in-out group-hover:after:rotate-2`}
          style={{ perspective: 1000 }}
        >
          {/* <div className="top-5 h-[100%] bg-black w-[100%]"></div> */}
          <Image
            className={`relative rounded-xl transition-all ease-in-out
          effecto`}
            src={"/borellio.jpeg"}
            alt="Borel-tchassem-profile-image"
            width={400}
            height={300}
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="flex gap-5 justify-center mt-[80px]">
        <div className="text-center">
          <Link href={"https://www.linkedin.com/in/borel-tchassem/"}>
            <div className="p-2 h-[52px] w-[52px] block bg-white border-2 border-primary transition-all rounded-full hover:scale-110">
              <Image
                src={"/linkedin.png"}
                width={32}
                height={32}
                alt="social-icon"
              />
            </div>
            <span>LinkedIn</span>
          </Link>
        </div>
        <div className="text-center">
          <Link href={"https://github.com/borel-T"}>
            <div className="p-2 h-[52px] w-[52px] block bg-white border-2 border-primary transition-all rounded-full hover:scale-110">
              <Image
                src={"/github.png"}
                width={32}
                height={32}
                alt="social-icon"
              />
            </div>
            <span>Github</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
