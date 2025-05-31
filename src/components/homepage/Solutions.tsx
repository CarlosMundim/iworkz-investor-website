'use client';

import { Briefcase, UserCheck, Globe, Layers, Cpu, UserPlus } from 'lucide-react';

const solutions = [
  {
    title: "AI-Powered Global Talent Placement",
    icon: <Globe className="w-9 h-9 text-blue-700" />,
    description: "Matching top talent to mission-critical roles, across borders and time zones. From sourcing to onboarding—AI handles it all."
  },
  {
    title: "IT/AI Vendor Augmentation",
    icon: <Cpu className="w-9 h-9 text-indigo-700" />,
    description: "Seamless augmentation for your IT, engineering, and AI teams. Tap into a vetted, international pool—ready on day one."
  },
  {
    title: "AR/VR Onboarding & AI Training",
    icon: <Layers className="w-9 h-9 text-teal-700" />,
    description: "Immersive onboarding and continuous learning. AR/VR modules + AI trainers accelerate productivity and culture fit."
  },
  {
    title: "Compliance & Regulatory Automation",
    icon: <Briefcase className="w-9 h-9 text-amber-700" />,
    description: "Unmatched compliance: GDPR, APPI, and beyond. Automation and audits at >98% accuracy, lowering your operational risk."
  },
  {
    title: "EOR & PEO/Haken Services",
    icon: <UserCheck className="w-9 h-9 text-green-700" />,
    description: "Employer-of-Record and Haken solutions for frictionless hiring, payroll, and HR—anywhere in Asia."
  },
  {
    title: "Culturally-Sensitive AI Virtual Agents",
    icon: <UserPlus className="w-9 h-9 text-purple-700" />,
    description: "AI agents trained for Japanese, Mandarin, Korean, Bahasa, and more. Truly localised, deeply human."
  }
];

export default function Solutions() {
  return (
    <section className="w-full bg-gradient-to-br from-white via-blue-50 to-white py-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10 text-center">Solutions & Services</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-16 text-center">
          The Rolls Royce standard—spanning AI, talent, compliance, and next-gen workforce orchestration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-10 min-h-[300px] hover:shadow-2xl transition-all duration-300 border-l-8 border-blue-100"
            >
              <div className="mb-6">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">{sol.title}</h3>
              <p className="text-gray-600 text-center">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
