"use client";
import SkillsSection from "./_components/Skills/SkillsSection";
import { ThemeProvider } from "@/app/_lib/context/ThemeController";
import Projects from "./_components/Projects";
import AboutMe from "./_components/AboutMe";
import { NameHero } from "./_components/NameHero/NameHero";
import Header from "./_components/Header/Header";
import Head from "next/head";
import Certification from "./_components/Certification/Certification";

const Home = () => {
  return (
    <ThemeProvider>
      <Head>
        <title>Abdul Moiz Sheikh - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Abdul Moiz Sheikh, a skilled Full-Stack Developer with expertise in React, Next.js, Node.js, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Abdul Moiz Sheikh" />
        <meta
          name="keywords"
          content="Abdul Moiz Sheikh, Full-Stack Developer, Portfolio, React Developer, Next.js Developer, JavaScript, MERN Stack"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta
          property="og:title"
          content="Abdul Moiz Sheikh - Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Showcasing projects and expertise in modern web development technologies like React, Next.js, and Node.js."
        />
        <meta property="og:image" content="/your-og-image.png" />
        <meta property="og:url" content="https://your-portfolio.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className="min-h-screen bg-background z-0">
        <div className=" w-full m-auto text-center md:text-left text-para z-20 relative ">
          <div className=" pb-8">
            <NameHero />
            <SkillsSection />
            <Projects />
            {/* <Journey /> */}

            {/*Hear from the people // future goals // You came
            all the way, Thanks Contact me */}

            <Certification />
          </div>
          <AboutMe />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
