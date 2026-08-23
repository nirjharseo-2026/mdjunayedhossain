import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';

const CAREER_DATA = [
  {
    role: "Assistant Manager",
    company: "Air India Ltd. / GSA-MAAS Travel and Tours Ltd.",
    date: "November 2024 – Present",
    details: [
      "Airside and groundside operations",
      "Flight handling & Load-control supervision",
      "Staff management, safety and security",
      "Training programs & Vendor coordination",
      "Airport authority coordination & Operational reporting"
    ]
  },
  {
    role: "Senior Supervisor",
    company: "Vistara / TATA SIA Airlines Ltd.",
    date: "January 2024 – November 2024",
    details: ["Oversaw station operations, ensuring seamless flight handling and adherence to strict safety protocols."]
  },
  {
    role: "Supervisor – Customer Service",
    company: "Thai Airways International PCL",
    date: "June 2022 – December 2023",
    details: ["Managed customer service teams, coordinating passenger handling, disruptions, and delivering service excellence."]
  },
  {
    role: "Supervisor – Customer Service",
    company: "Jazeera Airways",
    date: "December 2021 – May 2022",
    details: ["Led daily shift operations, supervising check-in, boarding, and irregular operations handling."]
  },
  {
    role: "Senior Customer Services Officer",
    company: "Singapore Airlines Ltd.",
    date: "May 2009 – December 2020",
    details: ["More than a decade of providing premium customer service, operational support, and flight handling."]
  }
];

export function CareerTimeline() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
          <SectionHeading 
            title="Career Journey" 
            subtitle="A trajectory of growth from customer service excellence to management and operational leadership."
          />
        </FadeIn>

        <div className="relative max-w-4xl border-l border-slate-200 ml-4 md:ml-8">
          {CAREER_DATA.map((job, index) => (
            <FadeIn key={index} delay={0.1 * index} className="mb-12 relative pl-8 md:pl-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-sm" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-900">{job.role}</h3>
                <span className="text-sm font-medium text-blue-500 bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {job.date}
                </span>
              </div>
              
              <h4 className="text-lg text-slate-700 font-medium mb-4">{job.company}</h4>
              
              <ul className="space-y-2">
                {job.details.map((detail, idx) => (
                  <li key={idx} className="text-slate-600 flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
