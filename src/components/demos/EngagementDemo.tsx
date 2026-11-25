import {Calendar, Check, MapPin} from 'lucide-react';
import {FormEvent, useState} from 'react';
import {STUDIO_IMAGES} from '../../data/studioData';
import {BotanicalDivider} from '../BotanicalMotif';
import {EditorialImage} from '../EditorialImage';

export function EngagementDemo() {
  const [inviteOpened, setInviteOpened] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [responseChoice, setResponseChoice] = useState<'accept' | 'blessings'>('accept');
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setConfirmed(true);
  };

  if (!inviteOpened) {
    return (
      <div className="flex min-h-[560px] flex-col items-center justify-center bg-[#F6E7E7]/65 px-6 py-16 text-center">
        <div className="w-full max-w-md rounded-2xl border border-[#C6A36A]/55 bg-[#FFF9F3] p-8 shadow-[0_28px_60px_-24px_rgba(103,45,61,0.26)] sm:p-10">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-[#672D3D] uppercase">
            You Are Cordially Invited
          </p>
          <div className="mx-auto my-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A36A] bg-[#F6E7E7]/60 font-serif text-2xl font-semibold text-[#672D3D]">
            R&amp;D
          </div>
          <h2 className="font-serif text-4xl font-semibold text-[#292525]">
            Riya &amp; Dev
          </h2>
          <p className="mt-2 text-xs tracking-[0.18em] text-[#292525]/65 uppercase">
            Ring Ceremony · 19 January
          </p>

          <button
            type="button"
            onClick={() => setInviteOpened(true)}
            className="mt-8 min-h-[46px] w-full rounded-full bg-[#672D3D] px-6 py-3 text-sm font-medium text-[#FFF9F3] transition-colors hover:bg-[#4F202D]"
          >
            Open Digital Invitation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF9F3] px-6 py-12 text-[#292525] sm:px-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-[#C6A36A]/45 bg-[#FFF9F3] p-6 shadow-sm sm:p-10">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-[#672D3D] uppercase">
            Save The Evening
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#292525] sm:text-5xl">
            Riya <span className="font-normal italic text-[#C6A36A]">&amp;</span> Dev
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#292525]/75">
            Together with our parents, we joyfully invite you to witness our engagement and raise a
            toast to the beginning of forever.
          </p>
        </div>

        <BotanicalDivider className="my-7" />

        <div className="overflow-hidden rounded-2xl border border-[#292525]/10">
          <div className="aspect-[4/3] overflow-hidden">
            <EditorialImage
              src={STUDIO_IMAGES.engagement}
              alt="Riya and Dev engagement ring portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Ceremony Details */}
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-xl bg-[#F6E7E7]/50 p-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#672D3D]" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold text-[#672D3D] uppercase">Date &amp; Time</p>
              <p className="mt-1 text-sm font-medium">Sunday, 19 January</p>
              <p className="text-xs text-[#292525]/70">6:30 PM Welcome · 7:30 PM Ring Exchange</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#672D3D]" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold text-[#672D3D] uppercase">Venue</p>
              <p className="mt-1 text-sm font-medium">The Glasshouse Lawn</p>
              <p className="text-xs text-[#292525]/70">Jubilee Hills, Hyderabad</p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-[#292525]/10 px-5 py-4 text-center">
          <p className="text-xs font-semibold tracking-wider text-[#C6A36A] uppercase">
            Evening Dress Code
          </p>
          <p className="mt-1 font-serif text-xl text-[#292525]">
            Blush Rose, Ivory &amp; Champagne Silks
          </p>
        </div>

        {/* One-Tap RSVP */}
        <div className="mt-8 border-t border-[#292525]/10 pt-7">
          <h3 className="text-center font-serif text-2xl font-semibold">Respond to Invitation</h3>

          {confirmed ? (
            <div className="mt-4 rounded-xl border border-[#C6A36A]/50 bg-[#F6E7E7]/55 p-5 text-center">
              <Check className="mx-auto h-6 w-6 text-[#672D3D]" />
              <p className="mt-2 font-serif text-xl font-semibold text-[#292525]">
                Thank You, {guestName}!
              </p>
              <p className="mt-1 text-xs text-[#292525]/75">
                {responseChoice === 'accept'
                  ? 'We are delighted you will join us on 19 January.'
                  : 'Thank you for sending your warm blessings from afar.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setConfirmed(false);
                  setGuestName('');
                }}
                className="mt-3 text-xs font-medium text-[#672D3D] underline underline-offset-4"
              >
                Reset demo RSVP
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="mt-4 space-y-3">
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#292525]/15 bg-white px-4 py-2.5 text-sm focus:border-[#672D3D] focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setResponseChoice('accept')}
                  className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-colors ${
                    responseChoice === 'accept'
                      ? 'border-[#672D3D] bg-[#F6E7E7] text-[#672D3D]'
                      : 'border-[#292525]/15 text-[#292525]/75'
                  }`}
                >
                  Joyfully Accepts
                </button>
                <button
                  type="button"
                  onClick={() => setResponseChoice('blessings')}
                  className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-colors ${
                    responseChoice === 'blessings'
                      ? 'border-[#672D3D] bg-[#F6E7E7] text-[#672D3D]'
                      : 'border-[#292525]/15 text-[#292525]/75'
                  }`}
                >
                  Send Warm Blessings
                </button>
              </div>
              <button
                type="submit"
                className="min-h-[44px] w-full rounded-full bg-[#672D3D] px-6 py-2.5 text-sm font-medium text-[#FFF9F3] transition-colors hover:bg-[#4F202D]"
              >
                Send Response
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
