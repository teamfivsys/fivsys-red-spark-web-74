import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BlogSearchFilter from '@/components/BlogSearchFilter';
import NewsletterSignup from '@/components/NewsletterSignup';
import LeadMagnetCard from '@/components/LeadMagnetCard';
import BlogCTA from '@/components/BlogCTA';
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
    keywords: 'WhatsApp automation India, WhatsApp business API Bangalore, automated customer service India',
    tags: ['WhatsApp', 'Automation', 'SMB', 'India', 'Bangalore']
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
    keywords: 'AI chatbots India, customer service automation, AI for small business India',
    tags: ['AI', 'Chatbots', 'Customer Service', 'ROI']
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
    keywords: 'digital marketing India, startup marketing strategies, SEO for Indian business',
    tags: ['Marketing', 'SEO', 'Social Media', 'Startups']
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
    keywords: 'website cost India, web development pricing Bangalore, affordable website India',
    tags: ['Website', 'Pricing', 'Business', 'Development']
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
    keywords: 'social media marketing India, Instagram marketing local business, Facebook ads India',
    tags: ['Social Media', 'Instagram', 'Facebook', 'Local Business']
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
    keywords: 'AI tools India, productivity tools entrepreneurs, automation tools Indian business',
    tags: ['AI', 'Tools', 'Productivity', 'Entrepreneurs']
  }
];

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');

  // Get unique categories with counts
  const categories = useMemo(() => {
    const allCategories = blogPosts.map(post => post.category);
    const uniqueCategories = [...new Set(allCategories)];
    const categoryCounts = uniqueCategories.map(cat => ({
      name: cat,
      count: allCategories.filter(c => c === cat).length
    }));
    return [{ name: 'All', count: blogPosts.length }, ...categoryCounts];
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Update URL params
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category !== 'All') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  // Dynamic SEO based on filters
  const seoTitle = activeCategory !== 'All' 
    ? `${activeCategory} Blog Posts | AI & Business Tips | Fivsys`
    : 'Blog | AI, Marketing & Business Tips for Indian Businesses | Fivsys';
  
  const seoDescription = activeCategory !== 'All'
    ? `Expert ${activeCategory.toLowerCase()} insights for Indian SMBs. Practical guides and strategies to grow your business.`
    : 'Expert insights on AI automation, digital marketing, and business growth strategies for Indian SMBs. WhatsApp automation, chatbots, and more.';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords="AI blog India, digital marketing tips, WhatsApp automation guide, business growth India, startup tips Bangalore"
        schemaType="WebPage"
      />
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-card/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                INSIGHTS & GUIDES
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">AI & Business </span>
                <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights on AI automation, digital marketing, and business growth strategies 
                tailored for Indian small and medium businesses.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-2xl mx-auto mb-12">
              <NewsletterSignup />
            </div>

            {/* Search & Filter */}
            <BlogSearchFilter
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              categories={categories}
              totalResults={filteredPosts.length}
            />
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">
                  No articles found matching your criteria.
                </p>
                <button 
                  onClick={() => { handleSearchChange(''); handleCategoryChange('All'); }}
                  className="text-primary hover:underline"
                >
                  Clear filters and show all articles
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.slice(0, 3).map((post) => (
                    <Link key={post.slug} to={`/blog/${post.slug}`}>
                      <Card className="bg-gradient-to-br from-card/50 to-background border-border hover:border-primary/50 transition-all duration-300 h-full group">
                        <div className="aspect-video bg-card/50 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Lead Magnet after first 3 posts */}
                {filteredPosts.length > 0 && (
                  <LeadMagnetCard category={activeCategory !== 'All' ? activeCategory : 'AI'} />
                )}

                {/* Remaining posts */}
                {filteredPosts.length > 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(3).map((post) => (
                      <Link key={post.slug} to={`/blog/${post.slug}`}>
                        <Card className="bg-gradient-to-br from-card/50 to-background border-border hover:border-primary/50 transition-all duration-300 h-full group">
                          <div className="aspect-video bg-card/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}

                {/* WhatsApp CTA */}
                {filteredPosts.length > 3 && (
                  <BlogCTA variant="whatsapp" />
                )}
              </div>
            )}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a free consultation to discuss how AI and automation can help your Indian business grow.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
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
