import {MessageCircle} from 'lucide-react';
import {buildWhatsAppLink} from '../data/studioData';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kshanique Studio on WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-[#672D3D] px-5 py-3 text-sm font-medium text-[#FFF9F3] shadow-[0_14px_30px_-8px_rgba(103,45,61,0.55)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#4F202D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D]"
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
