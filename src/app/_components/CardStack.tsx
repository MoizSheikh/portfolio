"use client";

import React, { useState, useRef, useEffect } from "react";
import { certs } from "@/app/_lib/assets/staticData";
import { Cert } from "@/app/_lib/_types/genericTypes";
import { cn } from "@/app/_lib/helpers/helpers";
import { useTheme } from "@/app/_lib/context/ThemeController";
import Image from "next/image";

export default function CardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const stackRef = useRef<HTMLDivElement>(null);
  const scrollAccumulatorRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const isBlockedRef = useRef(false);
  const { theme } = useTheme();

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % certs.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certs.length) % certs.length
    );
  };

  const getCardStyle = (index: number) => {
    const offset = index - currentIndex;
    const baseRotation = (index - 2) * 2; // Reduced rotation for professional look
    const baseOffset = {
      x: (index - 2) * 6,
      y: (index - 2) * 3,
    };

    if (offset < 0) {
      // Cards that have been moved to the back
      return {
        transform: `translateX(${
          baseOffset.x - Math.abs(offset) * 10
        }px) translateY(${baseOffset.y + Math.abs(offset) * 6}px) scale(${
          0.92 - Math.abs(offset) * 0.04
        }) rotateZ(${baseRotation - Math.abs(offset) * 3}deg)`,
        zIndex: index,
        opacity: Math.max(0.4, 1 - Math.abs(offset) * 0.2),
      };
    } else if (offset > 0) {
      // Cards coming up
      return {
        transform: `translateX(${baseOffset.x + offset * 10}px) translateY(${
          baseOffset.y - offset * 6
        }px) scale(${0.92 - offset * 0.04}) rotateZ(${
          baseRotation + offset * 3
        }deg)`,
        zIndex: certs.length - offset,
        opacity: Math.max(0.6, 1 - offset * 0.15),
      };
    } else {
      // Active card
      const dragTransform = isDragging
        ? `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px)`
        : "";
      return {
        transform: `${dragTransform} translateX(${baseOffset.x}px) translateY(${baseOffset.y}px) scale(1) rotateZ(${baseRotation}deg)`,
        zIndex: certs.length + 1,
        opacity: 1,
      };
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragOffset({ x: 0, y: 0 });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setDragOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      setDragOffset({ x: deltaX, y: deltaY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const deltaX = e.touches[0].clientX - dragStart.x;
      const deltaY = e.touches[0].clientY - dragStart.y;
      setDragOffset({ x: deltaX, y: deltaY });
    };

    const handleMouseUp = () => {
      if (!isDragging) return;

      const threshold = 100;

      if (Math.abs(dragOffset.x) > threshold) {
        if (dragOffset.x > 0) {
          // Dragged right - go to previous card
          prevCard();
        } else {
          // Dragged left - go to next card
          nextCard();
        }
      }

      setIsDragging(false);
      setDragOffset({ x: 0, y: 0 });
    };

    const handleTouchEnd = () => {
      handleMouseUp();
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragStart, dragOffset]);

  // Handle wheel events with proper blocking - Fixed scroll functionality
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!stackRef.current) return;

      const rect = stackRef.current.getBoundingClientRect();
      const isOverStack =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isOverStack) {
        e.preventDefault();

        const now = Date.now();
        
        // Check if we're in a cooldown period (reduced to 400ms for better responsiveness)
        if (isBlockedRef.current && now - lastMoveTimeRef.current < 400) {
          return; // Still in cooldown, ignore all scroll
        }
        
        // Reset block if cooldown period has passed
        if (now - lastMoveTimeRef.current >= 400) {
          isBlockedRef.current = false;
          scrollAccumulatorRef.current = 0;
        }
        
        // Don't accumulate if we're blocked
        if (isBlockedRef.current) return;
        
        // Accumulate scroll delta
        scrollAccumulatorRef.current += e.deltaY;
        
        // Lower threshold for better responsiveness
        const threshold = 80;
        
        if (Math.abs(scrollAccumulatorRef.current) >= threshold) {
          if (scrollAccumulatorRef.current > 0) {
            // Accumulated enough down scroll - move to next card
            nextCard();
          } else {
            // Accumulated enough up scroll - move to previous card
            prevCard();
          }
          
          // Block further movements and reset
          isBlockedRef.current = true;
          lastMoveTimeRef.current = now;
          scrollAccumulatorRef.current = 0;
        }
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="py-16 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto px-3 md:px-0">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-heading mb-4">
          Interactive Certifications Stack
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Drag the cards or scroll over them to navigate through my certifications. 
          Each card represents a professional certification I've earned.
        </p>
      </div>

      {/* Card Stack using Daisy UI */}
      <div className="flex justify-center items-center min-h-[500px]">
        <div
          ref={stackRef}
          className="stack cursor-grab active:cursor-grabbing"
          style={{ perspective: "1000px" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {certs.map((cert: Cert, index) => (
            <div
              key={cert.id}
              className={cn(
                "card card-compact bg-base-100 shadow-xl w-80 h-96 transition-all duration-500 ease-out select-none",
                {
                  "border-2 border-primary": index === currentIndex,
                  "bg-base-200": theme === "dark",
                  "bg-white": theme === "light",
                }
              )}
              style={{
                ...getCardStyle(index),
                transformStyle: "preserve-3d",
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: "-10rem",
                marginTop: "-12rem",
              }}
            >
              <div className="card-body h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="card-title text-lg">{cert.name}</h3>
                    {cert.logo && (
                      <div className="avatar">
                        <div className="w-8 h-8 rounded">
                          <Image
                            src={cert.logo}
                            alt={`${cert.issuer} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-muted mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="text-sm">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">{cert.issueDate}</span>
                  </div>
                </div>

                <div className="card-actions justify-start mt-6">
                  <div className="divider my-2"></div>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill: string, skillIndex: number) => (
                      <div key={skillIndex} className="badge badge-outline badge-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicator using Daisy UI */}
      <div className="flex justify-center mt-8">
        <div className="join">
          {certs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`btn btn-xs join-item ${
                index === currentIndex
                  ? "btn-primary"
                  : "btn-outline"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Current card info */}
      {/* <div className="text-center mt-6">
        <div className="alert alert-info shadow-lg max-w-md mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>
            Certification {currentIndex + 1} of {certs.length} • Drag or scroll to navigate • Infinite loop
          </span>
        </div>
      </div> */}

      {/* Instructions using Daisy UI */}
      <div className="text-center mt-4">
        <div className="flex justify-center items-center space-x-4 text-sm">
          <div className="tooltip" data-tip="Scroll over the cards">
            <div className="badge badge-neutral gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
              Scroll
            </div>
          </div>
          
          <div className="tooltip" data-tip="Click and drag the cards">
            <div className="badge badge-neutral gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
              Drag
            </div>
          </div>
          
          <div className="tooltip" data-tip="Cards loop infinitely">
            <div className="badge badge-neutral gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Loop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
