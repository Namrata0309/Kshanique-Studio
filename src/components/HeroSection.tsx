import {ArrowRight, ArrowUpRight} from 'lucide-react';
import {motion} from 'motion/react';
import {DemoType, STUDIO_IMAGES} from '../data/studioData';
import {BotanicalSprig} from './BotanicalMotif';
import {EditorialImage} from './EditorialImage';

interface HeroSectionProps {
  onOpenDemo: (demo: DemoType) => void;
  onOpenQuote: (preselectedService?: string) => void;
}

export function HeroSection({onOpenDemo, onOpenQuote}: HeroSectionProps) {
  const scrollToDemos = () => {
    const el = document.getElementById('demos');
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F3] via-[#FFF9F3] to-[#F6E7E7]/45 pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Subtle atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#F6E7E7]/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-120px] h-[340px] w-[340px] rounded-full bg-[#C6A36A]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Brand Typography & Primary Actions */}
          <motion.div
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6A36A]" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.22em] text-[#672D3D] uppercase">
                Kshanique Studio
              </p>
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,4.5vw,4.15rem)] leading-[1.06] font-semibold tracking-tight text-[#292525]">
              Your Special Moments Deserve Something{' '}
              <span className="font-normal italic text-[#672D3D]">Extraordinary.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#292525]/78 sm:text-lg">
              We create personalised digital invitations and beautiful celebration websites that turn
              your special moments into unforgettable memories.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToDemos}
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-[#672D3D] px-7 py-3.5 text-sm font-medium text-[#FFF9F3] whitespace-nowrap shrink-0 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4F202D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D]"
              >
                <span>Explore Our Designs</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#292525]/20 bg-[#FFF9F3] px-7 py-3.5 text-sm font-medium text-[#292525] whitespace-nowrap shrink-0 transition-all duration-200 hover:border-[#672D3D]/50 hover:bg-[#F6E7E7]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#672D3D]"
              >
                <span>Create Your Website</span>
              </button>
            </div>

            {/* Quiet unboxed studio signature metadata */}
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#292525]/10 pt-6 text-xs font-medium text-[#292525]/65 sm:text-sm">
              <span>Where Moments Become Extraordinary</span>
              <span aria-hidden="true" className="text-[#C6A36A]">
                ·
              </span>
              <span>Weddings, Birthdays &amp; Engagements</span>
              <span aria-hidden="true" className="text-[#C6A36A]">
                ·
              </span>
              <span>Starting ₹399</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Device Mockup Stage (Wedding Laptop + Birthday & Engagement Mobiles) */}
          <motion.div
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="relative lg:col-span-6"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <BotanicalSprig className="absolute -top-6 right-4 z-0 rotate-12" />

              {/* Centerpiece Desktop/Laptop Mockup: Wedding Website */}
              <div className="relative z-10 ml-auto w-[92%] rounded-2xl border border-[#292525]/12 bg-[#FFF9F3] p-2.5 shadow-[0_24px_60px_-20px_rgba(41,37,37,0.18)] sm:w-[86%]">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between border-b border-[#292525]/8 px-3 py-2">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#C6A36A]/60" />
                    <span className="h-2 w-2 rounded-full bg-[#F6E7E7]" />
                    <span className="h-2 w-2 rounded-full bg-[#672D3D]/40" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wide text-[#292525]/55">
                    meeraandkabir.kshanique.in
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenDemo('wedding')}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-[#672D3D] transition-colors hover:text-[#4F202D]"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </button>
                </div>

                {/* Wedding Screen Preview */}
                <button
                  type="button"
                  onClick={() => onOpenDemo('wedding')}
                  className="group relative block w-full overflow-hidden rounded-xl text-left focus-visible:outline-2 focus-visible:outline-[#672D3D]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <EditorialImage
                      src={STUDIO_IMAGES.wedding}
                      alt="Wedding website preview for Meera and Kabir"
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292525]/80 via-[#292525]/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-[#FFF9F3] sm:p-6">
                      <p className="text-[11px] tracking-[0.2em] text-[#F6E7E7] uppercase">
                        Wedding Website · Udaipur
                      </p>
                      <p className="mt-1 font-serif text-2xl font-semibold sm:text-3xl">
                        Meera &amp; Kabir
                      </p>
                      <p className="mt-1 text-xs text-[#FFF9F3]/85">
                        12–14 December · Click to preview full live experience
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Lower-Left Overlapping Phone Mockup: Birthday Website */}
              <div className="relative z-20 -mt-16 w-[54%] max-w-[235px] sm:-mt-24 sm:w-[46%]">
                <button
                  type="button"
                  onClick={() => onOpenDemo('birthday')}
                  className="group block w-full rounded-[26px] border-[5px] border-[#292525] bg-[#FFF9F3] p-1.5 text-left shadow-[0_24px_45px_-12px_rgba(41,37,37,0.28)] transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-[#672D3D]"
                >
                  <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-[#292525]/20" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#F6E7E7]">
                    <EditorialImage
                      src={STUDIO_IMAGES.birthday}
                      alt="Birthday surprise website preview on mobile screen"
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292525]/85 via-[#292525]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 text-[#FFF9F3]">
                      <p className="text-[10px] tracking-[0.16em] text-[#F6E7E7] uppercase">
                        Birthday Surprise
                      </p>
                      <p className="mt-0.5 font-serif text-lg leading-tight font-semibold">
                        Aarav Turns 25
                      </p>
                      <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-[#C6A36A]">
                        Open Mobile Demo <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Lower-Right Overlapping Phone Mockup: Engagement Invitation */}
              <div className="relative z-20 -mt-28 ml-auto mr-1 w-[48%] max-w-[215px] sm:-mt-36 sm:mr-3 sm:w-[42%]">
                <button
                  type="button"
                  onClick={() => onOpenDemo('engagement')}
                  className="group block w-full rounded-[24px] border-[4px] border-[#672D3D] bg-[#FFF9F3] p-1.5 text-left shadow-[0_24px_45px_-14px_rgba(103,45,61,0.3)] transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-[#672D3D]"
                >
                  <div className="mx-auto mb-1.5 h-1 w-9 rounded-full bg-[#672D3D]/25" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-[#FFF9F3]">
                    <EditorialImage
                      src={STUDIO_IMAGES.engagement}
                      alt="Engagement invitation preview on mobile screen"
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292525]/85 via-[#292525]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 text-[#FFF9F3]">
                      <p className="text-[10px] tracking-[0.16em] text-[#F6E7E7] uppercase">
                        Engagement Invite
                      </p>
                      <p className="mt-0.5 font-serif text-lg leading-tight font-semibold">
                        Riya &amp; Dev
                      </p>
                      <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-[#C6A36A]">
                        Open Invite Demo <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
