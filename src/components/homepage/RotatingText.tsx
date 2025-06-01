'use client';

import { useEffect, useState } from 'react';

const messages = [
  "Borderless Talent. Limitless Impact.",
  "AI-Orchestrated Workforce Mobility",
  "Trusted by Enterprises & Universities",
  "Faster Onboarding, Greater Opportunity",
  "Sustainable. Compliant. Transformative."
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2800);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="relative min-h-[56px]">
        <span
          key={index}
          className="block text-2xl md:text-3xl font-bold text-blue-700 transition-all duration-700 ease-in-out animate-fadein"
          style={{ minWidth: "310px", textAlign: "center" }}
        >
          {messages[index]}
        </span>
        <style jsx>{`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(16px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadein {
            animation: fadein 0.7s cubic-bezier(.6,0,.4,1);
          }
        `}</style>
      </div>
    </div>
  );
}
