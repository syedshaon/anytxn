import React from "react";
import Image from "next/image";
import background from "../../../public/Assets/backgrounds/background.svg";
import foreground from "../../../public/Assets/backgrounds/foreground.png";
import home from "../../../public/Assets/backgrounds/home.svg";
import stock from "../../../public/Assets/backgrounds/stock.svg";
import card from "../../../public/Assets/backgrounds/card.svg";
import financegirl from "../../../public/Assets/backgrounds/finance-girl.png";

function FinanceRightArea() {
  return (
    <>
      <figure className="w-[76%] mx-auto" style={{ boxShadow: "0px 23px 30px 0px #16437763" }}>
        <Image src={financegirl} width="1124" height="1364" alt="POWERING THE FUTURE OF FINANCE" className="object-cover w-full h-full" />
      </figure>
      <div>
        <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl figure5">
          <Image src={home} alt="anybass" width="116" height="115" className="object-contain w-full h-full" />
        </figure>
        <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl figure4">
          <Image src={stock} alt="anypass" width="89" height="88" className="object-contain w-full h-full" />
        </figure>
        <figure className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl figure3">
          <Image src={card} alt="anycaas" width="74" height="75" className="object-contain w-full h-full" />
        </figure>
      </div>
      <figure className="absolute inset-0 w-full h-full -z-10 figure6">
        <Image className="object-cover w-full h-full overflow-visible" src={background} alt="background frame" />
      </figure>
      <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%] figure7">
        <Image className="object-cover w-full h-full overflow-visible" src={foreground} alt="foreground frame" />
      </figure>
    </>
  );
}

export default FinanceRightArea;
