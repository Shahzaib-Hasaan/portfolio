import { useRef, useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';

const TechStack = () => {
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

  const technologies = [
    { name: 'Python', category: 'Language', level: 95, icon: '/icons/python.svg' },
    { name: 'n8n', category: 'Automation', level: 95, icon: '/icons/n8n.ico' },
    { name: 'LangChain', category: 'AI Framework', level: 90, icon: '/icons/langchain.svg' },
    { name: 'Make.com', category: 'Automation', level: 85, icon: '/icons/make.svg' },
    { name: 'Zapier', category: 'Automation', level: 80, icon: '/icons/zapier.svg' },
    { name: 'Selenium', category: 'Testing', level: 75, icon: '/icons/selenium.svg' },
    { name: 'Machine Learning', category: 'AI', level: 85, icon: '/icons/machine-learning.png' },
    { name: 'Deep Learning', category: 'AI', level: 80, icon: '/icons/deep-learning.png' },
    { name: 'NLP', category: 'AI', level: 85, icon: '/icons/nlp.png' },
    { name: 'RAG', category: 'AI', level: 80, icon: '/icons/rag.png' },
    { name: 'Scikit-Learn', category: 'ML Library', level: 70, icon: '/icons/scikit-learn.svg' },
    { name: 'TensorFlow', category: 'ML Library', level: 75, icon: '/icons/tensorflow.png' },
  ];

  // Additional skills with emojis
  const additionalSkills = [
    { 
      name: 'Teaching & Mentorship', 
      icon: '👨‍🏫', // Teacher emoji
      description: 'Experience teaching Python, AI, and automation concepts'
    },
    { 
      name: 'Problem-Solving', 
      icon: '🧩', // Puzzle piece emoji
      description: 'Breaking down complex problems into automated solutions'
    },
    { 
      name: 'Communication', 
      icon: '💬', // Speech bubble emoji
      description: 'Clear technical communication and documentation'
    }
  ];

  return (
    <section id="stack" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent automation solutions
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`glass rounded-lg p-6 text-center hover:bg-card/50 transition-all duration-300 group ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} icon`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{tech.category}</p>
                
                {/* Skill level bar */}
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                    style={{ 
                      width: isVisible ? `${tech.level}%` : '0%',
                      transitionDelay: `${index * 0.05}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Additional <span className="text-gradient">Skills</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalSkills.map((skill) => (
                <div key={skill.name} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;