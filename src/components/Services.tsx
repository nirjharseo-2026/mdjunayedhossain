import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';

const SERVICES = [
  {
    title: "Aviation Recruitment",
    desc: "Support aviation organizations and aspiring aviation professionals with recruitment-related guidance, candidate preparation and workforce requirements."
  },
  {
    title: "Aviation Training",
    desc: "Professional training and orientation focused on airport operations, customer service, safety awareness, flight handling and operational procedures."
  },
  {
    title: "Aviation Grooming",
    desc: "Professional grooming and workplace readiness for aviation personnel, including customer-facing communication, professional presentation and service mindset."
  },
  {
    title: "Airport Operations Consulting",
    desc: "Guidance related to airport operational processes, team coordination, flight handling, workflow improvement and operational efficiency."
  },
  {
    title: "Customer Service Training",
    desc: "Training focused on passenger handling, service excellence, communication and solving customer issues effectively."
  },
  {
    title: "Safety & Compliance",
    desc: "Professional guidance related to aviation safety practices, operational compliance, ramp safety awareness and standard operating procedures."
  },
  {
    title: "Ground & Flight Handling",
    desc: "Knowledge-based consulting and training around groundside operations, airside activities, flight handling, load-control supervision and operational coordination."
  },
  {
    title: "Crisis & Irregular Operations",
    desc: "Training and professional guidance related to disruption handling, emergency situations, irregular operations and operational problem solving."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
          <SectionHeading 
            title="Professional Services" 
            subtitle="Specialized consulting and training based on extensive real-world airline and airport experience." 
            centered
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <FadeIn 
              key={service.title} 
              delay={0.1 * (index % 4)} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="text-blue-400/30 text-4xl font-bold font-mono mb-4 group-hover:text-blue-400 transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">{service.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
