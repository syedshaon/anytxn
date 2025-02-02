"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import WaveLinesDesktop1 from "../../public/Assets/backgrounds/WaveLinesDesktop1.svg";
// import WaveLinesDesktop2 from "../../public/Assets/backgrounds/WaveLinesDesktop2.svg";
// import WaveLinesDesktop3 from "../../public/Assets/backgrounds/WaveLinesDesktop3.svg";
// import WaveLinesDesktop4 from "../../public/Assets/backgrounds/WaveLinesDesktop4.svg";
// import WaveLinesMobile1 from "../../public/Assets/backgrounds/WaveLinesMobile1.svg";
// import WaveLinesMobile2 from "../../public/Assets/backgrounds/WaveLinesMobile2.svg";
// import herobgsingle from "../../public/Assets/backgrounds/hero-bg-single.svg";
import HeroBgDesk from "./BGs/heroBgDesk";
import HeroBgMobile from "./BGs/heroBgMobile";

// import heroGirl from "../../public/Assets/backgrounds/hero-girl.avif";
import heroGirl from "../../public/Assets/backgrounds/hero-girl.jpg";

function Hero() {
  return (
    <>
      <section id="home-hero__content__container" className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white  lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]  ">
        <div className="container relative z-50 w-full h-full md:flex md:items-center md:justify-center pb-5  ">
          <div className="h-fit lg:flex-[65] xl:flex-[75]">
            <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
              <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white">Embrace the future of finance</h1>
              <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat">Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</h5>
            </header>

            <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
              <a className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main group/highlight" href="/en/contact-us">
                <span className="-translate-x-0 transition-transform group-hover/highlight:-translate-x-3">Reach Out to Us</span>
                <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="  translate-x-1 transition-transform group-hover/highlight:translate-x-3">
                  <path d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="h-fit hidden lg:block lg:flex-[65] xl:flex-[75] relative z-50">
          <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white">Embrace the future of finance</h1>
            <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat">Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</h5>
          </header>
          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
            <a className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main false" href="/en/contact-us">
              <span>Reach Out to Us</span>{" "}
              <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z" fill="white" />
              </svg>
            </a>
          </div>
        </div> */}

        <div className="hidden lg:block absolute z-0 top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none svelte-1lc7tvy">
          {/* <figure className="h-[115%] w-[115%] object-cover hero-figure  "> */}
          <motion.figure
            initial={{
              transform: "translate3d(12%, 0.002%, 0px)",
            }} // Start position off-screen right
            animate={{
              transform: "translate3d(0%, 0.002%, 0px)",
            }} // End position on-screen
            transition={{
              duration: 0.5, // Duration of the transition
              ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier timing function
              delay: 0.5, // Add delay
            }}
            style={{
              transform: "translate3d(12%, 0.002%, 0px)", // initial position
            }}
            className="h-[115%] w-[115%] object-cover"
          >
            <Image src={heroGirl} width={7952} height={5304} className="h-full w-full object-cover  " sizes="55vw" alt="background image" />
            {/* </figure> */}
          </motion.figure>
          <div className="gradient-overlay hero-bg" />
        </div>

        {/* <Image className="hidden lg:block absolute z-20 top-0 left-0   h-full w-full object-cover inset-0" src={herobgsingle} alt="background image" layout="fill" objectFit="cover" sizes="55vw" /> */}
        <HeroBgDesk />

        {/* <Image className="hidden lg:block absolute bottom-0 right-0     inset-0" src={WaveLinesDesktop1} alt="background image" sizes="55vw" /> */}
        {/* <Image className="hidden lg:block absolute h-full w-full object-cover inset-0" src={WaveLinesDesktop2} alt="background image" layout="fill" objectFit="cover" sizes="55vw" />
      <Image className="hidden lg:block absolute h-full w-full object-cover inset-0" src={WaveLinesDesktop3} alt="background image" layout="fill" objectFit="cover" sizes="55vw" />
      <Image className="hidden lg:block absolute h-full w-full object-cover inset-0" src={WaveLinesDesktop4} alt="background image" layout="fill" objectFit="cover" sizes="55vw" /> */}
        <HeroBgMobile />
      </section>
      <div className="block lg:hidden translate-y-[-20%] -mb-[10%]">
        <figure style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }} className="object-cover overflow-hidden">
          <Image src={heroGirl} width={7952} height={5304} className="h-full w-full object-cover scale-150" sizes="100vw" alt="background image" />
        </figure>{" "}
        <div className="gradient-overlay" />
      </div>
    </>
  );
}

export default Hero;
