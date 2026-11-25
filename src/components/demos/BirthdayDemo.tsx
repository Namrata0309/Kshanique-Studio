import {Calendar, Heart, MapPin, Music, Send} from 'lucide-react';
import {FormEvent, useState} from 'react';
import {STUDIO_IMAGES} from '../../data/studioData';
import {EditorialImage} from '../EditorialImage';

const INITIAL_WISHES = [
  {
    id: 'w1',
    name: 'Naina',
    relation: 'Sister',
    note: 'Happy 25th, Aarav! Still cannot believe how fast we grew up—from rooftop cricket to celebrating your biggest milestone tonight.',
  },
  {
    id: 'w2',
    name: 'Rohan & Kabir',
    relation: 'College Friends',
    note: 'Here is to late-night drives, bad playlists, and the brightest year ahead. Save us a slice of cake!',
  },
];

const MEMORIES = [
  {
    id: 'm1',
    year: '2022',
    caption: 'First Goa road trip with zero plans and endless playlists.',
    image: STUDIO_IMAGES.birthday,
  },
  {
    id: 'm2',
    year: '2024',
    caption: 'Midnight terrace dinners celebrating your first studio launch.',
    image: STUDIO_IMAGES.anniversary,
  },
  {
    id: 'm3',
    year: '2026',
    caption: 'Chapter 25 — golden hour energy and the people who love you most.',
    image: STUDIO_IMAGES.coupleMemories,
  },
];

