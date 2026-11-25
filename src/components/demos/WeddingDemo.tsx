import {Calendar, CheckCircle2, Clock, MapPin} from 'lucide-react';
import {FormEvent, useState} from 'react';
import {STUDIO_IMAGES} from '../../data/studioData';
import {EditorialImage} from '../EditorialImage';

const WEDDING_EVENTS = [
  {
    id: 'mehendi',
    tab: 'Mehendi',
    day: 'Friday · 12 December',
    time: '1:00 PM – 5:00 PM',
    venue: 'Saffron Courtyard, Taj Aravali',
    attire: 'Sunlit Florals & Pastel Kurtas',
    description:
      'An afternoon of henna artistry, chilled rose sherbet, and acoustic folk melodies under the courtyard shade.',
  },
  {
    id: 'sangeet',
    tab: 'Sangeet',
    day: 'Saturday · 13 December',
    time: '7:30 PM onwards',
    venue: 'The Marble Pavilion',
    attire: 'Midnight Velvet & Champagne Gold',
    description:
      'A starlit evening of family performances, champagne toasts, and dancing into the early hours.',
  },
  {
    id: 'wedding',
    tab: 'Wedding & Reception',
    day: 'Sunday · 14 December',
    time: '4:30 PM Baraat · 6:00 PM Pheras',
    venue: 'Aravali Ridge Lawns',
    attire: 'Classic Ivory, Blush & Heritage Silk',
    description:
      'Witness Meera and Kabir exchange vows as the sun sets behind the hills, followed by an intimate candlelit dinner.',
  },
];

const STORY_CHAPTERS = [
  {
    year: '2021',
    title: 'A Rainy Bookstore in Bengaluru',
    text: 'Both reached for the same architecture monograph, ended up sharing filter coffee for three hours.',
  },
  {
    year: '2023',
    title: 'First Solo Exhibition & First Home',
    text: 'Two cities, endless weekend flights, and one sunlit apartment filled with plants and vinyls.',
  },
  {
    year: '2025',
    title: 'Sunset Proposal in Alibaug',
    text: 'Under quiet palm trees with a handwritten letter and an heirloom ring.',
  },
];

