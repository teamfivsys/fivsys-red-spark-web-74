
import ServiceLayout from '@/components/ServiceLayout';
import { Globe } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <ServiceLayout
      title="Web Development"
      description="Custom AI-powered websites designed to convert visitors into customers. As a leading web design company Kerala, we offer affordable website design for businesses across Kochi, Trivandrum, and Calicut."
      icon={<Globe className="h-16 w-16 text-fivsys-red" />}
      seoTitle="Best Web Design Company in Kerala | Website Development Kochi, Trivandrum, Calicut | Fivsys"
      seoDescription="Best website development company in Kerala. Affordable web design, WordPress, e-commerce & business websites for Kochi, Trivandrum, Calicut, Thrissur, Kannur, Kollam and all Kerala districts. Starting ₹15,000. കേരള വെബ്സൈറ്റ് കമ്പനി."
      seoKeywords="best web design company in Kerala, website development company Kerala, affordable website design Kerala, cheap website design Kerala, website development Kochi, web design Kochi, web developers Kochi Ernakulam, website development Trivandrum, web design Trivandrum, web development Calicut Kozhikode, web design Thrissur, web design Kannur, website company Kollam, web design Malappuram, web design Palakkad, WordPress developer Kerala, e-commerce website Kerala, business website design Kerala, landing page design Kerala, static website Kerala, dynamic website Kerala, responsive website Kerala, SEO friendly website Kerala, website redesign Kerala, കേരള വെബ്സൈറ്റ് കമ്പനി, കൊച്ചി വെബ് ഡിസൈൻ, കേരള വെബ് ഡെവലപ്മെന്റ്"
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
      faqItems={[
        { question: "How much does website development cost in Kerala?", answer: "Website development in Kerala starts from ₹15,000 for basic websites. Business websites range from ₹50,000–₹2,00,000 and e-commerce websites from ₹75,000. Fivsys offers transparent pricing with no hidden costs." },
        { question: "How long does it take to build a website in Kerala?", answer: "A basic website takes 1–2 weeks. A business website takes 3–5 weeks and an e-commerce website takes 6–10 weeks. Timelines depend on complexity and content readiness." },
        { question: "Do you build websites for all Kerala districts?", answer: "Yes, Fivsys builds websites for businesses across all 14 Kerala districts including Kochi, Trivandrum, Calicut, Thrissur, Kannur, Kollam, Malappuram, Palakkad, Kottayam, Alappuzha, Idukki, Wayanad, Kasaragod, and Pathanamthitta." },
        { question: "Is SEO included in website development?", answer: "Yes, all websites built by Fivsys include on-page SEO optimization, fast-loading code, mobile responsiveness, and Google Analytics integration as standard." },
        { question: "Do you build WordPress websites in Kerala?", answer: "Yes, Fivsys builds WordPress websites, custom HTML/CSS sites, React-based websites, and e-commerce stores on WooCommerce and Shopify for Kerala businesses." },
      ]}
      serviceSchema={{
        name: "Website Development Kerala",
        description: "Custom website design and development for businesses in Kerala and India",
        offers: [
          { name: "Basic Website Kerala", price: "15000" },
          { name: "Business Website Kerala", price: "50000" },
          { name: "E-commerce Website Kerala", price: "75000" },
        ]
      }}
    />
  );
};

export default WebDevelopment;
