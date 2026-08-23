import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { Briefcase, Plane, ShieldCheck, Users } from 'lucide-react';

export function About() {
  const highlights = [
    { icon: Plane, label: "Top Airlines Experience", desc: "Air India, Vistara, Thai Airways, Singapore Airlines, Jazeera" },
    { icon: Briefcase, label: "Operational Leadership", desc: "Assistant Manager responsibilities in airside & groundside ops" },
    { icon: Users, label: "Team Coordination", desc: "Staff management, training, and stakeholder relationships" },
    { icon: ShieldCheck, label: "Safety & Compliance", desc: "Ensuring regulatory compliance and operational safety" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <SectionHeading 
                title="Professional Introduction" 
                subtitle="Experience That Understands Aviation From the Ground Up" 
              />
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-6">
                  With over 15 years of dedicated service in the aviation industry, I have developed comprehensive expertise across airport operations, flight handling, and customer service excellence.
                </p>
                <p className="mb-6">
                  My career spans leadership roles with world-class carriers including <strong>Air India, Vistara, Thai Airways International, Jazeera Airways, and Singapore Airlines</strong>. Most recently, as Assistant Manager, my responsibilities encompass both airside and groundside operations, flight handling, operational supervision, safety compliance, and critical staff coordination.
                </p>
                <p>
                  I am passionate about aviation workforce development, delivering high-quality training, and maintaining the highest standards of safety, service quality, and operational efficiency in complex, high-pressure airport environments.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <FadeIn key={item.label} delay={0.1 * (index + 1)} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-400 mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
