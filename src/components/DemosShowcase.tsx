import {ArrowUpRight, Eye} from 'lucide-react';
import {DEMO_CARDS, DemoType} from '../data/studioData';
import {EditorialImage} from './EditorialImage';

interface DemosShowcaseProps {
  onOpenDemo: (demo: DemoType) => void;
}

export function DemosShowcase({onOpenDemo}: DemosShowcaseProps) {
  return (
    <section id="demos" className="border-t border-[#292525]/8 bg-[#FFF9F3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
            Interactive Previews
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-[1.12] font-semibold text-[#292525] sm:text-4xl lg:text-5xl">
            Explore Our Creations.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#292525]/75">
            Step inside three complete sample experiences crafted by Kshanique Studio. Switch
            between desktop and mobile views, open interactive envelopes, and test live RSVPs.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {DEMO_CARDS.map((demo) => (
            <article
              key={demo.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#292525]/12 bg-[#FFF9F3] transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A36A] hover:shadow-[0_24px_50px_-22px_rgba(41,37,37,0.18)]"
            >
              {/* Preview Frame */}
              <div className="relative bg-[#F6E7E7]/70 p-4 pb-0">
                <div className="flex items-center justify-between rounded-t-xl border border-b-0 border-[#292525]/10 bg-[#FFF9F3] px-3.5 py-2">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#C6A36A]/70" />
                    <span className="h-2 w-2 rounded-full bg-[#292525]/15" />
                    <span className="h-2 w-2 rounded-full bg-[#292525]/15" />
                  </div>
                  <span className="text-[11px] font-medium text-[#292525]/55">
                    {demo.accentTheme}
                  </span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden border-x border-[#292525]/10">
                  <EditorialImage
                    src={demo.previewImage}
                    alt={demo.previewAlt}
                    fallbackTitle={demo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292525]/55 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFF9F3]/95 px-3 py-1 text-[11px] font-medium text-[#292525] shadow-sm">
                    <Eye className="h-3 w-3 text-[#672D3D]" aria-hidden="true" />
                    Interactive Demo
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-medium text-[#672D3D]">{demo.kicker}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#292525]">
                  {demo.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#292525]/75">
                  {demo.description}
                </p>

                {/* Unboxed metadata highlights */}
                <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 border-t border-[#292525]/8 pt-4 text-xs font-medium text-[#292525]/65">
                  {demo.featuredDetails.map((detail, i) => (
                    <span key={detail} className="inline-flex items-center gap-2.5">
                      {i > 0 && (
                        <span aria-hidden="true" className="text-[#C6A36A]">
                          ·
                        </span>
                      )}
                      <span>{detail}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-1">
                  <button
                    type="button"
                    onClick={() => onOpenDemo(demo.id)}
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#672D3D] px-6 py-3 text-sm font-medium text-[#FFF9F3] whitespace-nowrap transition-all duration-200 hover:bg-[#4F202D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D]"
                  >
                    <span>View Live Demo</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
