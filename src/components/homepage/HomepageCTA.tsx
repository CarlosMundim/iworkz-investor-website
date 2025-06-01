// src/components/homepage/HomepageCTA.tsx
'use client';

export default function HomepageCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 py-20 px-4 flex flex-col items-center justify-center rounded-3xl shadow-2xl my-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg">
        Ready to Build the Future of Talent?
      </h2>
      <p className="text-lg md:text-2xl text-blue-100 font-medium max-w-2xl text-center mb-10 drop-shadow">
        Partner with iWORKZ for borderless, AI-powered workforce mobility.  
        <br />Discover how you can access the next generation of skilled talent, or invest in the platform transforming Asia.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <a
          href="/contact"
          className="px-8 py-4 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold shadow-lg transition-all text-lg"
        >
          Get in Touch
        </a>
        <a
          href="/solutions"
          className="px-8 py-4 rounded-full bg-white/80 hover:bg-blue-100 text-blue-900 font-bold shadow-lg transition-all text-lg border border-white"
        >
          Explore Solutions
        </a>
        <a
          href="/investors"
          className="px-8 py-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold shadow-lg transition-all text-lg"
        >
          Investor Portal
        </a>
      </div>
    </section>
  );
}
