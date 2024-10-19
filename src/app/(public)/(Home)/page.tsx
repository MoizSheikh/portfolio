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

const Home = () => {
  // useScroll(progress => console.log(progress))
  return (
    <ThemeProvider>
      
      <div className="min-h-screen bg-background z-0">
        <div className=" w-full m-auto text-center md:text-left text-para z-20 relative ">
          <ColorToggle />
          <div className="firstSection pb-8">
            {/* Hero Section */}
            <section className="home-container py-4 lg:py-10 lg:mt-8 lg:mb-8 w-full bg-background text-center md:text-left flex items-center flex-col-reverse md:flex-row align-middle justify-start gap-14">
              <div className="w-full lg:w-7/12">
                <h1 className="text-3xl lg:text-5xl font-bold !leading-tight text-heading">
                  Abdul Moiz Sheikh
                </h1>
                <div className="my-6 text-para w-full lg:w-4/5 font-light !leading-6">
                  I am a dedicated software engineer with a focus on creating
                  efficient and scalable web applications. With expertise in
                  React, Next.js, and TypeScript, I thrive on solving complex
                  challenges, optimising performance, and delivering intuitive
                  user experiences. Whether it's building from scratch or
                  improving legacy code, I ensure clean, maintainable, and
                  future-proof solutions that align with business goals and user
                  needs.
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
                  <Button
                    isPill={true}
                    className="border-none font-normal w-3/5 lg:w-1/4 text-primary bg-[#D7E5E7] !h-10 min-h-10 hover:text-white"
                    defaultColor={true}
                    redirectsTo={"/examples"}
                  >
                    View Samples
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-5/12">
                <Personalized />
              </div>
            </section>
            <SkillsSection />
            <Journey />
            <Projects />
             {/* My journey{"\n"}// Hear from the people // future goals // You came
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
                className="btn text-white bg-primary border-none w-5/6 lg:w-1/4 text-base font-semibold min-h-10 h-10 hover:bg-black"
              >
                Make My Manual
              </Button>
            </div>
          </section>

          <div className="secondSection pb-6 lg:pb-20 ">
            {/* Pricing Plans */}
            <PricingPlans />

            {/* Benefits Section */}
            <section className="home-container py-4 lg:py-8 text-center">
              <h2 className="text-4xl font-bold">Benefits of Align</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center md:text-left">
                <div className="w-full rounded shadow-lighter p-6 mx-auto flex flex-col justify-center items-center lg:items-start bg-white">
                  <Benefit1Svg />
                  <h3 className="text-2xl font-bold mt-2">Personalized</h3>
                  <p className="mt-2 text-gray-500 font-light text-sm">
                    No two manuals are the same – yours will be tailored to your
                    unique needs.
                  </p>
                </div>
                <div className="w-full rounded shadow-lighter p-6 mx-auto flex flex-col justify-center items-center lg:items-start bg-white">
                  <Benefit2Svg />
                  <h3 className="text-2xl font-bold mt-2">
                    Innovative Technology
                  </h3>
                  <p className="mt-2 text-gray-500 font-light text-sm">
                    We use advanced AI to create accurate manuals that also
                    reflect your personal style.
                  </p>
                </div>
                <div className="w-full rounded shadow-lighter p-6 mx-auto flex flex-col justify-center items-center lg:items-start bg-white">
                  <Benefit3Svg />
                  <h3 className="text-2xl font-bold mt-2">
                    Custom Tone & Style
                  </h3>
                  <p className="mt-2 text-gray-500 font-light text-sm">
                    Choose the tone for your manual, whether you want it to be
                    formal, casual or empathetic.
                  </p>
                </div>
                <div className="w-full rounded shadow-lighter p-6 mx-auto flex flex-col justify-center items-center lg:items-start bg-white">
                  <Benefit4Svg />
                  <h3 className="text-2xl font-bold mt-2">User-Friendly</h3>
                  <p className="mt-2 text-gray-500 font-light text-sm">
                    Align is designed to be intuitive, making creating your
                    manual quick and easy.
                  </p>
                </div>
                <div className="w-full rounded shadow-lighter p-6 mx-auto flex flex-col justify-center items-center lg:items-start bg-white">
                  <Benefit5Svg />
                  <h3 className="text-2xl font-bold mt-2">
                    Professional & Personal
                  </h3>
                  <p className="mt-2 text-gray-500 font-light text-sm">
                    We cater to both personal relationships and work-related
                    interactions.
                  </p>
                </div>
                <div className="w-full rounded shadow-lighter p-6 mx-auto flex flex-col justify-center items-center lg:items-start bg-white">
                  <Benefit6Svg />
                  <h3 className="text-2xl font-bold mt-2">Time-Saving</h3>
                  <p className="mt-2 text-gray-500 font-light text-sm">
                    Get a polished, comprehensive manual without spending hours
                    crafting it yourself.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <Testimonial />

          <div className="thirdSection">
            {/* FAQ Section */}

            <FAQSection />

            {/* About Section */}
            <section className=" home-container py-12 lg:py-24 w-full mx-auto text-center ">
              <h2 className="text-4xl font-bold">About Align</h2>
              <h3 className="mt-4 text-2xl font-medium lg:font-semibold text-primary w-full mx-auto px-2 md:px-8 ">
                Our mission is to help individuals articulate their preferences,
                set clear boundaries, and enhance mutual understanding through
                customized interaction manuals.
              </h3>
              <p className="my-4 text-gray-600 w-full mx-auto font-light">
                Founded by a team of communication experts and AI enthusiasts,
                we recognized the need for a tool that makes it easy for people
                to express their needs and preferences in a clear and structured
                way. By leveraging the power of AI, we've created a platform
                that takes the complexity out of this process, making it
                accessible and effective for everyone.
              </p>
              <div className="mt-8">
                <Button
                  isPill={true}
                  className="btn bg-primary px-6 font-semibold text-white border-none mx-4 min-h-10 h-10 hover:bg-black"
                >
                  Create Manual
                </Button>
                <Button
                  isPill={true}
                  className="text-white border-none px-8 font-semibold min-h-10 h-10"
                  defaultColor={true}
                  redirectsTo={"/contact-us"}
                >
                  Contact Us
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
