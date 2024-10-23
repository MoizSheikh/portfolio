import Button from "@/app/_components/Buttons/HomepageBtn";
import { GetStartedSvg, Personalized } from "@/app/_lib/assets/HomepageSVG";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="home-container py-4 lg:py-10 lg:mt-8 lg:mb-8 w-full bg-background text-center md:text-left flex items-center flex-col-reverse md:flex-row align-middle justify-start gap-14">
        <div className="w-full lg:w-7/12">
          <h1 className="text-3xl lg:text-5xl font-bold !leading-tight text-heading">
            Abdul Moiz Sheikh
          </h1>
          <div className="my-6 text-para w-full lg:w-4/5 font-light !leading-6">
            I am a dedicated software engineer with a focus on creating
            efficient and scalable web applications. With expertise in React,
            Next.js, and TypeScript, I thrive on solving complex challenges,
            optimising performance, and delivering intuitive user experiences.
            Whether it's building from scratch or improving legacy code, I
            ensure clean, maintainable, and future-proof solutions that align
            with business goals and user needs.
          </div>
          <div className="mt-10 flex flex-col md:flex-row gap-4 mx-auto justify-center md:justify-start items-center lg:items-start">
            <Button
              isPill={true}
              className="btn bg-primary text-white border-none font-medium w-3/5 lg:w-1/4 !h-10 min-h-10 flex space-around hover:bg-black"
            >
              <span>Get Started</span>
              <span className="mall">
                <GetStartedSvg />
              </span>
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <Personalized />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
