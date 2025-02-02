import React from "react";
import FinanceRightArea from "@/components/BGs/financeRightArea";
function Finance() {
  return (
    <>
      <section className="container mt-[62px]">
        <section className="undefined grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
          <div className="md:space-y-sm space-y-xs">
            <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-[#1f80f0] font-Montserrat">POWERING THE FUTURE OF FINANCE</h6>
            <h2 className="undefined whitespace-pre-line font-Montserrat text-res-head-2 text-[#0b305b] lg:text-head-2">Uncovering new ways to delight customers</h2>
            <div className="!my-[65px] md:hidden block relative h-fit lg:text-clip">
              <FinanceRightArea />
            </div>
            <div className="lg:pt-2">
              <div>
                <div className="text-body-1">
                  <p>
                    <strong>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</strong>
                  </p>
                </div>
                <div className="text-body-1">
                  <p>
                    <br />
                    Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative h-fit lg:text-clip">
            <FinanceRightArea />
            <div />
          </div>
        </section>
      </section>
      <svg className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 280" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default Finance;
