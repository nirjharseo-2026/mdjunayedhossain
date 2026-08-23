export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-slate-900 mb-1">Muhammad Junayed Hossain</h3>
            <p className="text-sm text-slate-500">Aviation Operations & Airport Services Professional</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <a href="https://www.linkedin.com/in/muhammad-junayed-hossain-6378b7214" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} Muhammad Junayed Hossain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
