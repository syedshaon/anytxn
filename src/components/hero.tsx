import React from "react";

function Hero() {
  return (
    <section id="home-hero__content__container" className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] svelte-n9olsd">
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
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
    </section>
  );
}

export default Hero;
