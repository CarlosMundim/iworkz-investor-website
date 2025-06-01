'use client';

export default function HeroTop() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-900 to-blue-700 py-24 md:py-36 px-6 flex flex-col items-center justify-center rounded-b-[48px] shadow-2xl">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center leading-tight tracking-tight mb-8 drop-shadow-xl">
        Borderless Talent. Limitless Impact.
      </h1>
      <p className="text-lg md:text-2xl text-blue-100 text-center font-medium max-w-2xl mb-6 md:mb-10 drop-shadow">
        AI-powered workforce mobility for Japan & Asia.<br />
        Discover a new era of talent orchestration, compliance, and opportunity.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <a
          href="/contact"
          className="px-8 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold shadow-lg transition-all text-lg"
        >
          Get in Touch
        </a>
        <a
          href="/why-invest"
          className="px-8 py-3 rounded-full bg-white/80 hover:bg-blue-100 text-blue-900 font-bold shadow-lg transition-all text-lg border border-white"
        >
          Why Invest
        </a>
      </div>
    </section>
  );
}
