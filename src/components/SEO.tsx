import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  schemaType?: 'WebPage' | 'Service' | 'AboutPage' | 'ContactPage';
}

const SEO = ({
  title = 'fivsys | AI-Powered Development & Marketing Solutions',
  description = 'Transform your business with fivsys AI-powered website development, app development, web solutions, digital marketing, and sales strategy services.',
  keywords = 'AI development, website development, app development, web applications, digital marketing, social media marketing, sales strategy, AI-powered solutions',
  image = 'https://lovable.dev/opengraph-image-p98pqg.png',
  type = 'website',
  schemaType = 'WebPage',
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://fivsys.com${location.pathname}`;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "fivsys",
    "url": "https://fivsys.com",
    "logo": "https://fivsys.com/favicon.ico",
    "description": "AI-Powered Development & Marketing Solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Goondhu -2, Behind Sreenidhi Regency, Sri Ganesh PG Road, Kasavanhalli",
      "addressLocality": "Sarjapura, Bangalore",
      "postalCode": "560035",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7356137106",
      "contactType": "Customer Service",
      "email": "info@fivsys.com"
    },
    "sameAs": [
      "https://facebook.com/fivsys",
      "https://twitter.com/fivsys",
      "https://instagram.com/fivsys",
      "https://linkedin.com/company/fivsys"
    ]
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "fivsys",
    "image": image,
    "description": description,
    "@id": "https://fivsys.com",
    "url": "https://fivsys.com",
    "telephone": "+91-7356137106",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Goondhu -2, Behind Sreenidhi Regency, Sri Ganesh PG Road, Kasavanhalli",
      "addressLocality": "Sarjapura, Bangalore",
      "postalCode": "560035",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "fivsys",
    "url": "https://fivsys.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fivsys.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Page-specific Schema
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": title,
    "description": description,
    "url": currentUrl,
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://fivsys.com"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="fivsys" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
