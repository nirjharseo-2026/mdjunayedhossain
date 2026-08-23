import { FadeIn } from './FadeIn';
import { ArrowRight, PlaneTakeoff } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Aviation abstract lines */}
      <div className="absolute -right-[10%] top-[20%] w-[50%] h-[1px] bg-slate-300 transform -rotate-12 z-0" />
      <div className="absolute -right-[5%] top-[25%] w-[40%] h-[1px] bg-slate-300 transform -rotate-12 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/50 border border-purple-200 text-purple-600 text-sm font-medium mb-8">
                <PlaneTakeoff size={16} />
                <span>Aviation Operations & Airport Services Professional</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                <span className="block whitespace-nowrap">Efficient & Exceptional</span>
                <span className="block text-purple-400 whitespace-nowrap">Airport Operations.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                Experienced aviation professional specializing in airport operations, flight handling, customer service, safety compliance, team leadership and aviation workforce development.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-wrap items-center gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-slate-900 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
              >
                Get in Touch
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="relative hidden lg:flex justify-end lg:pl-10">
            <div className="relative w-full max-w-[440px] rounded-3xl overflow-hidden shadow-2xl bg-white group border-4 border-white">
              {/* Note: You can replace this src with an actual photo of Muhammad Junayed Hossain */}
              <img 
                src="https://trwvchuwlicymvveabmt.supabase.co/storage/v1/object/public/mdjunayedhossain/junayedhossain.jpeg" 
                alt="Muhammad Junayed Hossain" 
                className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
            
            {/* Decorative abstract elements behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-100/60 rounded-full blur-3xl -z-10" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-[bounce_3s_ease-in-out_infinite]">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-400 font-bold text-xl">
                15+
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Years Experience</p>
                <p className="text-xs text-slate-500">In Aviation Industry</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
