import { FadeIn } from './FadeIn';

export function Philosophy() {
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-white">
            "Safe Operations. <span className="text-blue-300">Strong Teams.</span> Exceptional Service."
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-8 text-center text-slate-300">
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">Operational Discipline</h3>
              <p className="text-sm leading-relaxed">Maintaining rigorous safety standards and continuous improvement in all flight and ground handling procedures.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">People Development</h3>
              <p className="text-sm leading-relaxed">Building empowered teams through comprehensive training, grooming, and strong collaborative leadership.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">Customer Experience</h3>
              <p className="text-sm leading-relaxed">Delivering premium service excellence and rapid, effective resolution during operational disruptions.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
