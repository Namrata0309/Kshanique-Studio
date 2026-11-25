import {ArrowUpRight, Check} from 'lucide-react';
import {DemoType, SERVICES_DATA, STUDIO_IMAGES} from '../data/studioData';
import {BotanicalDivider} from './BotanicalMotif';
import {EditorialImage} from './EditorialImage';

interface AboutAndServicesProps {
  onOpenDemo: (demo: DemoType) => void;
  onOpenQuote: (preselectedService?: string) => void;
}

export function AboutAndServices({onOpenDemo, onOpenQuote}: AboutAndServicesProps) {
  return (
    <>
      {/* Section 2: About Us */}
      <section id="about" className="border-t border-[#292525]/8 bg-[#FFF9F3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[#292525]/10 bg-[#F6E7E7] p-3">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <EditorialImage
                    src={STUDIO_IMAGES.coupleMemories}
                    alt="Warm candid golden hour couple portrait crafted for a Kshanique Studio celebration website"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
                About Kshanique Studio
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#292525] sm:text-4xl lg:text-5xl">
                More Than Just an Invitation.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#292525]/80 sm:text-lg">
                At Kshanique Studio, we believe every celebration deserves a personal touch. We
                transform your ideas, photographs and special memories into beautifully designed
                digital experiences that your loved ones will remember.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#292525]/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#672D3D]">Bespoke Artistry</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#292525]/70">
                    Tailored colour palettes, editorial typography, and delicate botanical details.
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#672D3D]">Story-First</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#292525]/70">
                    Built around your photographs, voice notes, timelines, and inside jokes.
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-[#672D3D]">Instant Sharing</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#292525]/70">
                    Seamless mobile experiences designed to open effortlessly from WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Services */}
      <section
        id="services"
        className="border-t border-[#292525]/8 bg-[#F6E7E7]/45 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
                Our Services
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#292525] sm:text-4xl lg:text-5xl">
                Designed for Every Chapter Worth Celebrating.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#292525]/75">
              From intimate birthday tributes to multi-day wedding hubs, each creation is custom-made
              for your occasion.
            </p>
          </div>

          <BotanicalDivider className="my-12" />

          {/* Asymmetric Editorial Grid: 2 wide marquee cards on top + 3 cards below */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
            {SERVICES_DATA.map((service, index) => {
              const isMarquee = index < 2;
              return (
                <article
                  key={service.id}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-[#292525]/10 bg-[#FFF9F3] transition-all duration-300 hover:border-[#C6A36A]/70 hover:shadow-[0_20px_48px_-24px_rgba(103,45,61,0.22)] ${
                    isMarquee ? 'lg:col-span-3' : 'lg:col-span-2'
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F6E7E7]">
                    <EditorialImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackTitle={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-serif text-sm font-semibold tracking-wider text-[#C6A36A] tabular-nums">
                        {service.number}
                      </span>
                      <span className="text-xs font-medium text-[#672D3D] tabular-nums">
                        Starting {service.startingPrice}
                      </span>
                    </div>

                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#292525] sm:text-[1.75rem]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#292525]/75">
                      {service.subtitle}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-[#292525]/8 pt-5 text-sm text-[#292525]/85">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#672D3D]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                      <button
                        type="button"
                        onClick={() => onOpenQuote(service.title)}
                        className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#672D3D] px-5 py-2.5 text-xs font-medium text-[#FFF9F3] whitespace-nowrap shrink-0 transition-colors hover:bg-[#4F202D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D]"
                      >
                        Create Yours
                      </button>

                      {service.linkedDemoId && (
                        <button
                          type="button"
                          onClick={() => onOpenDemo(service.linkedDemoId!)}
                          className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full border border-[#292525]/15 px-4 py-2.5 text-xs font-medium text-[#292525] whitespace-nowrap shrink-0 transition-colors hover:border-[#672D3D]/40 hover:bg-[#F6E7E7]/60 focus-visible:outline-2 focus-visible:outline-[#672D3D]"
                        >
                          <span>View Sample</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
