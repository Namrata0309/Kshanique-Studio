import {Check, Copy, MessageCircle, X} from 'lucide-react';
import {FormEvent, useEffect, useState} from 'react';
import {buildWhatsAppLink, PRICING_TIERS} from '../data/studioData';

interface QuoteModalProps {
  isOpen: boolean;
  preselectedService?: string;
  onClose: () => void;
}

export function QuoteModal({isOpen, preselectedService, onClose}: QuoteModalProps) {
  const [name, setName] = useState('');
  const [service, setService] = useState(preselectedService || 'Wedding Website (₹2,499)');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const builtMessage = `Hi Kshanique Studio!${
    name.trim() ? ` I'm ${name.trim()}.` : ''
  } I'm interested in creating a personalised "${service}"${
    eventDate ? ` for ${eventDate}` : ''
  }.${notes.trim() ? ` Notes: ${notes.trim()}` : ' Please share the details.'}`;

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.assign(buildWhatsAppLink(builtMessage));
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(builtMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#292525]/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-[#292525]/12 bg-[#FFF9F3] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quote dialog"
          className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#292525]/12 text-[#292525] transition-colors hover:bg-[#F6E7E7]"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs font-semibold tracking-[0.18em] text-[#672D3D] uppercase">
          Custom Quote
        </p>
        <h3 id="quote-modal-title" className="mt-1.5 font-serif text-3xl font-semibold text-[#292525]">
          Create Your Website
        </h3>
        <p className="mt-1.5 text-sm text-[#292525]/72">
          Tell us what you&apos;re celebrating and send your custom enquiry directly on WhatsApp.
        </p>

        <form onSubmit={handleWhatsAppSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="modal-name" className="block text-xs font-medium text-[#292525]/80">
              Your Name
            </label>
            <input
              id="modal-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Meera Verma"
              className="mt-1.5 w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-2.5 text-sm text-[#292525] focus:border-[#672D3D] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="modal-service" className="block text-xs font-medium text-[#292525]/80">
              Select Package or Occasion
            </label>
            <select
              id="modal-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-2.5 text-sm text-[#292525] focus:border-[#672D3D] focus:outline-none"
            >
              {PRICING_TIERS.map((tier) => {
                const label = `${tier.name} (${tier.price})`;
                return (
                  <option key={tier.id} value={label}>
                    {label}
                  </option>
                );
              })}
              <option value="Birthday Surprise Websites">Birthday Surprise Websites</option>
              <option value="Wedding Websites">Wedding Websites</option>
              <option value="Engagement Invitations">Engagement Invitations</option>
              <option value="Anniversary Websites">Anniversary Websites</option>
              <option value="Digital Invitation Cards">Digital Invitation Cards</option>
              <option value="Custom Celebration Package">Custom Celebration Package</option>
            </select>
          </div>

          <div>
            <label htmlFor="modal-date" className="block text-xs font-medium text-[#292525]/80">
              Event Date (Optional)
            </label>
            <input
              id="modal-date"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-2.5 text-sm text-[#292525] focus:border-[#672D3D] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="modal-notes" className="block text-xs font-medium text-[#292525]/80">
              Personalisation Notes (Optional)
            </label>
            <textarea
              id="modal-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Preferred colours, number of events, or surprise ideas..."
              className="mt-1.5 w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-2.5 text-sm text-[#292525] focus:border-[#672D3D] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="submit"
              className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-[#672D3D] px-6 py-3 text-sm font-medium text-[#FFF9F3] transition-colors hover:bg-[#4F202D]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Continue to WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-[#292525]/15 px-5 py-3 text-sm font-medium text-[#292525] transition-colors hover:bg-[#F6E7E7]/60"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#672D3D]" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  <span>Copy Note</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
