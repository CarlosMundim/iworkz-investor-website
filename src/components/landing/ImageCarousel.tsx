'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/carousel/global-talent.jpg',
    alt: 'Global Talent Mobility',
    caption: 'Global Talent Mobility'
  },
  {
    src: '/images/carousel/ai-lab.jpg',
    alt: 'AI-Orchestrated Compliance',
    caption: 'AI-Orchestrated Compliance'
  },
  {
    src: '/images/carousel/diverse-workforce.jpg',
    alt: 'Diverse Workforce, United Purpose',
    caption: 'Diverse Workforce, United Purpose'
  },
  {
    src: '/images/carousel/university-partner.jpg',
    alt: 'University Partnerships',
    caption: 'University Partnerships'
  },
  {
    src: '/images/carousel/sustainable-impact.jpg',
    alt: 'Sustainable Social Impact',
    caption: 'Sustainable Social Impact'
  },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const goTo = (i: number) => setIndex(i);

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center">
      {/* Image */}
      <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center mb-4">
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={540}
          height={360}
          className="object-cover w-full h-full transition-opacity duration-700"
          priority
        />
      </div>
      {/* Caption */}
      <div className="text-center font-semibold text-lg text-gray-800 py-2 mb-2">
        {images[index].caption}
      </div>
      {/* Dots navigation */}
      <div className="flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            className={`w-3 h-3 rounded-full border border-blue-200 transition-all duration-300
              ${index === i ? 'bg-blue-600 scale-110 shadow-lg' : 'bg-gray-300 hover:bg-blue-200'}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
