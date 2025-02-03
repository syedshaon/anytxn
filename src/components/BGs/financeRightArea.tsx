"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import background from "../../../public/Assets/backgrounds/background.svg";
import foreground from "../../../public/Assets/backgrounds/foreground.png";
import home from "../../../public/Assets/backgrounds/home.svg";
import stock from "../../../public/Assets/backgrounds/stock.svg";
import card from "../../../public/Assets/backgrounds/card.svg";
import financegirl from "../../../public/Assets/backgrounds/finance-girl.png";

function FinanceRightArea() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // Reverse the movement (-50 to 50) so that it moves in the opposite direction of scroll
      const moveAmount = (0.5 - scrollY / maxScroll) * 100;
      setOffsetY(moveAmount);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <figure className="w-[76%] mx-auto" style={{ boxShadow: "0px 23px 30px 0px #16437763" }}>
        <Image src={financegirl} width="1124" height="1364" alt="POWERING THE FUTURE OF FINANCE" className="object-cover w-full h-full" />
      </figure>
      <div>
        <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl   animate-[upDown3_3s_ease-in-out_infinite]">
          <Image src={home} alt="anybass" width="116" height="115" className="object-contain w-full h-full" />
        </figure>
        <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl  animate-[upDown2_3s_ease-in-out_infinite]">
          <Image src={stock} alt="anypass" width="89" height="88" className="object-contain w-full h-full" />
        </figure>
        <figure className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl   animate-[upDown1_3s_ease-in-out_infinite]">
          <Image src={card} alt="anycaas" width="74" height="75" className="object-contain w-full h-full" />
        </figure>
      </div>
      <figure
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.1s linear", // Smooth movement
        }}
        className="absolute inset-0 w-full h-full -z-10 "
      >
        <Image className="object-cover w-full h-full overflow-visible" src={background} alt="background frame" />
      </figure>
      <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%] ">
        <Image className="object-cover w-full h-full overflow-visible" src={foreground} alt="foreground frame" />
      </figure>
    </>
  );
}

export default FinanceRightArea;
