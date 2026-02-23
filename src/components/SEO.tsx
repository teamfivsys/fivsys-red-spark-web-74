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
  serviceSchema?: {
    name: string;
    description: string;
    offers?: Array<{ name: string; price?: string }>;
  };
}

const SEO = ({
  title = 'fivsys | Best Web Design Company in Kerala | Website Development Kochi, Trivandrum, Calicut',
  description = 'fivsys — Kerala\'s #1 Glocal digital agency. Best website development company in Kochi, Trivandrum, Calicut & all Kerala. Affordable web design, SEO, app development, MLM software & digital marketing. AI-powered solutions. Starting ₹15,000. കേരള വെബ്സൈറ്റ് കമ്പനി.',
  keywords = 'best web design company in Kerala, website development company in Kerala, affordable website design Kerala, web developers Kochi, web design Kochi Ernakulam, web development Trivandrum, web design Calicut Kozhikode, web agency Thrissur, web design Kannur, website company Kollam, web design Malappuram, web design Palakkad, WordPress developer Kerala, e-commerce website Kerala, SEO company Kerala, SEO services Kochi, SEO expert Kerala, Google ranking Kerala, local SEO Kerala, digital marketing Kerala, Google Ads Kerala, Facebook marketing Kerala, app development Kerala, mobile app development Kochi, MLM software Kerala, social media marketing Kerala, branding agency Kerala, IT company Kerala, best digital agency Kerala, AI web development Kerala, website design Kottayam, web design Idukki, web design Wayanad, web design Kasaragod, website development Alappuzha, web design Pathanamthitta, affordable web design India, web design company India, best IT company Kerala 2025, top web agency Kerala, cheap website Kerala, website maker Kerala, online business Kerala, digital transformation Kerala, കേരള വെബ്സൈറ്റ് കമ്പനി, കേരള SEO സർവീസ്, ഡിജിറ്റൽ മാർക്കറ്റിംഗ് കേരളം, കൊച്ചി വെബ് ഡിസൈൻ',
  image = 'https://fivsys.com/og-image.jpg',
  type = 'website',
  schemaType = 'WebPage',
  faqItems = [],
  serviceSchema,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://fivsys.com${location.pathname}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "fivsys",
    "alternateName": ["Fivsys", "fivsys.com", "Fivsys Digital Agency Kerala"],
    "url": "https://fivsys.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fivsys.com/favicon.png",
      "width": 512,
      "height": 512
    },
    "description": "Kerala's best website development company offering AI-powered web design, SEO services, app development, MLM software and digital marketing across Kochi, Trivandrum, Calicut and all India.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Olap House, Near Balabadhra Temple, Perandoor, Elamakara",
      "addressLocality": "Ernakulam",
      "addressRegion": "Kerala",
      "postalCode": "682026",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7356137106",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Malayalam", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "email": "teamfivsys@gmail.com",
        "contactType": "sales"
      }
    ],
    "sameAs": [
      "https://facebook.com/fivsys",
      "https://twitter.com/fivsys",
      "https://instagram.com/fivsys",
      "https://linkedin.com/company/fivsys"
    ],
    "knowsAbout": [
      "Web Development",
      "Website Design",
      "Search Engine Optimization",
      "Digital Marketing",
      "Mobile App Development",
      "MLM Software Development",
      "Social Media Marketing",
      "AI Integration",
      "E-commerce Development",
      "Branding and Logo Design"
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "fivsys",
    "alternateName": "fivsys.com — Glocal Digital Agency Kerala",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services by fivsys",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development Kerala",
            "description": "Custom website design and development starting from ₹15,000"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "15000",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services Kerala",
            "description": "Search engine optimization to rank #1 on Google"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development Kerala",
            "description": "Android and iOS app development for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing Kerala",
            "description": "Google Ads, Facebook Ads, and social media marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MLM Software Development Kerala",
            "description": "Custom MLM and network marketing software solutions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "fivsys",
    "alternateName": "fivsys — Kerala's Best Digital Agency",
    "url": "https://fivsys.com",
    "description": "Kerala's best web design, SEO, and digital marketing agency. AI-powered solutions for businesses in Kochi, Trivandrum, Calicut and all India.",
    "inLanguage": ["en-IN", "ml"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fivsys.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": title,
    "description": description,
    "url": currentUrl,
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://fivsys.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "fivsys",
      "url": "https://fivsys.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fivsys.com/favicon.png"
      }
    }
  };

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

  const serviceSchemaLD = serviceSchema ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceSchema.name,
    "description": serviceSchema.description,
    "provider": {
      "@type": "Organization",
      "name": "fivsys",
      "url": "https://fivsys.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Kerala",
      "addressCountry": "IN"
    },
    ...(serviceSchema.offers ? {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": serviceSchema.name,
        "itemListElement": serviceSchema.offers.map(offer => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": offer.name
          },
          ...(offer.price ? {
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": offer.price,
              "priceCurrency": "INR"
            }
          } : {})
        }))
      }
    } : {})
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Ernakulam, Kerala, India" />
      <meta name="geo.position" content="10.0159;76.3419" />
      <meta name="ICBM" content="10.0159, 76.3419" />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="fivsys" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@fivsys" />

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
      {serviceSchemaLD && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchemaLD)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
