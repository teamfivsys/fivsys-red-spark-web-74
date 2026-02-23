
import ServiceLayout from '@/components/ServiceLayout';
import { Smartphone } from 'lucide-react';

const AppDevelopment = () => {
  return (
    <ServiceLayout
      title="App Development"
      description="Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
      icon={<Smartphone className="h-16 w-16 text-fivsys-red" />}
      seoTitle="Mobile App Development Kerala | Android & iOS App Developers Kochi, Trivandrum | Fivsys"
      seoDescription="Best mobile app development company in Kerala. Native Android & iOS apps, cross-platform apps with AI integration for businesses in Kochi, Trivandrum, Calicut, Thrissur and all Kerala districts."
      seoKeywords="mobile app development Kerala, app development company Kerala, Android app development Kerala, iOS app development Kerala, app developers Kochi, mobile app development Kochi, app development Trivandrum, cross-platform app development Kerala, React Native Kerala, Flutter app development Kerala, app development company Calicut, cheap app development Kerala, affordable app development Kerala, best app developers Kerala, app development Thrissur, app development Kannur, app development Ernakulam, mobile app development company India"
      features={[
        "Native iOS app development",
        "Native Android app development",
        "Cross-platform app development",
        "UI/UX design for mobile applications",
        "API development and integration",
        "App store submission and optimization",
        "Mobile app testing and quality assurance",
        "App analytics implementation",
        "Push notification systems",
        "In-app purchases and subscription models",
        "Secure authentication and data storage",
        "Ongoing maintenance and updates"
      ]}
      benefits={[
        {
          title: "Expanded Market Reach",
          description: "Reach users on their preferred devices and platforms, expanding your market and creating new revenue opportunities."
        },
        {
          title: "Enhanced User Engagement",
          description: "Create immersive, intuitive experiences that keep users engaged and encourage repeat usage."
        },
        {
          title: "Brand Loyalty",
          description: "Well-designed apps foster brand loyalty and establish your company as an innovator in your industry."
        },
        {
          title: "Streamlined Processes",
          description: "Automate and streamline business processes, increasing efficiency and reducing operational costs."
        },
        {
          title: "Direct Customer Communication",
          description: "Engage directly with customers through push notifications, in-app messaging, and personalized content."
        },
        {
          title: "Valuable Data Insights",
          description: "Gather valuable data on user behavior and preferences to inform business decisions and product improvements."
        }
      ]}
      processSteps={[
        {
          title: "Requirements Analysis",
          description: "We analyze your business requirements, target audience, and technical constraints to define the scope and features of your app."
        },
        {
          title: "UI/UX Design",
          description: "Our designers create wireframes and visual designs that ensure a seamless, intuitive user experience that aligns with your brand identity."
        },
        {
          title: "Development",
          description: "Our development team builds your app using the latest technologies and best practices, ensuring high performance and scalability."
        },
        {
          title: "Testing & Quality Assurance",
          description: "We conduct rigorous testing across multiple devices and scenarios to ensure your app is bug-free and provides a consistent experience."
        },
        {
          title: "Deployment",
          description: "We handle the submission process to app stores, ensuring compliance with all requirements and optimizing for discoverability."
        },
        {
          title: "Post-Launch Support",
          description: "We provide ongoing maintenance, updates, and optimization to ensure your app continues to perform well and meet evolving user needs."
        }
      ]}
      ctaText="Ready to create your mobile app?"
      faqItems={[
        { question: "How much does mobile app development cost in Kerala?", answer: "Mobile app development in Kerala starts from ₹50,000 for a basic app. Cross-platform apps cost ₹1,00,000–₹3,00,000 and native iOS/Android apps cost ₹2,00,000–₹8,00,000 depending on features." },
        { question: "How long does it take to develop a mobile app in Kerala?", answer: "A basic app takes 6–8 weeks. A full-featured cross-platform app takes 10–16 weeks. Enterprise apps with complex features take 4–6 months." },
        { question: "Do you develop Android and iOS apps in Kerala?", answer: "Yes, Fivsys develops native Android apps (Kotlin/Java), native iOS apps (Swift), and cross-platform apps (React Native/Flutter) for businesses in Kochi, Trivandrum, Calicut and across Kerala." },
        { question: "Can you add AI features to a mobile app?", answer: "Yes, Fivsys integrates AI features like chatbots, recommendation engines, image recognition, and natural language processing into mobile apps." },
        { question: "Do you submit apps to Google Play Store and Apple App Store?", answer: "Yes, Fivsys handles the complete app store submission process including optimization for discoverability (ASO) on both Google Play Store and Apple App Store." },
      ]}
      serviceSchema={{
        name: "Mobile App Development Kerala",
        description: "Native Android and iOS app development for businesses in Kerala and India",
        offers: [
          { name: "Basic Mobile App Kerala", price: "50000" },
          { name: "Cross-Platform App Kerala", price: "100000" },
          { name: "Native iOS/Android App Kerala", price: "200000" },
        ]
      }}
    />
  );
};

export default AppDevelopment;
