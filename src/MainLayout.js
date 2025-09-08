import React from "react";
import Navbar from "./nav";
import HeroSection from "./hero";
import SubscribeSection from "./Newsletter";
import Footer from "./footer";


export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      < HeroSection/>
      <div>{children}</div>
      < SubscribeSection/>
      <Footer />
    </>
  );
}
