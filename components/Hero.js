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
              <p className="text-lg text-accent text-md mb-[22px] text-thi5">
                Hey, I'm Thiago! 👋
              </p>
              <h1 className="text-thi5 font-[satisfy] text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
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
          <div className=" min-h-screen lg:flex flex-1 justify-center items-center  ">
            <div className="relative w-full max-w-lg px-16">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-thi3 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-10 w-72 h-72 bg-thi2 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              {/* <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-thi4 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-thi4 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="opacity-100">
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
