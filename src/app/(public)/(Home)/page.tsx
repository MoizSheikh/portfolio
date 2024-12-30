"use client";
import SkillsSection from "./_components/Skills/SkillsSection";
import ColorToggle from "@/app/_components/ColorToggle/ColorToggle";
import { ThemeProvider } from "@/app/_lib/context/ThemeController";
import Projects from "./_components/Projects";
import Journey from "./_components/Journey";
import AboutMe from "./_components/AboutMe";
import { NameHero } from "./_components/NameHero/NameHero";

const Home = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background z-0">
        <ColorToggle />
        <div className=" w-full m-auto text-center md:text-left text-para z-20 relative ">
          <div className=" pb-8">
            <NameHero />
            <SkillsSection />
            <Projects />
            <Journey />
            
            {/*Hear from the people // future goals // You came
            all the way, Thanks Contact me */}
          </div>
          <AboutMe />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
