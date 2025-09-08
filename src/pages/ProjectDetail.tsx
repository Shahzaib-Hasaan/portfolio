import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Globe } from 'lucide-react';
import { getProjectById } from '@/data/projectsData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Button onClick={() => navigate('/portfolio')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Project Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Project Header */}
        <div className="mb-8">
          <Badge className="mb-4">{project.category.replace('-', ' ')}</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                View Live
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="outline" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Demo
              </a>
            </Button>
          )}
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {/* Overview */}
          {project.longDescription && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </section>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technologies */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Status */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Project Status</h2>
            <Badge
              variant={
                project.status === 'completed'
                  ? 'default'
                  : project.status === 'in-progress'
                  ? 'secondary'
                  : 'outline'
              }
            >
              {project.status.replace('-', ' ')}
            </Badge>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;