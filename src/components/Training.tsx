import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { BookOpen } from 'lucide-react';

const TRAINING_ITEMS = [
  "Safety, Security, Service & Teamwork",
  "Delay Handling & Irregular Operations",
  "Airport Handling & Flight Handling During Disruptions",
  "Customer Service at Airports",
  "Passenger Service & Facilitation",
  "Airport Handling Procedure",
  "Altea CM & Controller Training",
  "Altea Reservation & Ticketing",
  "Ramp Safety Awareness",
  "Aviation Security Awareness",
  "Emergency Response Planning & Disruption Handling",
  "UK travel-document and carrier-liability training",
  "U.S. passport security and imposter detection training"
];

export function Training() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
          <SectionHeading 
            title="Training & Professional Development" 
            subtitle="Continuous learning and specialized certifications across critical aviation domains."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRAINING_ITEMS.map((item, index) => (
            <FadeIn key={index} delay={0.05 * (index % 6)} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
              <BookOpen size={20} className="text-blue-400 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium leading-relaxed">{item}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
