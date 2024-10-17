"use client";
import { useState } from "react";
import {
  CardLink2svg,
  CardLinksvg,
  Comma1Svg
} from "@/app/_lib/assets/HomepageSVG";
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: "slide1",
      content:
        "Creating a professional manual was a game-changer for my team. It helped set clear expectations and improved our collaboration significantly.",
      author: "Sarah M. | Team Manager",
    },
    {
      id: "slide2",
      content:
        "The manual provided clarity in our processes, making onboarding new team members seamless and efficient. I can't recommend it enough!",
      author: "John D. | Project Lead",
    },
    {
      id: "slide3",
      content:
        "Thanks to the manual, our team has become more aligned in our goals. It truly transformed how we work together.",
      author: "Emily R. | Operations Manager",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1)); // Loop back to the first slide
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1)); // Loop back to the last slide
  };

  return (
    <section className="homepPageFullCard shadow-none flex items-center justify-between py-10 home-container">
      <div className="carousel w-full">
        {testimonials.map((testimonial, index) => (
          <div
            id={testimonial.id}
            className={`carousel-item relative w-full ${
              index === currentSlide ? "block" : "hidden"
            }`}
            key={testimonial.id}
          >
            <div className="flex items-center justify-between flex-col">
              <Comma1Svg />
              <p className="text-2xl font-bold text-center w-8/12 mt-3">
                {testimonial.content}
              </p>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={handlePrev} className="">
                  <CardLink2svg />
                </button>
                <button onClick={handleNext} className="">
                  <CardLinksvg />
                </button>
              </div>
              <p className="my-5 text-primary">{testimonial.author}</p>
              <div className="flex justify-center gap-2 py-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-gray-500" : "bg-gray-300"
                    } hover:bg-gray-500`}
                  />
                ))}
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
