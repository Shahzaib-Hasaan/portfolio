import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title = "Shahzaib Hassan | AI & Automation Specialist",
  description = "AI & Automation Specialist, Co-founder at NeuraFinity. Building intelligent agents that automate business operations with cutting-edge AI solutions.",
  keywords = "AI specialist, automation expert, Python developer, machine learning, AI agents, NeuraFinity, TensorFlow, PyTorch, LangChain, n8n, web development",
  image = "/og-image.jpg",
  url = "https://shahzaibhassan.com"
}: SEOProps) => {
  const fullTitle = title;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shahzaib Hassan" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shahzaib Hassan",
          "jobTitle": "AI & Automation Specialist",
          "affiliation": {
            "@type": "Organization",
            "name": "NeuraFinity"
          },
          "url": url,
          "sameAs": [
            "https://github.com/shahzaibhassan",
            "https://linkedin.com/in/shahzaibhassan"
          ],
          "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Automation", "Python", "Web Development"]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;