import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { 
  Building2, Plane, AlertTriangle, Users, 
  Briefcase, HeartHandshake, Settings, Activity,
  ShieldAlert, BookCheck, ClipboardList, Target
} from 'lucide-react';

const EXPERTISE = [
  { label: "Airport Operations", icon: Building2 },
  { label: "Flight Handling", icon: Plane },
  { label: "Ramp Safety", icon: AlertTriangle },
  { label: "Customer Service", icon: HeartHandshake },
  { label: "Passenger Handling", icon: Users },
  { label: "Staff Training", icon: BookCheck },
  { label: "Team Leadership", icon: Target },
  { label: "Crisis Management", icon: Activity },
  { label: "Operational Planning", icon: ClipboardList },
  { label: "Vendor Coordination", icon: Briefcase },
  { label: "Safety & Compliance", icon: ShieldAlert },
  { label: "Service Excellence", icon: Settings }
];

export function Expertise() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
          <SectionHeading 
            title="Areas of Expertise" 
            centered
          />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {EXPERTISE.map((item, index) => (
            <FadeIn key={item.label} delay={0.05 * (index % 4)} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-400 mb-4">
                <item.icon size={24} />
              </div>
              <span className="font-medium text-slate-800">{item.label}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
