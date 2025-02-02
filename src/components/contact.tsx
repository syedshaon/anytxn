import React from "react";
import FooterSvg1 from "./BGs/footerSvg1";
import FooterSvg2 from "./BGs/footerSvg2";
import FooterSvg3 from "./BGs/footerSvg3";

function Contact() {
  return (
    <section id="common-cta_container" className="relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden bg-[url('/backgrounds/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover md:z-20 z-0  ">
      <div className="container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6">
        <h2 className="font-Montserrat text-res-head-2 text-white lg:text-head-2 font-semibold mb-[24px]">Legacy no longer</h2>
        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">Talk to us to find out how we can transform your organisation for the future</p>
        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
          <a className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main false" href="/en/contact-us">
            <span className="contactUsAnim">Contact Us</span>
            <FooterSvg1 />
          </a>
        </div>
      </div>
      <FooterSvg2 />
      <FooterSvg3 />
    </section>
  );
}

export default Contact;
