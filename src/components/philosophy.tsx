import React from "react";
import Image from "next/image";
import PhilosophyDesktop from "./philosophyDesktop";
import PhilosophyMobile from "./philosophyMobile";
import philosophyBg from "../../public/Assets/backgrounds/philosophy-bg.png";
import philosophysmbg from "../../public/Assets/backgrounds/philosophy-sm-bg.png";
import share from "../../public/Assets/backgrounds/share.svg";
import light from "../../public/Assets/backgrounds/light.png";
import processor from "../../public/Assets/backgrounds/processor.svg";

function Philosophy() {
  return (
    <>
      <section className="container md:mb-[128px]">
        <header className=" md:space-y-sm space-y-xs text-center">
          <h6 className=" lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">OUR PHILOSOPHY</h6>
          <h2 className=" whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">Human-centred innovation</h2>
        </header>
        <figure className="py-[32px]  ">
          <Image src={philosophysmbg} width="1710" height="1965" alt="Image" className="h-full w-full md:hidden" />

          <Image src={philosophyBg} alt="Image" className="h-full w-full hidden md:block" />
        </figure>
        <div className="hidden md:block">
          <PhilosophyDesktop />
        </div>

        <div className="md:hidden ">
          <PhilosophyMobile />
        </div>
      </section>
      <svg className="md:hidden max-h-[240px] md:my-sm my-lg w-full min-h-[60px]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" d="M-240 0L1680 0L-240 280L-240 0Z" fill="url(#paint0_linear_6055_471)"></path>
        <defs>
          <linearGradient id="paint0_linear_6055_471" x1="458.5" y1="1561.14" x2="392.705" y2="52.1879" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

export default Philosophy;
