"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import Swiper JS

// import Swiper styles
import "swiper/css";

import share from "../../../public/Assets/backgrounds/share.png";
import light from "../../../public/Assets/backgrounds/light.png";
import processor from "../../../public/Assets/backgrounds/processor.png";

const innovations = [
  {
    img: share,
    title: "Full-suite solutions",
    text: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    img: light,
    title: "Simplify the complex",
    text: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    img: processor,
    title: "Cutting-edge tech",
    text: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

function PhilosophyMobile() {
  return (
    // <ul id="home-philosophies__card__container" className=" swiper     grid-cols-2 gap-[30px]">
    <Swiper
      slidesPerView={1.5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper2"
    >
      {innovations.map((innovation, index) => (
        <SwiperSlide key={index} className="swiper-slide translate-y-[20%]   z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm  ">
          <figure className="w-fit rounded-full  ">
            <Image src={innovation.img} alt={innovation.title} className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" />
          </figure>
          <h4 className=" font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">{innovation.title}</h4>
          <p className="text-body-1">{innovation.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PhilosophyMobile;
