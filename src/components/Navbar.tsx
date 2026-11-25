import {Menu, X} from 'lucide-react';
import {useState} from 'react';

interface NavbarProps {
  onOpenQuote: (preselectedService?: string) => void;
}

const NAV_LINKS = [
  {label: 'Services', href: '#services'},
  {label: 'Live Demos', href: '#demos'},
  {label: 'Pricing', href: '#pricing'},
  {label: 'FAQ', href: '#faq'},
];

export function Navbar({onOpenQuote}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#292525]/10 bg-[#FFF9F3]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 lg:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-[#292525] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#672D3D] sm:text-2xl"
        >
          Kshanique Studio
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 text-sm font-medium text-[#292525]/80 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#672D3D] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#672D3D] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#672D3D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenQuote()}
            className="hidden rounded-full bg-[#672D3D] px-5 py-2.5 text-sm font-medium text-[#FFF9F3] whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#4F202D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D] md:inline-flex"
          >
            Create Website
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#292525]/15 text-[#292525] transition-colors hover:bg-[#F6E7E7]/60 focus-visible:outline-2 focus-visible:outline-[#672D3D] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#292525]/10 bg-[#FFF9F3] px-6 py-5 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick(link.href);
                }}
                className="flex min-h-[44px] items-center justify-between border-b border-[#292525]/8 py-2 text-base font-medium text-[#292525] transition-colors hover:text-[#672D3D]"
              >
                <span>{link.label}</span>
                <span className="text-[#C6A36A]">→</span>
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="mt-2 min-h-[44px] w-full rounded-full bg-[#672D3D] px-6 py-3 text-sm font-medium text-[#FFF9F3] transition-colors hover:bg-[#4F202D]"
            >
              Create Your Website
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
