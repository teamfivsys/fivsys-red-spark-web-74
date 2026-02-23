
import ServiceLayout from '@/components/ServiceLayout';
import { TrendingUp } from 'lucide-react';

const SalesStrategy = () => {
  return (
    <ServiceLayout
      title="Sales Strategy"
      description="Comprehensive sales strategies that convert leads into loyal customers and maximize revenue growth."
      icon={<TrendingUp className="h-16 w-16 text-fivsys-red" />}
      seoTitle="Sales Strategy & Lead Generation Services Kerala | CRM & Business Growth | Fivsys"
      seoDescription="Expert sales strategy consulting for Kerala businesses. Lead generation, CRM setup, sales funnel design & B2B sales optimization for companies in Kochi, Trivandrum, Calicut and across Kerala."
      seoKeywords="sales strategy Kerala, lead generation Kerala, lead generation Kochi, CRM implementation Kerala, sales funnel Kerala, business growth Kerala, B2B sales Kerala, sales consulting Kerala, sales optimization Kochi, MLM lead generation Kerala, sales automation Kerala, WhatsApp lead generation Kerala, sales training Kerala, revenue growth Kerala, business development Kerala, startup sales Kerala, sales strategy Trivandrum"
      features={[
        "Sales Process Development",
        "Sales Funnel Optimization",
        "CRM Implementation and Optimization",
        "Sales Team Training and Coaching",
        "Lead Generation Strategies",
        "Lead Qualification Frameworks",
        "Sales and Marketing Alignment",
        "Sales Analytics and Reporting",
        "Pricing Strategy",
        "Sales Forecasting",
        "Customer Retention Strategies",
        "Sales Automation Implementation"
      ]}
      benefits={[
        {
          title: "Increased Revenue Growth",
          description: "Implement proven strategies that increase conversion rates, average deal size, and overall revenue performance."
        },
        {
          title: "Shortened Sales Cycles",
          description: "Streamline your sales process to reduce time-to-close and increase efficiency across your sales operation."
        },
        {
          title: "Higher Conversion Rates",
          description: "Optimize each stage of your sales funnel to convert more prospects into customers at every opportunity."
        },
        {
          title: "Improved Lead Quality",
          description: "Focus your sales efforts on high-quality leads with greater purchase intent and shorter closing timelines."
        },
        {
          title: "Enhanced Customer Relationships",
          description: "Build stronger, more valuable customer relationships that lead to increased loyalty and lifetime value."
        },
        {
          title: "Data-Driven Decision Making",
          description: "Leverage sales analytics to make informed decisions about resource allocation, targeting, and strategy adjustments."
        }
      ]}
      processSteps={[
        {
          title: "Sales Assessment",
          description: "We analyze your current sales processes, team performance, CRM usage, and results to identify strengths, weaknesses, and opportunities."
        },
        {
          title: "Strategy Development",
          description: "We create a customized sales strategy aligned with your business goals, market position, and customer journey."
        },
        {
          title: "Process Implementation",
          description: "We help implement new sales methodologies, tools, and processes designed to increase efficiency and results."
        },
        {
          title: "Team Training",
          description: "We provide training and coaching to ensure your sales team has the skills, knowledge, and techniques to execute the strategy effectively."
        },
        {
          title: "Technology Integration",
          description: "We help select, implement, and optimize sales technologies and CRM systems to support your sales strategy and improve efficiency."
        },
        {
          title: "Performance Monitoring",
          description: "We establish key performance indicators and reporting frameworks to track progress and make data-driven adjustments."
        },
        {
          title: "Continuous Optimization",
          description: "We provide ongoing support and recommendations to refine your sales strategy based on results, feedback, and changing market conditions."
        }
      ]}
      ctaText="Ready to transform your sales performance?"
      faqItems={[
        { question: "What is AI sales strategy and how does it help Kerala businesses?", answer: "AI sales strategy uses artificial intelligence to automate lead generation, qualify prospects, and optimize sales funnels. Kerala businesses using AI sales tools see 30–50% improvement in lead conversion rates." },
        { question: "Does Fivsys offer CRM setup services in Kerala?", answer: "Yes, Fivsys implements and configures CRM systems like HubSpot, Zoho CRM, and custom CRM solutions for businesses in Kochi, Trivandrum, Calicut and across Kerala." },
        { question: "How can WhatsApp be used for sales in Kerala?", answer: "Fivsys sets up WhatsApp Business API for automated lead nurturing, follow-ups, appointment scheduling, and sales conversations — highly effective for Kerala's WhatsApp-first market." },
        { question: "Can Fivsys help with lead generation for MLM businesses in Kerala?", answer: "Yes, Fivsys specializes in lead generation for MLM and direct sales businesses in Kerala, including targeted Facebook Ads, WhatsApp campaigns, and landing page funnels." },
        { question: "What results can I expect from sales strategy consulting?", answer: "Clients typically see 30–60% increase in lead conversion, 20–40% reduction in sales cycle length, and 25–50% growth in monthly revenue within the first 6 months." },
      ]}
      serviceSchema={{
        name: "AI Sales Strategy and Lead Generation Kerala",
        description: "Sales strategy consulting, CRM setup, and lead generation for businesses in Kerala",
      }}
    />
  );
};

export default SalesStrategy;
