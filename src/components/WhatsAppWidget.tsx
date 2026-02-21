import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from '@/components/MagneticButton';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '917356137106';
  const message = 'Hi FIVSYS, I\'m interested in your Glocal digital services for my business.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div className="mb-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-green-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md max-w-sm animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">FivSys Team</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-green-400 text-xs font-medium">Online — replies instantly</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-3 mb-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Hey there! Need help with your Kerala or global digital project? We're here to build something extraordinary.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-green-500/30 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Chat on WhatsApp</span>
            </a>
          </div>
        )}

        <div className="flex flex-col items-end gap-2">
          <MagneticButton strength={0.5}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center"
              aria-label="Open WhatsApp chat"
            >
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MessageCircle className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-fivsys-red rounded-full border-2 border-slate-950 animate-pulse" />
            </button>
          </MagneticButton>
          {!isOpen && (
            <span className="text-xs text-white/80 bg-slate-950/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-green-500/20 whitespace-nowrap">
              Chat on WhatsApp
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;
