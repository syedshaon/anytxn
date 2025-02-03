import React from "react";
import Image from "next/image";
import Phone from "../../../public/Assets/social/phone.webp";
import Mail from "../../../public/Assets/social/email.webp";
import LinkedIn from "../../../public/Assets/social/linkedin.webp";
import Logo from "../../../public/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="bg-[#002045] border-0">
        <div className="container flex items-center justify-between py-11">
          <a href="/en">
            <Image src={Logo} width="200" height="32" alt="AnyTech" />
          </a>
          <div className="hidden items-center text-[#00E9EA] lg:flex">
            <p className="border-r border-blue-dark px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold">Our Solutions</p>
            <ul className="flex items-center">
              <li>
                <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" href="/en/solutions/anycaas">
                  {" "}
                  AnyCaaS{" "}
                </a>
              </li>
              <li>
                <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" href="/en/solutions/anybaas">
                  {" "}
                  AnyBaaS{" "}
                </a>
              </li>
              <li>
                <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" href="/en/solutions/anypaas">
                  AnyPaaS
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 lg:hidden lg:gap-10">
            <a href="https://www.linkedin.com/company/anytxn" className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold">
              <Image src={LinkedIn} alt="LinkedIn" width={24} height={26} />
            </a>
            <a href="tel:+6590021890" className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold">
              <Image src={Phone} alt="Phone" width={24} height={26} />
            </a>
            <a href="mailto:enquiry@anytxn.com" className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold">
              <Image src={Mail} alt="Mail" width={24} height={26} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-blue-dark"></div>
      <div className="bg-[#00152D]">
        <div className="container flex flex-col items-center justify-between py-6 text-res-body-p2 text-blue-main lg:flex-row lg:text-body-p2">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-[14px] max-lg:mt-4">
            <div>
              <a className="transition-colors duration-300 hover:text-blue-highlight" href="/en/privacy-policy">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
