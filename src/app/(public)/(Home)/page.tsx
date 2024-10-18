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

const Home = async () => {
  return (
    <>
      <div className="min-h-screen bg-white z-0">
        <div className=" w-full m-auto text-center md:text-left text-gray-800 z-20 relative ">
          <div className="firstSection pb-8">
            {/* Hero Section */}
            <section className="home-container py-4 lg:py-10 lg:mt-8 lg:mb-8 w-full bg-transparent text-center md:text-left flex items-center flex-col-reverse md:flex-row align-middle justify-start gap-14">
              <div className="w-full lg:w-7/12">
                <h1 className="text-3xl lg:text-5xl font-bold !leading-tight">
                  Abdul Moiz Sheikh
                </h1>
                <div className="my-6 text-gray-600 w-full lg:w-4/5 font-light !leading-6">
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
            {/* How It Works */}
            <section className="home-container py-6 lg:py-16 text-center">
              <h2 className="text-4xl font-bold ">How It Works</h2>
              <div className="mt-6 flex flex-col lg:flex-row w-full justify-center lg:justify-between gap-3 md:gap-8">
                <div className="text-center md:text-left rounded-md bg-white shadow-lighter py-5 px-8  flex flex-col justify-center items-center lg:items-start">
                  <Step1svg />
                  <h3 className="mt-2 text-2xl font-semibold text-gray-800">
                    1. Take Our Survey
                  </h3>
                  <p className="mt-2 text-gray-500 font-light">
                    Answer a few simple questions about your communication style
                    and boundaries.
                  </p>
                </div>
                <div className="text-center md:text-left rounded-md bg-white shadow-lighter py-5 px-8  flex flex-col justify-center items-center lg:items-start">
                  <Step2svg />
                  <h3 className="mt-2 text-2xl font-semibold text-gray-800">
                    2. Customize Manual
                  </h3>
                  <p className="mt-2 text-gray-500 font-light">
                    Choose your preferred tone and style to create a manual that
                    represents you.
                  </p>
                </div>
                <div className="text-center md:text-left rounded-md bg-white shadow-lighter py-5 px-8  flex flex-col justify-center items-center lg:items-start">
                  <Step3svg />
                  <h3 className="mt-2 text-2xl font-semibold text-gray-800">
                    3. Download & Share
                  </h3>
                  <p className="mt-2 text-gray-500 font-light">
                    Receive a tailored manual ready to share with colleagues or
                    partners.
                  </p>
                </div>
              </div>
            </section>

            <section className=" home-container py-4 lg:py-12 text-center md:text-left mb-4">
              <div className="w-full lg:w-8/12 mx-auto flex flex-col lg:flex-row align-center items-center relative">
                <div className="z-10 w-full md:w-4/5 lg:w-3/5">
                  <blockquote className="text-2xl font-bold text-gray-700 mb-2">
                    <Commasvg />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec gravida velit ac vulputate semper.Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Donec gravida velit
                    ac vulputate semper.
                  </blockquote>
                  <p className="mt-4 font-semibold flex justify-around">
                    Geoffrey Price
                  </p>
                  <p className="text-gray-700 flex justify-around">
                    Founder & CEO
                  </p>
                </div>
                <div className="mt-6 relative lg:absolute right-0">
                  <Image
                    src="/ceoPic.png"
                    alt="Geoffrey Price"
                    width={500}
                    height={350}
                    className="relative"
                  />
                  <div className="absolute top-0 right-0 m-2">
                    <Linkdinsvg />
                  </div>
                </div>
              </div>
            </section>

            {/* Tailored Manuals */}
            <section className="home-container py-4 lg:py-10 text-center md:text-left flex flex-col lg:flex-row items-center  justify-between w-full">
              <h2 className="text-4xl leading-tight lg:leading-normal font-semibold w-full text-center lg:text-left lg:w-1/6">
                Tailored Manuals for Every Need
                <Button
                  isPill={true}
                  className="btn bg-primary text-white border-none font-medium w-10/12 mt-1 lg:mt-7 min-h-10 h-10 hover:bg-black"
                >
                  Get Started
                </Button>
              </h2>
              <div className="mt-8 lg:mt-12 flex justify-between lg:justify-center flex-col lg:flex-row w-full lg:w-4/5 gap-4">
                <div className="card w-70 bg-white shadow-lighter p-6 px-5 rounded">
                  <h3 className="text-2xl font-semibold">
                    Professional Manuals
                  </h3>
                  <p className="mt-2 text-gray-500 font-light ">
                    Enhance workplace communication by creating a professional
                    user manual which outlines your communication style, meeting
                    preferences, feedback approach, and more. Perfect for
                    onboarding, team collaboration, and leadership roles.
                  </p>
                  <div className="flex-auto my-4">
                    <hr />
                  </div>
                  <div className="text-base my-1">
                    <div className="font-semibold text-sm my-1 text-left">
                      Ideal for:
                    </div>
                    <div className="flex flex-col md:flex-row justify-between lg:justify-start align-center w-full text-xs font-light gap-3">
                      <div className="flex justify-start items-center">
                        <CheckMarkSvg />
                        <p className="ml-1">Managers</p>
                      </div>
                      <div className="flex justify-start items-center ">
                        <CheckMarkSvg />
                        <p className="ml-1">Executives</p>
                      </div>
                      <div className="flex justify-start items-center ">
                        <CheckMarkSvg />
                        <p className="ml-1">Teams</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-base my-1">
                    <p className="font-semibold text-sm my-1 text-left">
                      Key features
                    </p>
                    <div className="flex flex-col md:flex-row justify-between lg:justify-start align-center w-full font-light text-xs gap-3">
                      <div className="flex justify-start items-center">
                        <Icon1Svg />
                        <p className="ml-1">Customizable tone</p>
                      </div>
                      <div className="flex justify-start items-center">
                        <Icon2Svg />
                        <p className="ml-1">Structured format </p>
                      </div>
                      <div className="flex justify-start items-center">
                        <Icon3Svg />
                        <p className="ml-1">Easy sharing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card w-70 bg-white shadow-lighter p-6 px-5 rounded ">
                  <h3 className="text-2xl font-semibold">Personal Manuals</h3>
                  {/* text size change maybe */}
                  <p className="mt-2 text-gray-500 font-light">
                    Strengthen your personal relationships with a manual that
                    helps your partner, family, or friends understand your
                    needs, emotional triggers, and love language. A thoughtful
                    way to foster deeper connections and avoid
                    misunderstandings.
                  </p>
                  <div className="flex-auto my-4">
                    <hr />
                  </div>
                  <div className="text-base my-1">
                    <div className="font-semibold text-sm my-1 text-left">
                      Ideal for:
                    </div>

                    <div className="flex flex-col md:flex-row justify-between lg:justify-start align-center w-full text-xs font-light gap-3">
                      <div className="flex justify-start items-center">
                        <CheckMarkSvg />
                        <p className="ml-1">Couples</p>
                      </div>
                      <div className="flex justify-start items-center">
                        <CheckMarkSvg />
                        <p className="ml-1">Friends</p>
                      </div>
                      <div className="flex justify-start items-center">
                        <CheckMarkSvg />
                        <p className="ml-1">Family</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-base my-1">
                    <p className="font-semibold text-sm my-1 text-left">
                      Key features
                    </p>
                    <div className="flex flex-col md:flex-row justify-between lg:justify-start align-center w-full font-light text-xs gap-3">
                      <div className="flex justify-start items-center">
                        <Icon4Svg />
                        <p className="ml-1">Reflective of personal values</p>
                      </div>
                      <div className="flex justify-start items-center">
                        <Icon5Svg />
                        <p className="ml-1">Adaptable for all relationships</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
    </>
  );
};

export default Home;
