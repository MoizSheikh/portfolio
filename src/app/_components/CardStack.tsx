'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  color: string;
  image?: string;
}

const sampleCards: Card[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A revolutionary mobile app that transforms how people connect and share experiences in real-time.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Design System",
    description: "Comprehensive design system with reusable components, tokens, and guidelines for consistent user experiences.",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Web Platform",
    description: "Modern web platform built with cutting-edge technologies to deliver exceptional performance and scalability.",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Data Analytics",
    description: "Advanced analytics dashboard that provides deep insights into user behavior and business metrics.",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "AI Assistant",
    description: "Intelligent AI-powered assistant that helps automate tasks and improves productivity across teams.",
    color: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "E-commerce Suite",
    description: "Complete e-commerce solution with payment processing, inventory management, and customer analytics.",
    color: "bg-gradient-to-br from-teal-500 to-green-500",
  },
];

export default function CardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const stackRef = useRef<HTMLDivElement>(null);

  const getCardStyle = (index: number) => {
    const offset = index - currentIndex;
    const baseRotation = (index - 2) * 3; // Spread cards in a fan
    const baseOffset = {
      x: (index - 2) * 8,
      y: (index - 2) * 4,
    };

    if (offset < 0) {
      // Cards that have been moved to the back
      return {
        transform: `translateX(${baseOffset.x - Math.abs(offset) * 12}px) translateY(${baseOffset.y + Math.abs(offset) * 8}px) scale(${0.9 - Math.abs(offset) * 0.05}) rotateZ(${baseRotation - Math.abs(offset) * 5}deg)`,
        zIndex: index,
        opacity: Math.max(0.3, 1 - Math.abs(offset) * 0.2),
      };
    } else if (offset > 0) {
      // Cards coming up
      return {
        transform: `translateX(${baseOffset.x + offset * 12}px) translateY(${baseOffset.y - offset * 8}px) scale(${0.9 - offset * 0.05}) rotateZ(${baseRotation + offset * 5}deg)`,
        zIndex: sampleCards.length - offset,
        opacity: Math.max(0.5, 1 - offset * 0.15),
      };
    } else {
      // Active card
      const dragTransform = isDragging ? `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px)` : '';
      return {
        transform: `${dragTransform} translateX(${baseOffset.x}px) translateY(${baseOffset.y}px) scale(1) rotateZ(${baseRotation}deg)`,
        zIndex: sampleCards.length + 1,
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
          setCurrentIndex(Math.max(0, currentIndex - 1));
        } else {
          // Dragged left - go to next card
          setCurrentIndex(Math.min(sampleCards.length - 1, currentIndex + 1));
        }
      }
      
      setIsDragging(false);
      setDragOffset({ x: 0, y: 0 });
    };

    const handleTouchEnd = () => {
      handleMouseUp();
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragStart, dragOffset, currentIndex]);

  // Handle wheel events for scroll navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!stackRef.current) return;
      
      const rect = stackRef.current.getBoundingClientRect();
      const isOverStack = e.clientX >= rect.left && e.clientX <= rect.right && 
                         e.clientY >= rect.top && e.clientY <= rect.bottom;
      
      if (isOverStack) {
        e.preventDefault();
        
        if (e.deltaY > 0) {
          // Scroll down - next card
          setCurrentIndex(Math.min(sampleCards.length - 1, currentIndex + 1));
        } else {
          // Scroll up - previous card
          setCurrentIndex(Math.max(0, currentIndex - 1));
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [currentIndex]);

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive Card Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Drag the cards or scroll over them to navigate through the stack. 
          Cards behave like a real deck with natural stacking and fan effects.
        </p>
      </div>

      {/* Card Stack */}
      <div className="flex justify-center items-center min-h-[500px]">
        <div 
          ref={stackRef}
          className="relative w-96 h-96 cursor-grab active:cursor-grabbing"
          style={{ perspective: '1000px' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {sampleCards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute inset-0 w-80 h-96 rounded-2xl shadow-2xl p-6 text-white transition-all duration-500 ease-out select-none ${card.color}`}
              style={{
                ...getCardStyle(index),
                transformStyle: 'preserve-3d',
                left: '50%',
                top: '50%',
                marginLeft: '-10rem',
                marginTop: '-12rem',
              }}
            >
              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    <span className="text-sm opacity-75">#{card.id}</span>
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                      <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
                      <div className="w-2 h-2 bg-white rounded-full opacity-20"></div>
                    </div>
                    <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-sm font-medium hover:bg-opacity-30 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Card number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Active card highlight */}
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-2xl border-2 border-white border-opacity-40 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {sampleCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'bg-blue-500 w-8 h-3' 
                : 'bg-gray-300 dark:bg-gray-600 w-3 h-3 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Current card info */}
      <div className="text-center mt-6">
        <p className="text-gray-600 dark:text-gray-300">
          Card {currentIndex + 1} of {sampleCards.length} • Drag or scroll to navigate
        </p>
      </div>

      {/* Instructions */}
      <div className="text-center mt-4">
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            <span>Scroll over cards</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
            <span>Click & drag</span>
          </div>
        </div>
      </div>
    </div>
  );
} 