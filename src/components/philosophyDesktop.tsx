import React from "react";
import Image from "next/image";
import share from "../../public/Assets/backgrounds/share.svg";
import light from "../../public/Assets/backgrounds/light.png";
import processor from "../../public/Assets/backgrounds/processor.svg";

function PhilosophyDesktop() {
  return (
    <ul id="home-philosophies__card__container" className="   md:grid lg:grid-cols-3 grid-cols-2 gap-[30px]">
      <li className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm liAnim1">
        <figure className="w-fit rounded-full  ">
          <Image src={share} alt="Full suite solutions" className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" />
        </figure>
        <h4 className=" font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">Full-suite solutions</h4>
        <p className="text-body-1">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
      </li>
      <li className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm liAnim2">
        <figure className="w-fit rounded-full">
          <Image src={light} alt="Simplify the complex" className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" />
        </figure>
        <h4 className=" font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">Simplify the complex</h4>
        <p className="text-body-1">Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.</p>
      </li>
      <li className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm liAnim3">
        <figure className="w-fit rounded-full">
          <Image src={processor} alt="Cutting-edge tech" className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" />
        </figure>
        <h4 className=" font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">Cutting-edge tech</h4>
        <p className="text-body-1">We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.</p>
      </li>
    </ul>
  );
}

export default PhilosophyDesktop;
