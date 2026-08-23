import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { Award } from 'lucide-react';

const ACHIEVEMENTS = [
  { year: "2013", title: "Assigned DAC Station TCS Associate" },
  { year: "2015", title: "Staff Welfare Committee IC" },
  { year: "2016", title: "Head of Baggage Services (2016-17)" },
  { year: "2017", title: "Duty Manager" },
  { year: "2020", title: "Head of Adhoc Flights & Aircraft Cleaning/Disinfection" },
  { year: "2020", title: "CEO Service Excellence Award" },
  { year: "2024", title: "Promoted to Senior Supervisor" },
  { year: "2025", title: "Promoted to Assistant Manager" },
];

export function Achievements() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Professional Achievements</h2>
            <div className="h-1 w-20 bg-blue-500 mt-6 rounded-full" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <FadeIn key={index} delay={0.05 * index} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <Award className="text-blue-300 mb-4" size={24} />
              <div className="text-sm font-mono text-slate-400 mb-2">{item.year}</div>
              <h3 className="font-medium text-slate-100 leading-snug">{item.title}</h3>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
