import {Instagram, Mail, MessageCircle, Send} from 'lucide-react';
import {FormEvent, useState} from 'react';
import {buildWhatsAppLink, STUDIO_CONFIG} from '../data/studioData';

export function ContactFooter() {
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState('Wedding Website');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please enter your name before starting your WhatsApp enquiry.');
      return;
    }
    setErrorMessage('');

    const customMsg = `Hi Kshanique Studio! My name is ${name.trim()}. I'm interested in creating a ${occasion}${
      eventDate ? ` for ${eventDate}` : ''
    }.${notes.trim() ? ` Details: ${notes.trim()}` : ' Please share the details.'}`;

    setSubmittedMessage(customMsg);
    const url = buildWhatsAppLink(customMsg);
    window.location.assign(url);
  };

  return (
    <>
      {/* Section 10: Contact Us */}
      <section
        id="contact"
        className="border-t border-[#292525]/8 bg-gradient-to-b from-[#F6E7E7]/55 to-[#FFF9F3] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Direct Channels */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
                Start Your Celebration
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#292525] sm:text-4xl lg:text-5xl">
                Let&apos;s Create Something Beautiful Together.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#292525]/78">
                Tell us about your special occasion, and let&apos;s turn your ideas into a
                memorable digital experience.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-[#672D3D] px-7 py-3.5 text-sm font-medium text-[#FFF9F3] transition-colors hover:bg-[#4F202D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D] sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <div className="mt-10 space-y-4 border-t border-[#292525]/10 pt-8 text-sm">
                <div className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 shrink-0 text-[#672D3D]" aria-hidden="true" />
                  <span className="text-[#292525]/60">Instagram:</span>
                  <a
                    href={STUDIO_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#292525] underline decoration-[#C6A36A] underline-offset-4 transition-colors hover:text-[#672D3D]"
                  >
                    {STUDIO_CONFIG.instagramHandle}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#672D3D]" aria-hidden="true" />
                  <span className="text-[#292525]/60">Email:</span>
                  <a
                    href={`mailto:${STUDIO_CONFIG.email}`}
                    className="font-medium text-[#292525] underline decoration-[#C6A36A] underline-offset-4 transition-colors hover:text-[#672D3D]"
                  >
                    {STUDIO_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Builder */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-[#292525]/12 bg-[#FFF9F3] p-6 shadow-[0_24px_60px_-28px_rgba(41,37,37,0.16)] sm:p-9"
              >
                <h3 className="font-serif text-2xl font-semibold text-[#292525]">
                  Share Your Occasion Details
                </h3>
                <p className="mt-1 text-sm text-[#292525]/70">
                  Fill in a few quick details to open a tailored WhatsApp conversation with us.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium tracking-wide text-[#292525]/80 uppercase"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Ananya Sharma"
                      className="mt-2 w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-3 text-sm text-[#292525] placeholder:text-[#292525]/40 focus:border-[#672D3D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-occasion"
                      className="block text-xs font-medium tracking-wide text-[#292525]/80 uppercase"
                    >
                      Experience Type
                    </label>
                    <select
                      id="contact-occasion"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-3 text-sm text-[#292525] focus:border-[#672D3D] focus:outline-none"
                    >
                      <option>Birthday Digital Invitation (₹399)</option>
                      <option>Birthday Website (₹999)</option>
                      <option>Engagement Invitation (₹599)</option>
                      <option>Engagement Website (₹1,499)</option>
                      <option>Wedding Digital Invitation (₹799)</option>
                      <option>Wedding Website (₹2,499)</option>
                      <option>Anniversary Website (₹999)</option>
                      <option>Custom Occasion Design</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-date"
                      className="block text-xs font-medium tracking-wide text-[#292525]/80 uppercase"
                    >
                      Celebration Date (Optional)
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-3 text-sm text-[#292525] focus:border-[#672D3D] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-notes"
                      className="block text-xs font-medium tracking-wide text-[#292525]/80 uppercase"
                    >
                      Theme Ideas or Notes
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your preferred colours, number of functions, or surprise ideas..."
                      className="mt-2 w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-3 text-sm text-[#292525] placeholder:text-[#292525]/40 focus:border-[#672D3D] focus:outline-none"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <p role="alert" className="mt-4 text-sm font-medium text-[#672D3D]">
                    {errorMessage}
                  </p>
                )}

                {submittedMessage && (
                  <div className="mt-4 rounded-xl border border-[#C6A36A]/45 bg-[#F6E7E7]/60 p-3.5 text-xs text-[#292525]">
                    Opening WhatsApp with your details. If it did not open automatically,{' '}
                    <a
                      href={buildWhatsAppLink(submittedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#672D3D] underline"
                    >
                      click here to continue to WhatsApp
                    </a>
                    .
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-[#292525]/60">
                    Typical reply within a few hours
                  </span>
                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#672D3D] px-7 py-3 text-sm font-medium text-[#FFF9F3] transition-colors hover:bg-[#4F202D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#292525]/10 bg-[#292525] py-14 text-[#FFF9F3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div className="max-w-sm">
              <a href="#top" className="font-serif text-2xl font-semibold text-[#FFF9F3]">
                {STUDIO_CONFIG.brandName}
              </a>
              <p className="mt-2 font-serif text-base italic text-[#C6A36A]">
                {STUDIO_CONFIG.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#FFF9F3]/70">
                Bespoke digital invitations and celebration websites crafted for weddings,
                engagements, birthdays, and anniversaries.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:gap-16">
              <div>
                <h3 className="text-xs font-semibold tracking-[0.18em] text-[#C6A36A] uppercase">
                  Explore
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-[#FFF9F3]/80">
                  <li>
                    <a href="#about" className="transition-colors hover:text-[#FFF9F3]">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="transition-colors hover:text-[#FFF9F3]">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#demos" className="transition-colors hover:text-[#FFF9F3]">
                      Live Demos
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="transition-colors hover:text-[#FFF9F3]">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="transition-colors hover:text-[#FFF9F3]">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.18em] text-[#C6A36A] uppercase">
                  Connect
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-[#FFF9F3]/80">
                  <li>
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#FFF9F3]"
                    >
                      WhatsApp Studio
                    </a>
                  </li>
                  <li>
                    <a
                      href={STUDIO_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#FFF9F3]"
                    >
                      Instagram ({STUDIO_CONFIG.instagramHandle})
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${STUDIO_CONFIG.email}`}
                      className="transition-colors hover:text-[#FFF9F3]"
                    >
                      {STUDIO_CONFIG.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#FFF9F3]/12 pt-8 text-xs text-[#FFF9F3]/55 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Kshanique Studio. All rights reserved.</p>
            <p>{STUDIO_CONFIG.locationNote}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
