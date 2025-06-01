// src/components/homepage/WhyPartner.tsx
'use client';

const reasons = [
  {
    title: "AI-First, Human-Centric",
    desc: "Advanced AI agents enhance—but never replace—the human touch, creating seamless cross-border workforce journeys.",
    icon: "🤝",
  },
  {
    title: "Compliance by Design",
    desc: "Regulatory peace of mind with global coverage: GDPR, APPI, Haken, and industry-specific compliance—all automated.",
    icon: "🛡️",
  },
  {
    title: "Unmatched Speed & Scale",
    desc: "68% faster onboarding, 98%+ placement success, and flexible workforce models for enterprises, governments, and SMEs.",
    icon: "⚡",
  },
  {
    title: "Cultural Intelligence",
    desc: "Culturally sensitive onboarding, translation, and virtual agents for Japanese, ASEAN, and global clients.",
    icon: "🌏",
  },
  {
    title: "ESG & Social Impact",
    desc: "Workforce mobility with measurable ESG outcomes—carbon-neutral AI labs, inclusive hiring, and upskilling for all.",
    icon: "🌱",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Best-in-class security, privacy, and resilience built for banks, hospitals, governments, and global enterprises.",
    icon: "🔒",
  },
];

export default function WhyPartner() {
  return (
    <section className="w-full py-16 px-4 md:px-16 bg-white rounded-3xl shadow-2xl max-w-7xl mx-auto my-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight">
        Why Partner with <span className="text-red-600">iWORKZ</span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((r, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100 hover:border-red-200 transition"
          >
            <span className="text-5xl mb-4">{r.icon}</span>
            <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">{r.title}</h3>
            <p className="text-gray-600 text-center">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
