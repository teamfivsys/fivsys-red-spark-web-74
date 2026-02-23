
import ServiceLayout from '@/components/ServiceLayout';
import { Share2 } from 'lucide-react';

const SocialMediaMarketing = () => {
  return (
    <ServiceLayout
      title="Social Media Marketing"
      description="Strategic social media campaigns that build brand awareness and engage with your target audience."
      icon={<Share2 className="h-16 w-16 text-fivsys-red" />}
      seoTitle="Social Media Marketing Kerala | Instagram & Facebook Marketing Agency Kochi | Fivsys"
      seoDescription="Best social media marketing agency in Kerala. Instagram marketing, Facebook Ads, YouTube promotion & influencer campaigns for businesses in Kochi, Trivandrum, Calicut, Thrissur and all Kerala districts."
      seoKeywords="social media marketing Kerala, social media agency Kerala, Instagram marketing Kerala, Instagram marketing Kochi, Facebook marketing Kerala, Facebook Ads Kerala, YouTube marketing Kerala, social media management Kerala, social media marketing Kochi, social media Trivandrum, social media marketing Calicut, influencer marketing Kerala, content creation Kerala, reels marketing Kerala, WhatsApp marketing Kerala, social media strategy Kerala, best social media company Kerala, social media advertising Kerala, affordable social media Kerala"
      features={[
        "Social Media Strategy Development",
        "Platform Selection and Optimization",
        "Content Creation and Curation",
        "Community Management and Engagement",
        "Social Media Advertising",
        "Influencer Marketing",
        "Social Listening and Monitoring",
        "Competitor Analysis",
        "Campaign Planning and Execution",
        "Performance Analytics and Reporting",
        "Crisis Management",
        "Social Media Training"
      ]}
      benefits={[
        {
          title: "Increased Brand Awareness",
          description: "Expand your reach and visibility, introducing your brand to new potential customers across multiple platforms."
        },
        {
          title: "Enhanced Customer Engagement",
          description: "Build meaningful relationships with your audience through regular, authentic interactions that foster loyalty and trust."
        },
        {
          title: "Targeted Audience Reach",
          description: "Leverage advanced targeting options to reach the most relevant audiences based on demographics, interests, and behaviors."
        },
        {
          title: "Improved Customer Insights",
          description: "Gain valuable feedback and insights into customer preferences, pain points, and expectations through social listening."
        },
        {
          title: "Higher Website Traffic",
          description: "Drive qualified traffic to your website through strategic content and campaigns that encourage click-throughs."
        },
        {
          title: "Cost-Effective Marketing",
          description: "Achieve significant marketing impact with lower investment compared to traditional advertising channels."
        }
      ]}
      processSteps={[
        {
          title: "Social Media Audit",
          description: "We assess your current social media presence, analyze competitors, and identify opportunities for improvement and growth."
        },
        {
          title: "Strategy Development",
          description: "We create a comprehensive social media strategy aligned with your business goals, audience needs, and industry best practices."
        },
        {
          title: "Content Planning",
          description: "Our team develops a content calendar with a mix of content types designed to engage your audience and achieve your marketing objectives."
        },
        {
          title: "Campaign Creation",
          description: "We design and implement targeted social media campaigns that drive engagement, awareness, lead generation, or sales based on your goals."
        },
        {
          title: "Community Management",
          description: "We actively manage your social media communities, responding to comments, messages, and mentions to build relationships with your audience."
        },
        {
          title: "Analysis and Optimization",
          description: "We continuously monitor performance metrics, providing insights and recommendations to improve results and ROI over time."
        }
      ]}
      ctaText="Ready to elevate your social media presence?"
    />
  );
};

export default SocialMediaMarketing;
