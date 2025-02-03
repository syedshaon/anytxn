"use client";

import React from "react";
import { motion } from "framer-motion";

function HeroBgMobile() {
  return (
    <svg className="lg:hidden absolute top-0 left-0 w-[110%] h-[65%] object-cover" preserveAspectRatio="xMidYMid slice" viewBox="0 0 797 645" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="hero-background-mobile">
        <motion.g id="dark" initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1, ease: "linear" }}>
          <g id="Group" style={{ mixBlendMode: "multiply" }}>
            <path id="Vector" d="M797 437.791V345L497 645H589.791L797 437.791Z" fill="url(#paint0_linear_6_180)" />
          </g>
          <g id="Group_2" style={{ mixBlendMode: "multiply" }}>
            <path id="Vector_2" d="M409.788 305V109.212L0 519.004H195.789L409.788 305Z" fill="url(#paint1_linear_6_180)" />
          </g>
          <g id="Group_3" style={{ mixBlendMode: "multiply" }}>
            <path id="Vector_3" d="M684 365.595V0L39 644.991H404.596L684 365.595Z" fill="url(#paint2_linear_6_180)" />
          </g>
        </motion.g>
        <motion.g id="light" clipPath="url(#clip0_6_180)" initial={{ x: 150 }} animate={{ x: 0 }} transition={{ duration: 1, ease: "linear" }}>
          <g id="Group_4" filter="url(#filter0_f_6_180)">
            <path id="Vector_4" d="M684 272.067V200L451 433H523.068L684 272.067Z" fill="url(#paint3_linear_6_180)" />
          </g>
          <g id="Group_5" filter="url(#filter1_f_6_180)">
            <path id="Vector_5" d="M706.1 69L485 290.1H500.8L706.1 84.8V69Z" fill="url(#paint4_linear_6_180)" />
          </g>
          <g id="Group_6" filter="url(#filter2_f_6_180)">
            <path id="Vector_6" d="M111 313H284L111 486V313Z" fill="url(#paint5_linear_6_180)" />
            <path id="Vector_7" d="M111 313H284L111 486V313Z" fill="url(#paint6_linear_6_180)" />
          </g>
        </motion.g>
      </g>
      <defs>
        <filter id="filter0_f_6_180" x={420} y={169} width={295} height={295} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="15.5" result="effect1_foregroundBlur_6_180" />
        </filter>
        <filter id="filter1_f_6_180" x={473} y={57} width="245.1" height="245.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={6} result="effect1_foregroundBlur_6_180" />
        </filter>
        <filter id="filter2_f_6_180" x={78} y={280} width={239} height={239} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="16.5" result="effect1_foregroundBlur_6_180" />
        </filter>
        <linearGradient id="paint0_linear_6_180" x1={366} y1={923} x2={707} y2="519.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0" />
          <stop offset={1} stopColor="#0059BF" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint1_linear_6_180" x1="-276.407" y1="1105.58" x2="443.103" y2="254.197" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0" />
          <stop offset={1} stopColor="#0059BF" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint2_linear_6_180" x1="971.501" y1={1062} x2={401} y2="388.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0" />
          <stop offset={1} stopColor="#0059BF" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint3_linear_6_180" x1="408.636" y1="452.001" x2="678.393" y2="221.805" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA" />
          <stop offset={1} stopColor="#1F80F0" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint4_linear_6_180" x1="444.8" y1="308.131" x2="700.779" y2="89.6911" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA" />
          <stop offset={1} stopColor="#1F80F0" stopOpacity="0.49" />
        </linearGradient>
        <linearGradient id="paint5_linear_6_180" x1={111} y1="399.15" x2={284} y2="399.15" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset={1} stopColor="#4B4B4B" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint6_linear_6_180" x1="6.9711" y1="513.992" x2="251.76" y2="258.952" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA" />
          <stop offset={1} stopColor="#1F80F0" />
        </linearGradient>
        <clipPath id="clip0_6_180">
          <rect width={641} height={462} fill="white" transform="translate(78 57)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HeroBgMobile;
