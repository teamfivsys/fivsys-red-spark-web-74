
import ServiceLayout from '@/components/ServiceLayout';
import { Globe } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <ServiceLayout
      title="Web Development"
      description="Custom AI-powered websites designed to convert visitors into customers. As a leading web design company Kerala, we offer affordable website design for businesses across Kochi, Trivandrum, and Calicut."
      icon={<Globe className="h-16 w-16 text-fivsys-red" />}
      seoTitle="Web Development Kerala | Website Development Company Kochi, Trivandrum | Fivsys"
      seoDescription="Leading web design company Kerala offering affordable website design, WordPress development, and e-commerce solutions. Trusted web developers Kochi and Trivandrum businesses rely on. കേരള വെബ്സൈറ്റ് കമ്പനി."
      seoKeywords="website development company in Kerala, web design company Kerala, affordable website design Kerala, WordPress developer Kerala, e-commerce website Kerala, web developers Kochi, web development Trivandrum, web design Calicut, കേരള വെബ്സൈറ്റ് കമ്പനി, കൊച്ചി വെബ് ഡിസൈൻ"
      features={[
        "Custom website design and development",
        "Responsive and mobile-friendly layouts",
        "Content management systems (WordPress, Headless CMS)",
        "E-commerce solutions",
        "Progressive Web Applications (PWAs)",
        "Search engine optimization (SEO)",
        "Performance optimization",
        "Website maintenance and support",
        "AI-powered features and automations",
        "Integration with third-party platforms",
        "Accessibility compliance",
        "Analytics implementation"
      ]}
      benefits={[
        {
          title: "Enhanced Brand Presence",
          description: "Create a powerful first impression with a visually stunning and professional website that reflects your brand identity."
        },
        {
          title: "Increased Conversions",
          description: "Strategically designed websites that guide visitors through the customer journey and optimize for conversions."
        },
        {
          title: "Improved User Experience",
          description: "Intuitive navigation and seamless functionality that keeps visitors engaged and encourages them to take action."
        },
        {
          title: "Mobile Optimization",
          description: "Fully responsive designs that provide an exceptional experience across all devices and screen sizes."
        },
        {
          title: "Faster Loading Times",
          description: "Performance-optimized websites that load quickly, reducing bounce rates and improving search rankings."
        },
        {
          title: "Better Search Visibility",
          description: "SEO-friendly code structure and content organization that helps your website rank higher in search results."
        }
      ]}
      processSteps={[
        {
          title: "Discovery & Planning",
          description: "We start by understanding your business goals, target audience, and requirements. This phase includes market research, competitor analysis, and defining project scope and timeline."
        },
        {
          title: "Design & Prototyping",
          description: "Our design team creates wireframes and visual designs that align with your brand identity. We develop interactive prototypes to visualize the user experience before development begins."
        },
        {
          title: "Development & Testing",
          description: "Our developers bring the designs to life using the latest technologies and best practices. Rigorous testing ensures the website works flawlessly across all devices and browsers."
        },
        {
          title: "Deployment & Launch",
          description: "Once approved, we deploy your website to a production environment and conduct final checks to ensure everything is working correctly before launch."
        },
        {
          title: "Ongoing Support & Optimization",
          description: "We provide ongoing maintenance, updates, and optimizations to keep your website secure, performing well, and aligned with your evolving business needs."
        }
      ]}
      ctaText="Ready to build a website that converts?"
    />
  );
};

export default WebDevelopment;
