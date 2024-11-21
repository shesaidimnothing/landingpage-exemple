'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface WidgetProps {
  title: string;
  description: string;
  isLarge?: boolean;
  link?: string;
}

export default function Widget({ title, description, isLarge = false, link }: WidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const startCollapseTimer = useCallback(() => {
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);
    setTimer(newTimer);
  }, [timer]);

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer);
    setIsExpanded(true);
    startCollapseTimer();
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      className={`backdrop-blur-md bg-transparent border border-white/20 
                 transition-all duration-300 ease-in-out relative rounded-2xl p-6
                 ${isLarge 
                   ? 'w-[33vw] h-[33vh]' 
                   : `aspect-square ${isExpanded ? 'w-[230px] h-[230px]' : 'w-[200px] h-[200px]'}`
                 }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {link && (
        <Link 
          href={link}
          className="absolute top-3 left-3 cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          <svg 
            className="w-5 h-5 text-white/70"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      )}

      <div 
        className="absolute top-3 right-3 cursor-pointer transition-transform duration-300"
      >
        <svg 
          className={`w-5 h-5 text-white/70 transform transition-transform duration-300
                     ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="h-full flex flex-col justify-center">
        <h2 className={`font-semibold text-white mb-3 pr-8 
                       ${isLarge ? 'text-[2.5rem]' : 'text-[2rem]'} tracking-tight`}>
          {title}
        </h2>
        <p className={`text-gray-200 transition-all duration-300 tracking-tight
                      ${isLarge ? 'text-lg' : isExpanded ? 'text-base' : 'text-sm'}`}>
          {description}
        </p>
      </div>
    </div>
  );
} 