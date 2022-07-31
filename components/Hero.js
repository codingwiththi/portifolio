import React, { useState } from "react";
import Image from "next/image";

import WomanImg from "../public/imgs/image-01.png";
function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center  lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full ">
        <div className="flex items-center h-full pt-8 ">
          <div className="flex-1 flex flex-col items-center lg:items-center ">
            <div className="ml-4 p-2 ">
              <p className="text-lg text-accent text-md mb-[22px] text-thi2">
                Hey, I'm Thiago! 👋
              </p>
              <h1 className="text-thi1 font-[satisfy] text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                I Build & Design <br />
                Beautifuls
                <br /> Web Systems.
              </h1>
              <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing illo ad
                labore dolor elit.
              </p>
              <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
                Work with me
              </button>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-center h-full">
            <Image
              src={WomanImg}
              alt=""
              layout="fixed"
              width={300}
              height={300}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
