import { FadeIn } from './FadeIn';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Consultation
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Looking for Aviation Training, Recruitment or Professional Guidance?
          </h2>
          
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Connect for aviation recruitment support, training, professional grooming, operational guidance and aviation-related services.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.1} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:contact@example.com" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Mail size={20} />
            Contact Me
          </a>
          <a 
            href="https://www.linkedin.com/in/muhammad-junayed-hossain-6378b7214" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-50 text-purple-500 font-medium rounded-xl hover:bg-purple-100 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn Profile
            <ArrowRight size={18} className="ml-1" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
