import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  schemaType?: 'WebPage' | 'Service' | 'AboutPage' | 'ContactPage' | 'FAQPage';
  faqItems?: Array<{ question: string; answer: string }>;
}

const SEO = ({
  title = 'fivsys | Website Development Company in Kerala | Web Design & SEO Kerala',
  description = 'Leading website development company in Kerala offering affordable web design, SEO services, and digital marketing in Kochi, Trivandrum, Calicut. കേരള വെബ്സൈറ്റ് കമ്പനി. AI-powered solutions for Indian businesses.',
  keywords = 'best web design company in Kerala, website development company in Kerala, affordable website design Kerala, web developers Kochi, web design Kochi, web development Trivandrum, web design Calicut Kozhikode, web agency Thrissur, web design Kannur, website company Kollam Ernakulam, web design Malappuram Palakkad, WordPress developer Kerala, e-commerce website Kerala, SEO company Kerala, SEO services Kochi, SEO expert Kerala, Google ranking Kerala, local SEO Kerala, digital marketing Kerala, Google Ads Kerala, Facebook marketing Kerala, app development Kerala, mobile app development Kochi, MLM software Kerala, social media marketing Kerala, branding agency Kerala, IT company Kerala, best digital agency Kerala, കേരള വെബ്സൈറ്റ് കമ്പനി, കേരള SEO സർവീസ്, ഡിജിറ്റൽ മാർക്കറ്റിംഗ് കേരളം',
  image = 'https://fivsys.com/assets/social-preview.jpg',
  type = 'website',
  schemaType = 'WebPage',
  faqItems = [],
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://fivsys.com${location.pathname}`;

  // Organization Schema with Kerala areaServed
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "fivsys",
    "url": "https://fivsys.com",
    "logo": "https://fivsys.com/favicon.ico",
    "description": "Kerala's trusted website development company offering AI-powered web design, SEO services, and digital marketing across Kochi, Trivandrum, Calicut and all India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Olap House, Near Balabadhra Temple, Perandoor, Elamakara",
      "addressLocality": "Ernakulam",
      "addressRegion": "Kerala",
      "postalCode": "682026",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7356137106",
      "contactType": "Customer Service",
      "email": "teamfivsys@gmail.com"
    },
    "sameAs": [
      "https://facebook.com/fivsys",
      "https://twitter.com/fivsys",
      "https://instagram.com/fivsys",
      "https://linkedin.com/company/fivsys"
    ],
    "areaServed": [
      { "@type": "State", "name": "Kerala", "addressCountry": "IN" },
      { "@type": "City", "name": "Kochi", "addressCountry": "IN" },
      { "@type": "City", "name": "Ernakulam", "addressCountry": "IN" },
      { "@type": "City", "name": "Thiruvananthapuram", "addressCountry": "IN" },
      { "@type": "City", "name": "Kozhikode", "addressCountry": "IN" },
      { "@type": "City", "name": "Thrissur", "addressCountry": "IN" },
      { "@type": "City", "name": "Kannur", "addressCountry": "IN" },
      { "@type": "City", "name": "Kollam", "addressCountry": "IN" },
      { "@type": "City", "name": "Alappuzha", "addressCountry": "IN" },
      { "@type": "City", "name": "Palakkad", "addressCountry": "IN" },
      { "@type": "City", "name": "Malappuram", "addressCountry": "IN" },
      { "@type": "City", "name": "Kottayam", "addressCountry": "IN" },
      { "@type": "City", "name": "Idukki", "addressCountry": "IN" },
      { "@type": "City", "name": "Wayanad", "addressCountry": "IN" },
      { "@type": "City", "name": "Kasaragod", "addressCountry": "IN" },
      { "@type": "City", "name": "Pathanamthitta", "addressCountry": "IN" },
      { "@type": "City", "name": "Bangalore", "addressCountry": "IN" },
      { "@type": "City", "name": "Chennai", "addressCountry": "IN" },
      { "@type": "City", "name": "Mumbai", "addressCountry": "IN" },
      { "@type": "City", "name": "Delhi", "addressCountry": "IN" },
      { "@type": "Country", "name": "India" }
    ]
  };

  // LocalBusiness Schema with Kerala areaServed
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "fivsys",
    "alternateName": "fivsys.com - Glocal Digital Agency Kerala",
    "image": image,
    "description": "Kerala's premier Glocal digital agency offering AI-powered web development, app development, MLM solutions, SEO, and digital marketing in Kochi, Trivandrum, Kozhikode, Thrissur and globally.",
    "@id": "https://fivsys.com",
    "url": "https://fivsys.com",
    "telephone": "+91-7356137106",
    "email": "teamfivsys@gmail.com",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "UPI, Bank Transfer, Credit Card, Debit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Olap House, Near Balabadhra Temple, Perandoor, Elamakara",
      "addressLocality": "Ernakulam",
      "addressRegion": "Kerala",
      "postalCode": "682026",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.0159",
      "longitude": "76.3419"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "serviceType": [
      "Website Development Kerala",
      "Web Design Kochi",
      "Web Design Trivandrum",
      "Web Design Calicut",
      "Mobile App Development Kerala",
      "Android App Development Kerala",
      "iOS App Development Kerala",
      "MLM Software Development Kerala",
      "SEO Services Kerala",
      "Local SEO Kerala",
      "Google Ads Kerala",
      "Digital Marketing Kerala",
      "Social Media Marketing Kerala",
      "Instagram Marketing Kerala",
      "Facebook Ads Kerala",
      "E-commerce Website Kerala",
      "Branding Agency Kerala",
      "Web App Development Kerala"
    ],
    "areaServed": [
      { "@type": "State", "name": "Kerala", "addressCountry": "IN" },
      { "@type": "City", "name": "Kochi", "addressCountry": "IN" },
      { "@type": "City", "name": "Ernakulam", "addressCountry": "IN" },
      { "@type": "City", "name": "Thiruvananthapuram", "addressCountry": "IN" },
      { "@type": "City", "name": "Kozhikode", "addressCountry": "IN" },
      { "@type": "City", "name": "Thrissur", "addressCountry": "IN" },
      { "@type": "City", "name": "Kannur", "addressCountry": "IN" },
      { "@type": "City", "name": "Kollam", "addressCountry": "IN" },
      { "@type": "City", "name": "Alappuzha", "addressCountry": "IN" },
      { "@type": "City", "name": "Palakkad", "addressCountry": "IN" },
      { "@type": "City", "name": "Malappuram", "addressCountry": "IN" },
      { "@type": "City", "name": "Kottayam", "addressCountry": "IN" },
      { "@type": "City", "name": "Idukki", "addressCountry": "IN" },
      { "@type": "City", "name": "Wayanad", "addressCountry": "IN" },
      { "@type": "City", "name": "Kasaragod", "addressCountry": "IN" },
      { "@type": "City", "name": "Pathanamthitta", "addressCountry": "IN" },
      { "@type": "City", "name": "Bangalore", "addressCountry": "IN" },
      { "@type": "City", "name": "Chennai", "addressCountry": "IN" },
      { "@type": "Country", "name": "India" }
    ],
    "sameAs": [
      "https://facebook.com/fivsys",
      "https://twitter.com/fivsys",
      "https://instagram.com/fivsys",
      "https://linkedin.com/company/fivsys"
    ]
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

  // FAQ Schema
  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
