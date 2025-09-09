import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { profileData } from '@/data/profileData';

const Hero = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const text = profileData.tagline;
    const element = typewriterRef.current;
    if (!element) return;

    // Display the full text immediately instead of typewriter effect
    element.textContent = text;
  }, []);

  return (
    <section id="home" className="min-h-[95vh] flex items-center justify-center relative overflow-hidden pt-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-glow" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-10 rounded-full bg-gradient-to-br from-primary to-accent p-1.5 animate-fadeIn shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:scale-105 overflow-hidden profile-image-container">
            <img
              src={profileData.profileImage}
              alt={profileData.name + " profile"}
              className="rounded-full bg-background border-4 border-background"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-3 animate-fadeInUp">
            Hi, I'm <span className="text-gradient">{profileData.name.split(' ')[0]}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <span className="relative inline-block">
              <span className="absolute -inset-1 -skew-y-3 bg-primary/10 rounded-lg" aria-hidden="true"></span>
              <span className="relative">{profileData.title}</span>
            </span>
          </p>

          <div className="min-h-[60px] mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="typewriter-container">
              <span ref={typewriterRef} className="text-lg md:text-xl typewriter max-w-full"></span>
            </div>
          </div>

          <div className="flex gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <a href="#portfolio" className="btn-primary relative overflow-hidden group px-5 py-2 rounded-lg text-sm">
              <span className="absolute inset-0 w-0 bg-accent/20 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                View My Work
              </span>
            </a>
            <a href="#contact" className="btn-secondary relative overflow-hidden group px-5 py-2 rounded-lg text-sm">
              <span className="absolute inset-0 w-0 bg-primary/20 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Get In Touch
              </span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;