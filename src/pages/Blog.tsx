import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const blogPosts = [
  {
    slug: 'whatsapp-automation-indian-business-2025',
    title: 'WhatsApp Automation for Indian Businesses: Complete Guide 2025',
    excerpt: 'Learn how Indian SMBs are using WhatsApp automation to increase sales by 40%. Step-by-step guide for spas, clinics, and local shops in Bangalore and beyond.',
    category: 'Automation',
    author: 'Fivsys Team',
    date: '2025-12-01',
    readTime: '8 min read',
    image: '/blog/whatsapp-automation.jpg',
    keywords: 'WhatsApp automation India, WhatsApp business API Bangalore, automated customer service India'
  },
  {
    slug: 'ai-chatbots-small-business-india',
    title: 'AI Chatbots for Small Businesses in India: ROI & Implementation',
    excerpt: 'Discover how AI chatbots can reduce customer service costs by 60% for Indian small businesses. Real case studies from Bangalore-based companies.',
    category: 'AI',
    author: 'Fivsys Team',
    date: '2025-11-28',
    readTime: '10 min read',
    image: '/blog/ai-chatbots.jpg',
    keywords: 'AI chatbots India, customer service automation, AI for small business India'
  },
  {
    slug: 'digital-marketing-strategies-indian-startups',
    title: 'Digital Marketing Strategies for Indian Startups in 2025',
    excerpt: 'Proven digital marketing tactics that work for Indian startups. From SEO to social media, learn how to grow your business online with limited budget.',
    category: 'Marketing',
    author: 'Fivsys Team',
    date: '2025-11-25',
    readTime: '12 min read',
    image: '/blog/digital-marketing.jpg',
    keywords: 'digital marketing India, startup marketing strategies, SEO for Indian business'
  },
  {
    slug: 'website-design-cost-india-2025',
    title: 'Website Design Cost in India 2025: Complete Pricing Guide',
    excerpt: 'Understand website development costs in India. Compare prices for different types of websites and learn what affects pricing for Bangalore web agencies.',
    category: 'Business',
    author: 'Fivsys Team',
    date: '2025-11-22',
    readTime: '7 min read',
    image: '/blog/website-cost.jpg',
    keywords: 'website cost India, web development pricing Bangalore, affordable website India'
  },
  {
    slug: 'social-media-marketing-local-business-india',
    title: 'Social Media Marketing for Local Businesses in India',
    excerpt: 'Master social media marketing for your local Indian business. Instagram, Facebook, and WhatsApp strategies that drive real customers to your door.',
    category: 'Marketing',
    author: 'Fivsys Team',
    date: '2025-11-18',
    readTime: '9 min read',
    image: '/blog/social-media.jpg',
    keywords: 'social media marketing India, Instagram marketing local business, Facebook ads India'
  },
  {
    slug: 'ai-tools-indian-entrepreneurs',
    title: 'Top 10 AI Tools Every Indian Entrepreneur Should Use in 2025',
    excerpt: 'Boost productivity with these AI tools designed for Indian businesses. From content creation to customer management, automate your workflow.',
    category: 'AI',
    author: 'Fivsys Team',
    date: '2025-11-15',
    readTime: '11 min read',
    image: '/blog/ai-tools.jpg',
    keywords: 'AI tools India, productivity tools entrepreneurs, automation tools Indian business'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Blog | AI, Marketing & Business Tips for Indian Businesses | Fivsys"
        description="Expert insights on AI automation, digital marketing, and business growth strategies for Indian SMBs. WhatsApp automation, chatbots, and more."
        keywords="AI blog India, digital marketing tips, WhatsApp automation guide, business growth India, startup tips Bangalore"
        schemaType="WebPage"
      />
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-black to-fivsys-darkGray/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-fivsys-red/20 text-fivsys-red border-fivsys-red/30 mb-4">
                INSIGHTS & GUIDES
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">AI & Business </span>
                <span className="text-fivsys-red">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert insights on AI automation, digital marketing, and business growth strategies 
                tailored for Indian small and medium businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="bg-gradient-to-br from-fivsys-darkGray/50 to-black border-white/10 hover:border-fivsys-red/50 transition-all duration-300 h-full group">
                    <div className="aspect-video bg-fivsys-darkGray/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-fivsys-red text-white">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white group-hover:text-fivsys-red transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-fivsys-red group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-fivsys-red/20 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Get a free consultation to discuss how AI and automation can help your Indian business grow.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-fivsys-red hover:bg-fivsys-darkRed text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