export function BirthdayDemo() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(0);
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const [wishName, setWishName] = useState('');
  const [wishText, setWishText] = useState('');
  const [wishSuccess, setWishSuccess] = useState(false);

  const handleAddWish = (e: FormEvent) => {
    e.preventDefault();
    if (!wishName.trim() || !wishText.trim()) return;
    setWishes((prev) => [
      {
        id: `w-${Date.now()}`,
        name: wishName.trim(),
        relation: 'Guest',
        note: wishText.trim(),
      },
      ...prev,
    ]);
    setWishName('');
    setWishText('');
    setWishSuccess(true);
    setTimeout(() => setWishSuccess(false), 3000);
  };

  if (!envelopeOpened) {
    return (
      <div className="flex min-h-[560px] flex-col items-center justify-center bg-gradient-to-b from-[#FFF9F3] to-[#F6E7E7] px-6 py-16 text-center">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#672D3D] uppercase">
          A Surprise Keepsake For
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-[#292525] sm:text-5xl">
          Aarav Malhotra
        </h2>
        <p className="mt-2 font-serif text-xl italic text-[#672D3D]">Turning Twenty-Five</p>

        <div className="mt-10 w-full max-w-sm rounded-2xl border border-[#C6A36A]/50 bg-[#FFF9F3] p-8 shadow-[0_24px_50px_-20px_rgba(103,45,61,0.22)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A36A] bg-[#672D3D] font-serif text-xl font-semibold text-[#FFF9F3]">
            25
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[#292525]/75">
            Your friends and family put together a little corner of the internet filled with
            memories, notes, and dinner details.
          </p>
          <button
            type="button"
            onClick={() => setEnvelopeOpened(true)}
            className="mt-6 inline-flex min-h-[46px] w-full items-center justify-center rounded-full bg-[#672D3D] px-6 py-3 text-sm font-medium text-[#FFF9F3] transition-colors hover:bg-[#4F202D]"
          >
            Open Birthday Surprise
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF9F3] text-[#292525]">
      {/* Hero Banner */}
      <div className="relative overflow-hidden border-b border-[#292525]/10 bg-[#F6E7E7]/50 px-6 py-14 text-center sm:px-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#672D3D] uppercase">
          28 November · Mumbai
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-[#292525] sm:text-6xl">
          Aarav Turns <span className="italic text-[#672D3D]">Twenty-Five</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#292525]/75 sm:text-base">
          An intimate evening of candlelight, acoustic vinyls, and warm toasts celebrating 25 years
          of laughter and kindness.
        </p>

        <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-[#292525]/10 bg-white p-2 shadow-sm">
          <div className="aspect-[16/10] overflow-hidden rounded-xl">
            <EditorialImage
              src={STUDIO_IMAGES.birthday}
              alt="Candlelit birthday celebration table"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Memory Gallery */}
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#672D3D] uppercase">
            Memory Reel
          </p>
          <h3 className="mt-2 font-serif text-3xl font-semibold">Favourite Chapters</h3>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {MEMORIES.map((mem, idx) => (
            <button
              key={mem.id}
              type="button"
              onClick={() => setSelectedMemory(idx)}
              className={`group overflow-hidden rounded-2xl border bg-white p-3 text-left transition-all ${
                selectedMemory === idx
                  ? 'border-[#672D3D] shadow-md'
                  : 'border-[#292525]/10 hover:border-[#C6A36A]'
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <EditorialImage
                  src={mem.image}
                  alt={mem.caption}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-xs font-semibold text-[#C6A36A] tabular-nums">{mem.year}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#292525]/80">{mem.caption}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Event Details Strip */}
      <div className="border-y border-[#292525]/10 bg-[#F6E7E7]/45 px-6 py-12 sm:px-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[#292525]/10 bg-[#FFF9F3] p-5">
            <Calendar className="h-4 w-4 text-[#672D3D]" aria-hidden="true" />
            <p className="mt-3 font-serif text-xl font-semibold">Saturday, 28 Nov</p>
            <p className="mt-1 text-xs text-[#292525]/70">7:30 PM onwards · Midnight Cake</p>
          </div>
          <div className="rounded-xl border border-[#292525]/10 bg-[#FFF9F3] p-5">
            <MapPin className="h-4 w-4 text-[#672D3D]" aria-hidden="true" />
            <p className="mt-3 font-serif text-xl font-semibold">The Conservatory</p>
            <p className="mt-1 text-xs text-[#292525]/70">Bandra West, Mumbai</p>
          </div>
          <div className="rounded-xl border border-[#292525]/10 bg-[#FFF9F3] p-5">
            <Music className="h-4 w-4 text-[#672D3D]" aria-hidden="true" />
            <p className="mt-3 font-serif text-xl font-semibold">Dress Code</p>
            <p className="mt-1 text-xs text-[#292525]/70">Warm Neutrals &amp; Espresso</p>
          </div>
        </div>
      </div>

      {/* Interactive Guestbook */}
      <div className="mx-auto max-w-3xl px-6 py-14 sm:px-10">
        <div className="text-center">
          <Heart className="mx-auto h-5 w-5 text-[#672D3D]" aria-hidden="true" />
          <h3 className="mt-2 font-serif text-3xl font-semibold">Leave a Birthday Note</h3>
          <p className="mt-1.5 text-sm text-[#292525]/70">
            Try leaving a note below to see how guests interact with your website.
          </p>
        </div>

        <form
          onSubmit={handleAddWish}
          className="mt-6 rounded-2xl border border-[#292525]/12 bg-white p-5 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              value={wishName}
              onChange={(e) => setWishName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-[#292525]/15 bg-[#FFF9F3] px-4 py-2.5 text-sm focus:border-[#672D3D] focus:outline-none"
            />
            <textarea
              rows={2}
              value={wishText}
              onChange={(e) => setWishText(e.target.value)}
              placeholder="Write a birthday wish for Aarav..."
              className="w-full rounded-xl border border-[#292525]/15 bg-[#FFF9F3] px-4 py-2.5 text-sm focus:border-[#672D3D] focus:outline-none"
            />
            <div className="flex items-center justify-between gap-3">
              {wishSuccess ? (
                <span className="text-xs font-medium text-[#672D3D]">
                  Wish posted to the memory wall!
                </span>
              ) : (
                <span className="text-xs text-[#292525]/55">Instant live demo guestbook</span>
              )}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#672D3D] px-5 py-2 text-xs font-medium text-[#FFF9F3] hover:bg-[#4F202D]"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Post Wish</span>
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 space-y-4">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="rounded-xl border border-[#292525]/10 bg-[#F6E7E7]/35 p-5"
            >
              <p className="text-sm leading-relaxed text-[#292525]/85">“{w.note}”</p>
              <p className="mt-2 text-xs font-semibold text-[#672D3D]">
                {w.name} · <span className="font-normal text-[#292525]/60">{w.relation}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
