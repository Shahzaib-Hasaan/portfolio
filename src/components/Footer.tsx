import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © 2025 Shahzaib Hassan. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-muted-foreground text-center md:text-right flex items-center gap-1">
            Made with <Heart size={16} className="text-primary" fill="currentColor" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;