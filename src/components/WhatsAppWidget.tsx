import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '917356137106'; // WhatsApp number without + or spaces
  const message = 'Hi FIVSYS, I\'m interested in AI automation services for my business in India.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div className="mb-4 bg-gradient-to-br from-fivsys-darkGray via-black to-fivsys-darkGray border-2 border-fivsys-red/40 rounded-2xl p-6 shadow-2xl animate-slideInFromBottom backdrop-blur-md max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center animate-gentle-glow">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">FivSys AI</h3>
                  <p className="text-fivsys-silver text-sm">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-fivsys-silver hover:text-white transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-fivsys-silver mb-4 leading-relaxed">
              Need help with AI solutions? Our team is ready to assist you with your digital transformation journey.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Chat on WhatsApp</span>
            </a>
          </div>
        )}
        
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center animate-float"
            aria-label="Open WhatsApp chat"
          >
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <MessageCircle className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Notification Dot */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-fivsys-red rounded-full border-2 border-black animate-gentle-glow"></div>
          </button>
          <span className="text-xs text-white bg-black/80 px-2 py-1 rounded-full border border-green-500/30 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;
