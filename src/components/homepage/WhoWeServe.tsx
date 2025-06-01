// src/components/homepage/WhoWeServe.tsx
'use client';

const segments = [
  {
    icon: "🏢",
    title: "Enterprises & Corporates",
    desc: "Scale your workforce with borderless, AI-enhanced talent. EOR, compliance, and rapid onboarding for multi-market teams.",
  },
  {
    icon: "🏥",
    title: "Hospitals & Care Providers",
    desc: "Access credentialed healthcare talent—doctors, nurses, and care workers—faster and with full compliance.",
  },
  {
    icon: "🎓",
    title: "Universities & Colleges",
    desc: "Global internship, JMI/EMI language AI, and seamless graduate placement for institutional partners.",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Engineering",
    desc: "Technical placements, upskilling, and safety compliance for EPC, construction, and advanced manufacturing.",
  },
  {
    icon: "💡",
    title: "Startups & SMEs",
    desc: "Flexible talent, plug-and-play teams, and scalable AI-powered onboarding—even for lean teams.",
  },
  {
    icon: "🏛️",
    title: "Government & NGOs",
    desc: "Workforce solutions for national skills agendas, ESG, DEI, and regulated mobility programs.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="w-full py-16 px-4 md:px-16 max-w-7xl mx-auto my-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center">
        Who We <span className="text-red-600">Serve</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {segments.map((seg, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow-xl border border-blue-50 p-8 transition-all hover:border-red-200"
          >
            <span className="text-5xl mb-4">{seg.icon}</span>
            <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">{seg.title}</h3>
            <p className="text-gray-600 text-center">{seg.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
