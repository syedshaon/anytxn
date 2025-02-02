import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Finance from "@/components/finance";
import Philosophy from "@/components/philosophy";
import Technology from "@/components/technology";
import Stats from "@/components/stat";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

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
