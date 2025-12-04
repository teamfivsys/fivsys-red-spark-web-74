import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogCTAProps {
  variant?: 'default' | 'whatsapp' | 'consultation';
}

const BlogCTA = ({ variant = 'default' }: BlogCTAProps) => {
  if (variant === 'whatsapp') {
    return (
      <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6 text-center">
        <MessageSquare className="w-10 h-10 text-green-500 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-foreground mb-2">
          Have Questions? Let's Chat!
        </h4>
        <p className="text-muted-foreground mb-4">
          Get instant answers about AI automation for your business on WhatsApp.
        </p>
        <Button 
          asChild 
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <a 
            href="https://wa.me/917356137106?text=Hi%20Fivsys,%20I%20have%20a%20question%20about%20AI%20automation%20for%20my%20business" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  if (variant === 'consultation') {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center">
        <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
        <h4 className="text-xl font-bold text-foreground mb-2">
          Ready to Automate Your Business?
        </h4>
        <p className="text-muted-foreground mb-4">
          Book a free 30-minute consultation to discuss your automation needs.
        </p>
        <Button asChild>
          <Link to="/contact">
            Book Free Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-foreground mb-1">
            Transform Your Indian Business with AI
          </h4>
          <p className="text-muted-foreground text-sm">
            Join 500+ businesses already using our automation solutions.
          </p>
        </div>
        <Button asChild className="whitespace-nowrap">
          <Link to="/contact">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCTA;
