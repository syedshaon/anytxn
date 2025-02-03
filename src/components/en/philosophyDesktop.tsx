"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
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
function PhilosophyDesktop() {
  return (
    <ul id="home-philosophies__card__container" className="   md:grid lg:grid-cols-3 grid-cols-2 gap-[30px]">
      {innovations.map((innovation, index) => (
        <motion.li
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
          key={index}
          className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm  "
        >
          <figure className="w-fit rounded-full  ">
            <Image src={innovation.img} alt={innovation.title} className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" />
          </figure>
          <h4 className=" font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">{innovation.title}</h4>
          <p className="text-body-1">{innovation.text}</p>
        </motion.li>
      ))}
    </ul>
  );
}

export default PhilosophyDesktop;
