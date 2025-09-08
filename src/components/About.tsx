import { useEffect, useRef, useState } from 'react';
import { BookOpen, Code, Sparkles } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      icon: BookOpen,
      title: 'AI/Python Instructor',
      period: 'June 2024 - Present',
      description: 'Teaching practical labs on Python, NLP, EDA, and GANs. Empowering students with hands-on AI knowledge.',
    },
    {
      icon: Code,
      title: 'AI & Automation Specialist',
      period: 'March 2025 - August 2025',
      description: 'Building systems for lead generation and GBP automation for HVAC businesses using n8n, LangChain, and Python.',
    },
    {
      icon: Sparkles,
      title: 'Building Robust Solutions',
      period: 'Ongoing',
      description: 'Creating adaptable, impactful AI solutions grounded in classical AI principles for real-world applications.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Bridging the gap between AI innovation and practical automation
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm an AI Automation Developer with expertise in designing systems that optimize workflows 
                using Python, AI agents, n8n, and LangChain. Currently pursuing my BS in Artificial Intelligence 
                at Islamia University of Bahawalpur with a CGPA of 3.65.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My approach combines classical AI principles with modern automation tools to create robust, 
                scalable solutions that deliver real business value. From social media automation to voice 
                caller agents, I specialize in building intelligent systems that reduce manual effort and 
                increase efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="glass px-6 py-3 rounded-lg">
                  <span className="text-primary font-semibold">3.65</span>
                  <span className="text-muted-foreground ml-2">CGPA</span>
                </div>
                <div className="glass px-6 py-3 rounded-lg">
                  <span className="text-primary font-semibold">9+</span>
                  <span className="text-muted-foreground ml-2">Projects</span>
                </div>
                <div className="glass px-6 py-3 rounded-lg">
                  <span className="text-primary font-semibold">2+</span>
                  <span className="text-muted-foreground ml-2">Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
              <div className="relative glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-lg">BS in Artificial Intelligence</h4>
                    <p className="text-muted-foreground">Islamia University of Bahawalpur</p>
                    <p className="text-sm text-muted-foreground">2022 - 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <h3 className="text-3xl font-bold text-center mb-12">
              My <span className="text-gradient">Journey</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="glass rounded-xl p-6 h-full hover:bg-card/50 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="text-primary-foreground" size={24} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-primary mb-3">{item.period}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;