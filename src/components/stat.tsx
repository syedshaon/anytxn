"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CountUp from "react-countup";
// import Swiper styles
import "swiper/css";
const statNums = [
  {
    numStart: ">",
    num: 20,
    numEnd: "",
    text: "Years of Experience",
  },
  {
    numStart: "",
    num: 40,
    numEnd: "+",
    text: "Financial Institutions",
  },
  {
    numStart: ">",
    num: 200,
    numEnd: "m",
    text: "Customers Each",
  },
];

import client1 from "../../public/Assets/clients/client1.png";
import client2 from "../../public/Assets/clients/client2.png";
import client3 from "../../public/Assets/clients/client3.png";
import client4 from "../../public/Assets/clients/client4.png";
import client5 from "../../public/Assets/clients/client5.png";
import client6 from "../../public/Assets/clients/client6.png";
import client7 from "../../public/Assets/clients/client7.png";
import client8 from "../../public/Assets/clients/client8.png";
import client9 from "../../public/Assets/clients/client9.png";
import client10 from "../../public/Assets/clients/client10.png";
import client11 from "../../public/Assets/clients/client11.png";
import client12 from "../../public/Assets/clients/client12.png";
import client13 from "../../public/Assets/clients/client13.png";
import client14 from "../../public/Assets/clients/client14.png";
import client15 from "../../public/Assets/clients/client15.png";

const allClients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12, client13, client14, client15];

function Stats() {
  return (
    <section className="mb-sm">
      <div className="container">
        <h6 className="pb-lg text-center lg:pb-md lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">TRUSTED BY THE BEST</h6>
        <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28">
          {statNums.map((stat, index) => (
            <div key={index} className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
              <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-[#1f80f0] to-[#0057BB] text-transparent bg-clip-text">
                {stat.numStart}

                <CountUp end={stat.num} />
                {stat.numEnd}
              </h2>
              <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">{stat.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-xl grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5">
          {/* <picture style="display: flex; align-items: stretch; background-size: cover" class="object-contain"> */}
          {allClients.map((client, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image src={client} style={{ display: "flex", alignItems: "stretch", backgroundSize: "cover" }} alt="client" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-lg overflow-x-hidden md:hidden">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {allClients.map((client, index) => (
            <SwiperSlide key={index} className="swiper-slide mr-[32px] flex items-center my-auto !w-[170px] !h-auto">
              <figure className="w-fit rounded-full  ">
                <Image src={client} alt="client" className="h-full w-auto" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Stats;
