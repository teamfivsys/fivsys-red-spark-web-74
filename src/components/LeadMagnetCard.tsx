import { Download, FileText, Calculator, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface LeadMagnet {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const leadMagnets: Record<string, LeadMagnet> = {
  Automation: {
    title: 'Free WhatsApp Automation Checklist',
    description: 'Step-by-step guide to automate your customer communication and boost sales by 40%.',
    icon: <Zap className="w-6 h-6" />,
    category: 'Automation'
  },
  AI: {
    title: 'AI Tools Starter Kit for Indian Businesses',
    description: '10 free AI tools that can save you 20+ hours every week. Curated for Indian entrepreneurs.',
    icon: <FileText className="w-6 h-6" />,
    category: 'AI'
  },
  Marketing: {
    title: 'Digital Marketing Budget Calculator',
    description: 'Calculate your optimal marketing spend based on your business size and goals.',
    icon: <Calculator className="w-6 h-6" />,
    category: 'Marketing'
  },
  Business: {
    title: 'Website Cost Estimator',
    description: 'Get an instant estimate for your website project with our free calculator tool.',
    icon: <Target className="w-6 h-6" />,
    category: 'Business'
  }
};

interface LeadMagnetCardProps {
  category?: string;
}

const LeadMagnetCard = ({ category = 'AI' }: LeadMagnetCardProps) => {
  const magnet = leadMagnets[category] || leadMagnets.AI;

  return (
    <div className="bg-gradient-to-br from-card to-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/20 rounded-lg text-primary shrink-0">
          {magnet.icon}
        </div>
        <div className="flex-1">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            Free Resource
          </span>
          <h4 className="text-lg font-bold text-foreground mt-1 mb-2">
            {magnet.title}
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            {magnet.description}
          </p>
          <Button asChild size="sm" variant="outline" className="group">
            <Link to="/contact?source=lead-magnet">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Get Free Access
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetCard;
