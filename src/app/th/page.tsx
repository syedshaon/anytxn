import React from "react";
import Header from "@/components/en/header";
import Hero from "@/components/en/hero";
import Finance from "@/components/en/finance";
import Philosophy from "@/components/en/philosophy";
import Technology from "@/components/en/technology";
import Stats from "@/components/en/stat";
import Contact from "@/components/en/contact";
import Footer from "@/components/en/footer";

function page() {
  return (
    <div className=" min-h-screen w-full">
      <Header />
      <Hero />
      <Finance />
      <Philosophy />
      <Technology />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
