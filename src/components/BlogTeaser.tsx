import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: "AI Automation for Indian SMEs: A Complete Guide",
    excerpt: "Discover how AI-powered automation can transform your Indian business operations and boost productivity.",
    date: "2024-12-01",
    readTime: "5 min",
    slug: "/blog",
    tags: ["Indian SMEs", "AI Automation"]
  },
  {
    title: "WhatsApp Chatbots: The Future of Customer Service in India",
    excerpt: "Learn how WhatsApp automation is revolutionizing customer engagement for businesses across India.",
    date: "2024-11-28",
    readTime: "4 min",
    slug: "/blog",
    tags: ["WhatsApp", "India Market"]
  },
  {
    title: "Website Development Pricing in India: What to Expect in 2024",
    excerpt: "A comprehensive breakdown of website development costs and packages for Indian businesses.",
    date: "2024-11-25",
    readTime: "6 min",
    slug: "/blog",
    tags: ["INR Pricing", "Web Development"]
  }
];

const BlogTeaser = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-fivsys-darkGray/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
            <span className="text-sm font-semibold text-fivsys-red">INSIGHTS FOR INDIAN BUSINESSES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Latest from Our </span>
            <span className="text-fivsys-red">Blog</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights on AI automation, digital marketing, and growth strategies tailored for Indian businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-gradient-to-br from-fivsys-darkGray/50 to-black border-white/10 hover:border-fivsys-red/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-fivsys-red/20 text-fivsys-red rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-fivsys-red transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-fivsys-red/50 hover:bg-fivsys-red/10">
            <Link to="/blog" className="flex items-center gap-2">
              <span>Read All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
