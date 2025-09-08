// Projects data - Easy to add/update projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'business-automation' | 'ai-agents' | 'content-automation' | 'all';
  image: string; // Path to project image
  technologies: string[];
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const projectsData: Project[] = [
  {
    id: 'social-media-automation',
    title: 'Social Media Automation',
    description: 'Automated content scheduling and posting across multiple platforms',
    longDescription: 'A comprehensive social media automation system that handles content scheduling, posting, and engagement tracking across multiple platforms using AI-powered content optimization.',
    category: 'content-automation',
    image: '/placeholder.svg', // Replace with actual image
    technologies: ['Python', 'n8n', 'LangChain', 'APIs'],
    features: [
      'Multi-platform posting',
      'Content scheduling',
      'Engagement analytics',
      'AI-powered captions'
    ],
    demoUrl: '#',
    status: 'completed'
  },
  {
    id: 'gbp-automation',
    title: 'Google Business Profile Automation',
    description: 'Automated GBP management for HVAC businesses',
    longDescription: 'An intelligent system that automates Google Business Profile management, including review responses, post scheduling, and business information updates for HVAC companies.',
    category: 'business-automation',
    image: '/placeholder.svg',
    technologies: ['Python', 'n8n', 'Google APIs', 'LangChain'],
    features: [
      'Automated review responses',
      'Business post scheduling',
      'Analytics dashboard',
      'Multi-location support'
    ],
    liveUrl: '#',
    status: 'completed'
  },
  {
    id: 'email-automation',
    title: 'End-to-End Email Automation',
    description: 'Complete email workflow automation with AI-powered responses',
    longDescription: 'A sophisticated email automation system that handles everything from lead capture to follow-ups, with AI-powered personalization and response generation.',
    category: 'business-automation',
    image: '/placeholder.svg',
    technologies: ['Python', 'n8n', 'LangChain', 'Email APIs'],
    features: [
      'Lead capture automation',
      'AI-powered responses',
      'Segmentation & personalization',
      'Campaign analytics'
    ],
    demoUrl: '#',
    status: 'completed'
  },
  {
    id: 'mailchimp-feedback-agent',
    title: 'Mailchimp Feedback Agent',
    description: 'AI agent for analyzing and responding to email campaign feedback',
    longDescription: 'An intelligent agent that analyzes Mailchimp campaign performance, collects feedback, and automatically optimizes future campaigns based on insights.',
    category: 'ai-agents',
    image: '/placeholder.svg',
    technologies: ['Python', 'LangChain', 'Mailchimp API', 'NLP'],
    features: [
      'Feedback analysis',
      'Campaign optimization',
      'Automated A/B testing',
      'Performance insights'
    ],
    githubUrl: '#',
    status: 'completed'
  },
  {
    id: 'voice-caller-agent',
    title: 'Voice Caller Agent',
    description: 'AI-powered voice agent for automated customer calls',
    longDescription: 'An advanced voice agent that can make and receive calls, understand customer queries, and provide appropriate responses using natural language processing.',
    category: 'ai-agents',
    image: '/placeholder.svg',
    technologies: ['Python', 'Speech Recognition', 'NLP', 'Twilio'],
    features: [
      'Natural voice conversations',
      'Multi-language support',
      'Call scheduling',
      'Sentiment analysis'
    ],
    demoUrl: '#',
    status: 'completed'
  },
  {
    id: 'custom-website-chatbot',
    title: 'Custom Website Chatbot',
    description: 'Intelligent chatbot for website customer support',
    longDescription: 'A customizable AI chatbot that can be integrated into any website, providing intelligent customer support and lead generation capabilities.',
    category: 'ai-agents',
    image: '/placeholder.svg',
    technologies: ['Python', 'LangChain', 'WebSocket', 'NLP'],
    features: [
      'Custom training',
      'Multi-intent recognition',
      'Lead qualification',
      'Analytics dashboard'
    ],
    liveUrl: '#',
    status: 'completed'
  },
  {
    id: 'youtube-insights-agent',
    title: 'YouTube Insights Agent',
    description: 'AI agent for analyzing YouTube channel performance',
    longDescription: 'An intelligent agent that analyzes YouTube channel metrics, provides content recommendations, and automates video optimization for better reach.',
    category: 'ai-agents',
    image: '/placeholder.svg',
    technologies: ['Python', 'YouTube API', 'LangChain', 'Data Analysis'],
    features: [
      'Performance analytics',
      'Content recommendations',
      'Competitor analysis',
      'SEO optimization'
    ],
    demoUrl: '#',
    status: 'completed'
  },
  {
    id: 'invoice-parser',
    title: 'Invoice Parser',
    description: 'Automated invoice data extraction and processing',
    longDescription: 'An intelligent system that automatically extracts data from invoices in various formats, validates information, and integrates with accounting systems.',
    category: 'business-automation',
    image: '/placeholder.svg',
    technologies: ['Python', 'OCR', 'Machine Learning', 'APIs'],
    features: [
      'Multi-format support',
      'Data validation',
      'Accounting integration',
      'Batch processing'
    ],
    githubUrl: '#',
    status: 'completed'
  },
  {
    id: 'notion-twitter-automation',
    title: 'Notion to Twitter Automation',
    description: 'Automated content publishing from Notion to Twitter',
    longDescription: 'A seamless automation that converts Notion content into Twitter threads, schedules posts, and tracks engagement metrics.',
    category: 'content-automation',
    image: '/placeholder.svg',
    technologies: ['Python', 'Notion API', 'Twitter API', 'n8n'],
    features: [
      'Thread generation',
      'Smart scheduling',
      'Engagement tracking',
      'Content optimization'
    ],
    demoUrl: '#',
    status: 'completed'
  }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

// Helper function to get a single project by ID
export const getProjectById = (id: string) => {
  return projectsData.find(project => project.id === id);
};