export function WeddingDemo() {
  const [activeEventId, setActiveEventId] = useState('mehendi');
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [attending, setAttending] = useState('All 3 Celebrations');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const activeEvent =
    WEDDING_EVENTS.find((ev) => ev.id === activeEventId) || WEDDING_EVENTS[0];

  const handleRsvp = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setRsvpSubmitted(true);
  };

  return (
    <div className="bg-[#FFF9F3] text-[#292525]">
      {/* Wedding Hero */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] max-h-[440px] w-full overflow-hidden">
          <EditorialImage
            src={STUDIO_IMAGES.wedding}
            alt="Meera and Kabir wedding portrait"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#292525]/85 via-[#292525]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-center text-[#FFF9F3] sm:p-10">
          <p className="text-xs font-medium tracking-[0.26em] text-[#F6E7E7] uppercase">
            12 – 14 December · Udaipur
          </p>
          <h2 className="mt-2 font-serif text-4xl font-semibold sm:text-6xl">
            Meera <span className="font-normal italic text-[#C6A36A]">&amp;</span> Kabir
          </h2>
          <p className="mt-2 text-xs text-[#FFF9F3]/85 sm:text-sm">
            Together with our families, we invite you to celebrate our wedding weekend
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="aspect-square overflow-hidden rounded-2xl border border-[#292525]/10">
              <EditorialImage
                src={STUDIO_IMAGES.coupleMemories}
                alt="Meera and Kabir candid moment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
              Our Story
            </p>
            <h3 className="mt-2 font-serif text-3xl font-semibold">Five Years in the Making</h3>
            <div className="mt-5 space-y-4">
              {STORY_CHAPTERS.map((ch) => (
                <div key={ch.year} className="border-b border-[#292525]/8 pb-3.5 last:border-b-0">
                  <p className="text-xs font-semibold text-[#C6A36A] tabular-nums">
                    {ch.year} · <span className="text-[#672D3D]">{ch.title}</span>
                  </p>
                  <p className="mt-1 text-sm text-[#292525]/78">{ch.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Schedule */}
      <div className="border-y border-[#292525]/10 bg-[#F6E7E7]/45 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
              The Weekend Itinerary
            </p>
            <h3 className="mt-2 font-serif text-3xl font-semibold">Wedding Celebrations</h3>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {WEDDING_EVENTS.map((ev) => (
              <button
                key={ev.id}
                type="button"
                onClick={() => setActiveEventId(ev.id)}
                className={`rounded-full px-5 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                  activeEventId === ev.id
                    ? 'bg-[#672D3D] text-[#FFF9F3]'
                    : 'border border-[#292525]/15 bg-[#FFF9F3] text-[#292525] hover:border-[#672D3D]'
                }`}
              >
                {ev.tab}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[#292525]/10 bg-[#FFF9F3] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#292525]/8 pb-4">
              <h4 className="font-serif text-2xl font-semibold text-[#292525]">
                {activeEvent.tab}
              </h4>
              <span className="text-xs font-medium text-[#672D3D]">{activeEvent.day}</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#292525]/80">
              {activeEvent.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 text-xs text-[#292525]/75 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#C6A36A]" aria-hidden="true" />
                <span>{activeEvent.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C6A36A]" aria-hidden="true" />
                <span>{activeEvent.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#C6A36A]" aria-hidden="true" />
                <span>Attire: {activeEvent.attire}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Venue & Interactive RSVP */}
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Venue Card */}
          <div className="rounded-2xl border border-[#292525]/10 bg-[#FFF9F3] p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#672D3D] uppercase">
              Venue &amp; Travel
            </p>
            <h4 className="mt-2 font-serif text-2xl font-semibold">Taj Aravali Resort, Udaipur</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#292525]/75">
              Nestled in the Aravali hills, 35 minutes from Maharana Pratap Airport. Airport
              transfers are arranged for all arriving guests.
            </p>
            <div className="mt-5 rounded-xl border border-[#292525]/10 bg-[#F6E7E7]/50 p-4 text-xs text-[#292525]/80">
              <p className="font-semibold text-[#672D3D]">Hospitality Desk</p>
              <p className="mt-1">Check-in begins 12 Dec at 11:00 AM · Valet available</p>
            </div>
          </div>

          {/* Live RSVP Form */}
          <div className="rounded-2xl border border-[#292525]/12 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#672D3D] uppercase">
              Kindly Reply
            </p>
            <h4 className="mt-2 font-serif text-2xl font-semibold">Guest RSVP</h4>

            {rsvpSubmitted ? (
              <div className="mt-5 rounded-xl border border-[#C6A36A]/50 bg-[#F6E7E7]/45 p-5">
                <div className="flex items-center gap-2 text-[#672D3D]">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-serif text-xl font-semibold">We Can&apos;t Wait to See You!</span>
                </div>
                <p className="mt-2 text-sm text-[#292525]/80">
                  Thank you, <span className="font-semibold">{guestName}</span>. Your RSVP for{' '}
                  <span className="font-semibold">{guestCount}</span> guest(s) ({attending}) has
                  been recorded in this live preview.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setRsvpSubmitted(false);
                    setGuestName('');
                  }}
                  className="mt-4 text-xs font-medium text-[#672D3D] underline underline-offset-4"
                >
                  Test another RSVP
                </button>
              </div>
            ) : (
              <form onSubmit={handleRsvp} className="mt-4 space-y-3.5">
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Guest Full Name"
                  className="w-full rounded-xl border border-[#292525]/15 bg-[#FFF9F3] px-4 py-2.5 text-sm focus:border-[#672D3D] focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="rounded-xl border border-[#292525]/15 bg-[#FFF9F3] px-3 py-2.5 text-sm focus:border-[#672D3D] focus:outline-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                  <select
                    value={attending}
                    onChange={(e) => setAttending(e.target.value)}
                    className="rounded-xl border border-[#292525]/15 bg-[#FFF9F3] px-3 py-2.5 text-sm focus:border-[#672D3D] focus:outline-none"
                  >
                    <option>All 3 Celebrations</option>
                    <option>Wedding &amp; Reception</option>
                    <option>Sangeet &amp; Wedding</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="min-h-[44px] w-full rounded-full bg-[#672D3D] px-5 py-2.5 text-sm font-medium text-[#FFF9F3] transition-colors hover:bg-[#4F202D]"
                >
                  Confirm Attendance
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
