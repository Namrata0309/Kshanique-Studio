import {ArrowRight, Check} from 'lucide-react';
import {useState} from 'react';
import {PRICING_TIERS, WHY_CHOOSE_US} from '../data/studioData';

interface PricingAndWhyUsProps {
  onOpenQuote: (preselectedService?: string) => void;
}

type PricingFilter = 'all' | 'Digital Invitation' | 'Full Website';

export function PricingAndWhyUs({onOpenQuote}: PricingAndWhyUsProps) {
  const [filter, setFilter] = useState<PricingFilter>('all');

  const filteredTiers =
    filter === 'all'
      ? PRICING_TIERS
      : PRICING_TIERS.filter((tier) => tier.category === filter);

  return (
    <>
      {/* Section 5: Pricing */}
      <section
        id="pricing"
        className="border-t border-[#292525]/8 bg-[#F6E7E7]/40 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
                Transparent Investment
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#292525] sm:text-4xl lg:text-5xl">
                Beautiful Experiences. Clear Pricing.
              </h2>
            </div>

            {/* Interactive Segmented Filter */}
            <div
              role="group"
              aria-label="Filter pricing by format"
              className="inline-flex rounded-full border border-[#292525]/12 bg-[#FFF9F3] p-1"
            >
              {(
                [
                  {id: 'all', label: 'All Experiences'},
                  {id: 'Digital Invitation', label: 'Digital Invitations'},
                  {id: 'Full Website', label: 'Full Websites'},
                ] as const
              ).map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setFilter(tab.id)}
                    className={`rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#672D3D] ${
                      active
                        ? 'bg-[#672D3D] text-[#FFF9F3]'
                        : 'text-[#292525]/75 hover:text-[#292525]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTiers.map((tier) => (
              <article
                key={tier.id}
                className={`flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 sm:p-7 ${
                  tier.featured
                    ? 'border-[#672D3D]/35 bg-[#FFF9F3] shadow-[0_18px_40px_-24px_rgba(103,45,61,0.28)]'
                    : 'border-[#292525]/10 bg-[#FFF9F3] hover:border-[#C6A36A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#292525]/60">
                    <span>{tier.category}</span>
                    {tier.featured && (
                      <span className="text-[#672D3D]">Most Popular</span>
                    )}
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#292525]">
                    {tier.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-2 border-b border-[#292525]/8 pb-5">
                    <span className="text-xs text-[#292525]/60">Starting at</span>
                    <span className="font-serif text-4xl font-semibold text-[#672D3D] tabular-nums">
                      {tier.price}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#292525]/75">{tier.summary}</p>

                  <ul className="mt-5 space-y-2 text-sm text-[#292525]/85">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A36A]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenQuote(`${tier.name} (${tier.price})`)}
                  className={`mt-7 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D] ${
                    tier.featured
                      ? 'bg-[#672D3D] text-[#FFF9F3] hover:bg-[#4F202D]'
                      : 'border border-[#292525]/15 bg-transparent text-[#292525] hover:border-[#672D3D] hover:bg-[#F6E7E7]/60'
                  }`}
                >
                  <span>Select &amp; Enquire</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>

          {/* Pricing Note & Custom Quote CTA */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#C6A36A]/40 bg-[#FFF9F3] px-6 py-7 sm:flex-row sm:px-9">
            <div>
              <p className="font-serif text-2xl font-semibold text-[#292525]">
                Have a unique celebration in mind?
              </p>
              <p className="mt-1 text-sm text-[#292525]/75">
                Final pricing depends on customisation, content and additional features.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenQuote('Custom Celebration Package')}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#672D3D] px-7 py-3 text-sm font-medium text-[#FFF9F3] whitespace-nowrap shrink-0 transition-colors hover:bg-[#4F202D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D]"
            >
              <span>Get Your Custom Quote</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="border-t border-[#292525]/8 bg-[#FFF9F3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
              The Kshanique Difference
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#292525] sm:text-4xl lg:text-5xl">
              Why Choose Us?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((feature) => (
              <div
                key={feature.number}
                className="rounded-2xl border border-[#292525]/10 bg-[#FFF9F3] p-7 transition-colors duration-200 hover:border-[#C6A36A]"
              >
                <span className="font-serif text-lg font-semibold text-[#C6A36A] tabular-nums">
                  {feature.number}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#292525]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#292525]/75">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
