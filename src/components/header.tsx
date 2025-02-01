"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo.svg";
import ChevronRight from "../../public/Assets/icons/ChevronRight.svg";
import ChevronRightIcon from "./icons/chevronRightIcon";
import Globe from "../../public/globe.svg";
import Hamburger from "../../public/Assets/icons/hamburger.svg";

const Solutions = [
  {
    title: "AnyCaaS",
    link: "/en/solutions/anycaas",
  },
  {
    title: "AnyBaaS",
    link: "/en/solutions/anybaas",
  },
  {
    title: "AnyPaaS",
    link: "/en/solutions/anypaas",
  },
];

const Languages = [
  {
    title: "EN (English)",
    link: "/en",
    short: "EN",
  },
  {
    title: "TH (Thai)",
    link: "/th",
    short: "TH",
  },
  {
    title: "ID (Bahasa Indonesia)",
    link: "/id",
    short: "ID",
  },
  {
    title: "TW (Traditional Chinese)",
    link: "/tw",
    short: "TW",
  },
];

function Header() {
  const [showLangs, setShowLangs] = useState(false);
  const [showMobileLangs, setShowMobileLangs] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <header className=" bg-transparent text-white max-lg:bg-blue-main max-lg:py-8 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999]  ">
      <div id="main-navigation" className="relative z-[9999]">
        <div className="container flex items-center flex-wrap justify-between">
          <h1>
            <Link href="/en" passHref aria-label="Go to home page" rel="home" className="cursor-pointer">
              <Image src={Logo} alt="AnyTech" width={200} height={32} className="w-[134px] h-auto object-contain lg:w-[170px]" />
            </Link>
          </h1>
          <div className="flex items-center">
            <nav className="desktop-menu max-lg:hidden" aria-label="Main navigation desktop">
              <ul className="flex">
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer !border-none">
                  <span className="flex items-center justify-between">
                    <span>Solutions</span>

                    <ChevronRightIcon className="ml-2 mt-1 rotate-90 transform fill-white" />
                  </span>
                  <span className="lg:absolute lg:top-full lg:bg-white lg:w-[240px] relative shadow-menu lg:text-blue-text   rounded-xs hidden lg:group-hover:block">
                    <ul className="flex flex-col relative lg:-mt-[1px] max-lg:mt-6">
                      {Solutions.map((solution) => (
                        <li key={solution.title} className="lg:border-t border-blue-light whitespace-nowrap first:border-none">
                          <Link href={solution.link} passHref className="lg:hover:text-[#1f80f0] hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block">
                            <span className="flex res-body-p0 lg:text-body-p1">
                              <ChevronRightIcon className="w-2 -rotate-90 fill-white mr-2 mt-2 lg:hidden" />
                              {solution.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                  <span className="flex items-center justify-between">
                    <a href="/en/services">Services</a>{" "}
                  </span>
                </li>
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                  <span className="flex items-center justify-between">
                    <a href="/en/about-us">About Us</a>{" "}
                  </span>
                </li>{" "}
                <div className="ml-6 my-auto  ">
                  <div className="relative lg:block hidden">
                    <button onClick={() => setShowLangs(!showLangs)} className="rounded-[132px] flex items-center justify-center space-x-[8px] border px-[28px] py-[8px] lg:text-body-p1 text-res-body-p0 text-white border-white  ">
                      <Image src={Globe} alt="Globe" width={12} height={13} className="  fill-white" />
                      <span className="uppercase">en</span>

                      <div className="relative">
                        <ChevronRightIcon className={`ml-2 mt-1 fill-white transform transition-transform duration-200   ${showLangs ? "-rotate-90" : "rotate-90"}`} />
                      </div>
                    </button>
                  </div>
                  <span className={`lg:absolute lg:top-full lg:bg-white lg:w-[240px] relative shadow-menu lg:text-blue-text   rounded-xs hidden  ${showLangs ? "lg:block" : "lg:hidden"}`}>
                    <ul className="flex flex-col relative lg:-mt-[1px] max-lg:mt-6">
                      {Languages.map((lang) => (
                        <li key={lang.title} className="lg:border-t border-blue-light whitespace-nowrap first:border-none">
                          <Link href={lang.link} passHref className="lg:hover:text-[#1f80f0] hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block">
                            <span className="flex res-body-p0 lg:text-body-p1">
                              <ChevronRightIcon className="w-2 -rotate-90 fill-white mr-2 mt-2 lg:hidden" />

                              {lang.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </span>
                </div>
              </ul>
            </nav>
            {!showMobileNav && (
              <button onClick={() => setShowMobileNav(true)} className="cursor-pointer lg:hidden">
                <svg className="fill-white" width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2C0 0.895431 0.895431 0 2 0H18V2H0Z" />
                  <rect y={7} width={18} height={2} />
                  <path d="M0 14H18V16H2C0.89543 16 0 15.1046 0 14Z" />
                </svg>
              </button>
            )}

            {showMobileNav && (
              <button onClick={() => setShowMobileNav(false)} className="cursor-pointer lg:hidden">
                <svg className="fill-white" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.41401 6.99998L13.707 1.70695C14.098 1.31695 14.098 0.683006 13.707 0.293006C13.316 -0.0979941 12.684 -0.0979941 12.293 0.293006L7.00001 5.58597L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.683006 -0.0979941 1.31695 0.293006 1.70695L5.58601 6.99998L0.293006 12.293C-0.0979941 12.683 -0.0979941 13.3169 0.293006 13.7069C0.488006 13.9019 0.744007 14 1.00001 14C1.25601 14 1.51201 13.9019 1.70701 13.7069L7.00001 8.41398L12.293 13.7069C12.488 13.9019 12.744 14 13 14C13.256 14 13.512 13.9019 13.707 13.7069C14.098 13.3169 14.098 12.683 13.707 12.293L8.41401 6.99998Z" />
                </svg>
              </button>
            )}
          </div>
          <Link href="/en/contact-us" passHref aria-label="Contact Us" className="border border-white bg-transparent hover:bg-white hover:text-[#1f80f0] hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs">
            Contact Us
            {/* <Image src={ChevronRight} alt="Chevron Right" width={7} height={11} className="fill-white hover:fill-[#1f80f0]  translate-x-3.5 transition-transform group-hover/highlight:translate-x-5" /> */}
            <ChevronRightIcon className="fill-white hover:fill-[#1f80f0]  translate-x-3.5 transition-transform group-hover/highlight:translate-x-5" />
          </Link>
        </div>
        {/* 
        
                #
                        #
                                #
                                        #
                                                #
                                                        #

   
        #         #     Mobile Navigation
        
        
                  #
                        #
                                #
                                        #
                                                #
                                                        #
        
         
        
        
        */}
        {showMobileNav && (
          <nav className="absolute top-[calc(95%_+_2rem)] bg-[#1B76E9] lg:hidden transition-transform w-full inset-x-0 py-8   px-[1.938rem] translate-x-0">
            <ul className="flex items-center flex-col space-y-8">
              <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer !border-none">
                <span className="flex items-center justify-between" onClick={() => setShowSolutions(!showSolutions)}>
                  <span>Solutions</span>

                  <ChevronRightIcon className={`ml-2 mt-1 fill-white  ${showSolutions ? "max-lg:-rotate-90" : "max-lg:rotate-90"}`} />
                </span>
                {showSolutions && (
                  <span className="lg:absolute lg:top-full lg:bg-white lg:w-[240px] relative shadow-menu lg:text-blue-text rounded-xs lg:group-hover:block">
                    <ul className="flex flex-col relative lg:-mt-[1px] max-lg:mt-6">
                      {Solutions.map((solution) => (
                        <li key={solution.title} className="lg:border-t border-blue-light whitespace-nowrap first:border-none">
                          <Link href={solution.link} passHref className="  py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block">
                            <span className="flex res-body-p0 lg:text-body-p1">
                              <ChevronRightIcon className="w-2    fill-white mr-2 mt-[7px] lg:hidden" />
                              {solution.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </span>
                )}
              </li>
              <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                <span className="flex items-center justify-between">
                  <Link href="/en/services" passHref>
                    Services
                  </Link>
                </span>
              </li>
              <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                <span className="flex items-center justify-between">
                  <Link href="/en/about-us" passHref>
                    About Us
                  </Link>
                </span>
              </li>{" "}
              <div className="ml-6 my-auto">
                <div className="relative lg:block hidden">
                  <button className="rounded-[132px] flex items-center justify-center space-x-[8px] border px-[28px] py-[8px] lg:text-body-p1 text-res-body-p0 text-white border-white">
                    <Image src={Globe} alt="Globe" width={12} height={13} className="  fill-white" />

                    <span className="uppercase">en</span>
                    <Image src={ChevronRight} alt="Chevron Right" width={9} height={6} className="ml-2 mt-1 fill-white  rotate-90 transition-transform duration-200" />
                  </button>
                </div>{" "}
                <div className="lg:hidden block w-full group/highlight">
                  <div className="w-full   py-[8px] text-res-body-p1 text-white  transition-all duration-75">
                    <button onClick={() => setShowMobileLangs(!showMobileLangs)} className="flex justify-center items-center space-x-[8px] w-full">
                      <div className="flex-1 flex space-x-2 items-center">
                        <Image src={Globe} alt="Globe" width={12} height={13} className="fill-white" />
                        <span className="uppercase">English</span>
                      </div>
                      <ChevronRightIcon className={`fill-white ${showMobileLangs ? "-rotate-90" : "rotate-90"}  translate-x-3.5 transition-transform group-hover/highlight:translate-x-5`} />
                    </button>
                    {showMobileLangs && (
                      <span className="lg:absolute lg:top-full lg:bg-white lg:w-[240px] relative shadow-menu lg:text-blue-text rounded-xs lg:group-hover:block">
                        <ul className="flex flex-col relative lg:-mt-[1px] max-lg:mt-2">
                          {Languages.map((lang) => (
                            <li key={lang.title} className="lg:border-t border-blue-light whitespace-nowrap first:border-none">
                              <Link href={lang.link} passHref className="lg:hover:text-[#1f80f0] hover:transition-colors duration-200 py-1 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block">
                                <span className="flex res-body-p0 lg:text-body-p1">
                                  <ChevronRightIcon className="w-2    fill-white mr-2 mt-2 lg:hidden" />
                                  {lang.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ul>

            <Link href="/en/contact-us" passHref aria-label="Contact Us" className="border border-white bg-transparent  max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs !flex">
              Contact Us
              <ChevronRightIcon className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
