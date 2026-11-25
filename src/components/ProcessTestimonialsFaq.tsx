import {ChevronDown} from 'lucide-react';
import {useState} from 'react';
import {FAQ_ITEMS, HOW_IT_WORKS_STEPS, SAMPLE_TESTIMONIALS} from '../data/studioData';

export function ProcessTestimonialsFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      {/* Section 7: How It Works */}
      <section
        id="process"
        className="border-t border-[#292525]/8 bg-[#292525] py-20 text-[#FFF9F3] lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C6A36A] uppercase">
              Simple 5-Step Process
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#FFF9F3] sm:text-4xl lg:text-5xl">
              How It Works.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#FFF9F3]/75">
              From your first WhatsApp message to sharing your final link with loved ones, we make
              every step effortless.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-[#FFF9F3]/12 pt-12 sm:grid-cols-2 lg:grid-cols-5">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="font-serif text-3xl font-semibold text-[#C6A36A] tabular-nums">
                  {item.step}.
                </span>
                <h3 className="mt-3 font-serif text-2xl font-medium text-[#FFF9F3]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#FFF9F3]/72">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Customer Testimonials */}
      <section className="border-t border-[#292525]/8 bg-[#F6E7E7]/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
                Client Experiences
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#292525] sm:text-4xl lg:text-5xl">
                Moments Remembered Forever.
              </h2>
            </div>
            <p className="text-xs font-medium tracking-wide text-[#292525]/60">
              Sample showcase reviews · Replaceable with verified client stories
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {SAMPLE_TESTIMONIALS.map((item) => (
              <figure
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-[#292525]/10 bg-[#FFF9F3] p-7"
              >
                <div>
                  <span
                    aria-hidden="true"
                    className="font-serif text-4xl leading-none text-[#C6A36A]"
                  >
                    “
                  </span>
                  <blockquote className="mt-2 text-base leading-relaxed text-[#292525]/85">
                    {item.quote}
                  </blockquote>
                </div>

                <figcaption className="mt-7 border-t border-[#292525]/8 pt-4">
                  <div className="font-serif text-xl font-semibold text-[#292525]">
                    {item.author}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-[#672D3D]">
                    {item.occasion}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section id="faq" className="border-t border-[#292525]/8 bg-[#FFF9F3] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
              Questions &amp; Answers
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#292525] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#292525]/10 border-y border-[#292525]/10">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#672D3D] focus-visible:outline-2 focus-visible:outline-[#672D3D]"
                  >
                    <span className="font-serif text-xl font-semibold text-[#292525] sm:text-2xl">
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-[#672D3D] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm leading-relaxed text-[#292525]/78 sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
