"use client";
import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHome from "./HeroAreaHome";
import BrandAreaHomeOne from "./BrandAreaHomeOne";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import MarqueeAreaHomeOne from "./MarqueeAreaHomeOne";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import PortfolioAreaHomeOne from "./PortfolioAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import ContactAreaHomeOne from "./ContactAreaHomeOne";
import FAQAreaHomeOne from "./FAQAreaHomeOne";
import PartnerAreaHomeOne from "./PartnerAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ServiceHeroAreaHomeOne from "./ServiceHeroAreaHomeOne";
import MyWorkShopTrainingHomeOne from "./MyWorkShopTrainingHomeOne";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <div
        id="smooth-wrapper"
        className="tp-page-wrapper theme-bg"
        style={{ backgroundImage: `url(/assets/img/bg/distort-bg.png)` }}
      >
        <div id="smooth-content">
          <main>
            <HeroAreaHome />
            <ServiceAreaHomeOne />
            <MarqueeAreaHomeOne />
            <AboutAreaHomeOne />
            {/* <HeroAreaHomeTwo /> */}
            {/* <MyWorkShopTrainingHomeOne /> */}
            {/* <PortfolioAreaHomeOne /> */}
            {/* <SkillAreaHomeOne /> */}
            <ServiceHeroAreaHomeOne />
            <PartnerAreaHomeOne />
            <TestimonialAreaHomeOne />
            <ContactAreaHomeOne />
            <FAQAreaHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
