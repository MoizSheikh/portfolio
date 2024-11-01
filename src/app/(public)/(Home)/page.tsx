"use client";
import {
  Personalized,
  Step1svg,
  GetStartedSvg,
  Step2svg,
  Step3svg,
  Linkdinsvg,
  Commasvg,
  CheckMarkSvg,
  Icon1Svg,
  Icon2Svg,
  Icon3Svg,
  Icon4Svg,
  Icon5Svg,
  PersonalizedCommunicationSvg,
  Benefit1Svg,
  Benefit2Svg,
  Benefit3Svg,
  Benefit4Svg,
  Benefit5Svg,
  Benefit6Svg,
} from "@/app/_lib/assets/HomepageSVG";
import Button from "@/app/_components/Buttons/HomepageBtn";
import Image from "next/image";
import Testimonial from "./_components/Testimonial";
import FAQSection from "./_components/Faq";
import PricingPlans from "./_components/PricingPlans";
import SkillsSection from "./_components/SkillsSection";
import ColorToggle from "@/app/_components/ColorToggle/ColorToggle";
import { ThemeProvider } from "@/app/_lib/context/ThemeController";
import Projects from "./_components/Projects";
import Journey from "./_components/Journey";
import { scroll, useScroll } from "framer-motion";
import HeroSection from "./_components/HeroSection";
import AboutMe from "./_components/AboutMe";
import { NameHero } from "./_components/NameHero/NameHero";

const Home = () => {
  // useScroll(progress => console.log(progress))
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background z-0">
        <div className=" w-full m-auto text-center md:text-left text-para z-20 relative ">
          <ColorToggle />
          <div className=" pb-8">
            <NameHero />
            Aͣb͔͑d̠ͅu̇̾͘l̍ͮ͠ ̗̭̞͂M̸̧͗̀őͧ̂͘ì̶̱͇z̵͕̈̾ ̝̰̝ͨS̡̠͂h̩ͤͮę̗i̯͋k͆hͧ
            <HeroSection />
            <SkillsSection />
            <Projects />
            <Journey />
            {/*Hear from the people // future goals // You came
            all the way, Thanks Contact me */}
          </div>

          {/* Personalized Communication */}
          <section className="homepPageFullCard home-container py-4 lg:py-10 text-center md:text-left flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
            <div className="w-10/12 md:w-5/12">
              <PersonalizedCommunicationSvg />
            </div>
            <div className="text-left lg:ml-16 flex flex-col items-center lg:items-start mt-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-primary text-center lg:text-left">
                Empowering Better Communication Through Personalization
              </h1>
              <p className="text-gray-500 max-w-2xl my-7 text-center lg:text-left text-sm">
                Founded by a team of communication experts and AI enthusiasts,
                we recognized the need for a tool that makes it easy for people
                to express their needs and preferences in a clear and structured
                way. By leveraging the power of AI, we've created a platform
                that takes the complexity out of this process, making it
                accessible and effective for everyone.
              </p>
              <Button
                isPill={true}
                className="btn text-white border-none w-5/6 lg:w-1/4 text-base font-semibold min-h-10 h-10 hover:bg-black"
              >
                Make My Manual
              </Button>
            </div>
          </section>

          <div className=" pb-6 lg:pb-20 ">
            {/* <PricingPlans /> */}
          </div>

          <Testimonial />
          <div className="thirdSection">
            {/* <FAQSection /> */}
            <AboutMe />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
