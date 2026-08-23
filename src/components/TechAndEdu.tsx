import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { Monitor, GraduationCap } from 'lucide-react';

export function TechAndEdu() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Tech & Systems */}
          <div>
            <FadeIn>
              <div className="mb-10">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 flex items-center gap-3">
                  <Monitor className="text-blue-400" />
                  Aviation Systems & Technology
                </h2>
                <div className="h-1 w-12 bg-blue-600 mt-4 rounded-full" />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <ul className="space-y-4">
                {[
                  "Amadeus Altea CM & FM",
                  "Navitaire DCS / SkyPort",
                  "Sabre — Basic Level",
                  "Microsoft Office Suite",
                  "Digital Office Automation Tools"
                ].map((sys, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <span className="font-medium text-slate-700">{sys}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Education */}
          <div>
            <FadeIn>
              <div className="mb-10">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 flex items-center gap-3">
                  <GraduationCap className="text-blue-400" />
                  Education
                </h2>
                <div className="h-1 w-12 bg-blue-600 mt-4 rounded-full" />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <GraduationCap size={100} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Bachelor of Business Administration (BBA)</h3>
                <p className="text-blue-500 font-medium mb-4 relative z-10">Major in Finance</p>
                <p className="text-slate-600 relative z-10">Northern University Bangladesh</p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
