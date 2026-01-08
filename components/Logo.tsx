import React from 'react';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-full h-auto", animate = false }) => {
  return (
    <svg 
      viewBox="0 0 400 220" 
      className={`${className} filter drop-shadow-md transition-all duration-300 ${animate ? 'hover:scale-105 hover:rotate-1' : ''}`}
    >
      {/* Oval Background */}
      <ellipse cx="200" cy="110" rx="195" ry="95" fill="#F97316" stroke="#111827" strokeWidth="8" />
      
      {/* Stripes */}
      <g stroke="white" strokeWidth="8" opacity="0.9">
          <line x1="40" y1="60" x2="360" y2="60" />
          <line x1="20" y1="110" x2="380" y2="110" />
          <line x1="40" y1="160" x2="360" y2="160" />
      </g>

      {/* White Pennant/Triangle */}
      <path d="M 80,30 L 370,110 L 80,190 Z" fill="white" filter="drop-shadow(4px 4px 0px rgba(0,0,0,0.2))" />

      {/* PVS Text */}
      <text x="120" y="145" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fontSize="100" fill="#111827" letterSpacing="-6">PVS</text>
      
      {/* Subtitle - hidden in small versions but available in structure */}
      <text x="200" y="240" fontFamily="sans-serif" fontWeight="800" fontSize="30" fill="#F97316" stroke="#111827" strokeWidth="1" textAnchor="middle" className="hidden">PISOS</text>
    </svg>
  );
};

export default Logo;