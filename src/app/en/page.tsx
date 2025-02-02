import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";

function page() {
  return (
    <div className=" min-h-screen w-full">
      <Header />
      <Hero />
      <div className="h-screen"></div>
    </div>
  );
}

export default page;
