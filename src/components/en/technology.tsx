"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import slide1 from "../../../public/Assets/Slider/slide1.jpg";
import slide2 from "../../../public/Assets/Slider/slide2.jpg";
import slide3 from "../../../public/Assets/Slider/slide3.png";
import slide4 from "../../../public/Assets/Slider/slide4.jpg";

import { Swiper as SwiperType } from "swiper";
const Slides = [
  {
    title: "Customer focused",
    subtitle: "Purpose-built financial services",
    description: "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2: "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image: slide1,
  },
  {
    title: "Agile and adaptable",
    subtitle: "Agile and adaptable for growth",
    description: "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2: "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: slide2,
  },
  {
    title: "Compliance ready",
    subtitle: "Manage compliance with ease",
    description: "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    description2: "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image: slide3,
  },
  {
    title: "Secure and safe",
    subtitle: "Highly secure and safe",
    description: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    description2: "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image: slide4,
  },
];

function Technology() {
  const swiperRef = useRef<SwiperType | null>(null); // Store Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  return (
    <>
      <section className="container">
        <header className="md:space-y-sm space-y-xs text-center">
          <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">TECHNOLOGY BUILT FOR YOU</h6>
          <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">The future of finance</h2>
        </header>

        {/* Buttons to change slides */}
        <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]">
          {Slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => {
                swiperRef.current?.slideTo(index);
                setActiveIndex(index); // Update active index
              }}
              className={`lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 text-blue-main
              ${activeIndex === index ? "bg-[#b9d9ff] " : " hover:bg-[#F5FAFF]"}`}
            >
              {slide.title}
            </button>
          ))}
        </div>

        {/* Swiper */}
        <div id="home-technology__carousel__container" className="relative">
          <div
            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events max-md:mt-[24px] swiper-backface-hidden"
            style={{
              filter: "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
            }}
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[Autoplay, Pagination]}
              className="technologySwiper"
            >
              {Slides.map((slide, index) => (
                <SwiperSlide key={index} style={{ width: 914, marginRight: 50 }}>
                  <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
                    <section className="lg:space-y-md space-y-sm">
                      <header className="lg:space-y-md space-y-xs">
                        <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">{slide.title}</h6>
                        <h3 className="text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">{slide.subtitle}</h3>
                      </header>
                      <figure className="md:hidden h-[150px]">
                        <Image width={3672} height={2712} src={slide.image} alt={slide.title} className="h-full w-full   object-cover object-left-top   rounded-[8px]" />
                      </figure>
                      <div>
                        <div className="text-body-1">
                          <p>
                            <strong>{slide.description}</strong>
                          </p>
                        </div>
                        <div className="text-body-1">
                          <p>
                            <br />
                            {slide.description2}
                          </p>
                        </div>
                      </div>
                    </section>
                    <figure className="hidden md:block h-[425px]">
                      <Image width={3672} height={2712} src={slide.image} alt={slide.title} className="h-full w-full object-cover rounded-[16px]" />
                    </figure>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <svg className=" mt-10  max-h-[240px] md:my-sm my-lg w-full min-h-[60px]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 280" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default Technology;
