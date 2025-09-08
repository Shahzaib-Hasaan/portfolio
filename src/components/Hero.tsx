import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { profileData } from '@/data/profileData';

const Hero = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const text = profileData.tagline;
    const element = typewriterRef.current;
    if (!element) return;

    let index = 0;
    element.textContent = '';

    const typeWriter = () => {
      if (index < text.length) {
        element.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 50);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-glow" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-fadeIn">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold text-gradient">SH</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInUp">
            Hi, I'm <span className="text-gradient">{profileData.name.split(' ')[0]}</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {profileData.title}
          </p>

          <div className="min-h-[80px] mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <span ref={typewriterRef} className="text-lg md:text-xl text-foreground/80 typewriter inline-block max-w-full"></span>
          </div>

          <div className="flex gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <a href="#portfolio" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;