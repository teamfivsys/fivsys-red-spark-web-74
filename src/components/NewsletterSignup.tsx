import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');
    
    toast({
      title: "Subscribed!",
      description: "You'll receive our weekly business tips soon.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">You're Subscribed!</h3>
        <p className="text-muted-foreground">
          Check your inbox for a welcome email with exclusive resources.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/20 rounded-lg">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Weekly Business Tips</h3>
      </div>
      <p className="text-muted-foreground mb-6">
        Get AI automation insights, marketing strategies, and growth tips for Indian businesses. 
        Join 2,000+ entrepreneurs already subscribed.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading} className="whitespace-nowrap">
          {isLoading ? 'Subscribing...' : 'Subscribe Free'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-4">
        No spam, ever. Unsubscribe anytime. Your email is safe with us.
      </p>
    </div>
  );
};

export default NewsletterSignup;
