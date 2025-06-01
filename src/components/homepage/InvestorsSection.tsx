// src/components/homepage/InvestorsSection.tsx
'use client';

import Image from 'next/image';

export default function InvestorsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 md:px-16 max-w-7xl mx-auto rounded-3xl shadow-inner my-16 border border-blue-100">
      <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center">
        Built for <span className="text-red-600">Investors</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <ul className="space-y-6 text-lg text-blue-800 font-medium">
            <li>
              <span className="font-bold text-red-600">¥27.4T</span> TAM by 2030: Healthcare, Tech, Manufacturing, Finance
            </li>
            <li>
              <span className="font-bold">First-to-market</span> with agentic AI for workforce orchestration
            </li>
            <li>
              <span className="font-bold">40+ partnerships</span> signed (universities, hospitals, corporates)
            </li>
            <li>
              <span className="font-bold">8-10x</span> projected valuation uplift (comparable: TechnoPro, Outsourcing Inc.)
            </li>
            <li>
              <span className="font-bold">Carbon-neutral</span> AI by 2029, deep ESG commitment
            </li>
          </ul>
          <div className="mt-10 flex gap-6">
            <a
              href="/investors"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-all text-lg"
            >
              Investor Portal
            </a>
            <a
              href="/investors#download"
              className="px-6 py-3 bg-white/90 border border-blue-900 hover:bg-blue-100 text-blue-900 font-bold rounded-full shadow transition-all text-lg"
            >
              Download Deck
            </a>
          </div>
        </div>
        {/* Right: Infographic */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/infographics/market-growth-chart.png"
            alt="Market Opportunity Chart"
            width={380}
            height={280}
            className="rounded-2xl shadow-xl border border-blue-100"
            priority
          />
        </div>
      </div>
    </section>
  );
}
