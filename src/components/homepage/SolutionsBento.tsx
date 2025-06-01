// src/components/homepage/SolutionsBento.tsx
'use client';

const solutions = [
  {
    title: 'AI-Powered Global Talent Placement',
    desc: 'Seamlessly match top international talent with leading enterprises using AI-driven workflows.',
    icon: '🌐',
  },
  {
    title: 'IT & AI Vendor Augmentation',
    desc: 'Rapid deployment of technical teams for digital transformation, R&D, and complex projects.',
    icon: '🤖',
  },
  {
    title: 'AR/VR Onboarding & AI Training',
    desc: 'Immersive onboarding and upskilling powered by AR, VR, and intelligent training bots.',
    icon: '🕶️',
  },
  {
    title: 'Compliance & Regulatory Assistance',
    desc: 'Stay compliant across borders with automated document verification and legal workflow support.',
    icon: '📝',
  },
  {
    title: 'EOR (Employer of Record) Services',
    desc: 'Hire anywhere with full payroll, legal, and HR compliance managed by experts.',
    icon: '📑',
  },
  {
    title: 'PEO & Haken Staffing',
    desc: 'Professional Employer Organisation and licensed dispatch (Haken) for flexible workforce models.',
    icon: '👔',
  },
];

export default function SolutionsBento() {
  return (
    <section className="w-full py-16 px-4 md:px-16 bg-blue-50 rounded-3xl shadow-xl max-w-7xl mx-auto my-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight">
        Solutions Designed for Global Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((sol, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="text-5xl mb-4">{sol.icon}</span>
            <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">{sol.title}</h3>
            <p className="text-gray-600 text-center">{sol.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
