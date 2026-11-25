export const STUDIO_CONFIG = {
  brandName: 'Kshanique Studio',
  tagline: 'Where Moments Become Extraordinary',
  // Replace this placeholder WhatsApp number (country code + number, no + or spaces)
  whatsappNumber: '917507938769',
  defaultWhatsappMessage:
    "Hi Kshanique Studio! I'm interested in creating a personalised website for my special occasion. Please share the details.",
  // Editable social & contact links
  instagramHandle: '@kshanique_studio',
  instagramUrl: 'https://www.instagram.com/kshanique_studio/',
  email: 'kshqniquestudio@gmail.com',
  locationNote: 'Crafting digital keepsakes across India & worldwide',
};

export function buildWhatsAppLink(customMessage?: string): string {
  const message = customMessage || STUDIO_CONFIG.defaultWhatsappMessage;
  return `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const STUDIO_IMAGES = {
  birthday: '/src/assets/images/service_birthday_editorial_1795622896881.jpg',
  wedding: '/src/assets/images/service_wedding_editorial_1795622898142.jpg',
  engagement: '/src/assets/images/service_engagement_editorial_1795622898175.jpg',
  anniversary: '/src/assets/images/service_anniversary_editorial_1795622898546.jpg',
  digitalInvites: '/src/assets/images/service_digital_invites_1795622898249.jpg',
  coupleMemories: '/src/assets/images/demo_couple_memories_1795622899231.jpg',
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  linkedDemoId?: 'birthday' | 'wedding' | 'engagement';
  startingPrice: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'birthday',
    number: '01.',
    title: 'Birthday Surprise Websites',
    subtitle: 'Interactive digital keepsakes filled with memories, music, and heartfelt notes.',
    image: STUDIO_IMAGES.birthday,
    imageAlt: 'Candlelit luxury birthday celebration table with blush roses and champagne glasses',
    highlights: [
      'Personalised birthday websites',
      'Photo galleries and special messages',
      'Beautiful animations and interactive surprises',
    ],
    linkedDemoId: 'birthday',
    startingPrice: '₹999',
  },
  {
    id: 'wedding',
    number: '02.',
    title: 'Wedding Websites',
    subtitle: 'Editorial wedding hubs that guide guests through every ceremony with warmth and grace.',
    image: STUDIO_IMAGES.wedding,
    imageAlt: 'Elegant wedding couple walking beneath a deep burgundy floral archway at golden hour',
    highlights: [
      'Couple introduction & story timeline',
      'Wedding event details & dress codes',
      'Curated photo galleries',
      'Venue location and map',
      'Seamless guest RSVP information',
    ],
    linkedDemoId: 'wedding',
    startingPrice: '₹2,499',
  },
  {
    id: 'engagement',
    number: '03.',
    title: 'Engagement Invitations',
    subtitle: 'Bespoke digital ring-ceremony invitations designed to announce your forever in style.',
    image: STUDIO_IMAGES.engagement,
    imageAlt: 'Couple holding hands with delicate engagement ring beside blush roses on travertine stone',
    highlights: [
      'Digital engagement invitations',
      'Couple photographs',
      'Event information & venue pin',
      'Personalised typography and themes',
    ],
    linkedDemoId: 'engagement',
    startingPrice: '₹599',
  },
  {
    id: 'anniversary',
    number: '04.',
    title: 'Anniversary Websites',
    subtitle: 'Romantic digital timelines celebrating milestones, shared journeys, and enduring love.',
    image: STUDIO_IMAGES.anniversary,
    imageAlt: 'Intimate twilight terrace dinner setting with warm candles and burgundy silk',
    highlights: [
      'Love story and milestone memories',
      'Personal letters & voice/video notes',
      'Curated photo galleries',
      'Special interactive reveal animations',
    ],
    startingPrice: '₹999',
  },
  {
    id: 'digital-invitations',
    number: '05.',
    title: 'Digital Invitation Cards',
    subtitle: 'Editorial single-screen and motion cards tailored for effortless WhatsApp sharing.',
    image: STUDIO_IMAGES.digitalInvites,
    imageAlt: 'Handmade cotton paper invitation suite with champagne gold wax seal and rose petals',
    highlights: [
      'Wedding invitations',
      'Birthday invitations',
      'Engagement invitations',
      'Custom occasion & housewarming invitations',
    ],
    startingPrice: '₹399',
  },
];

export type DemoType = 'birthday' | 'wedding' | 'engagement';

export interface DemoCardItem {
  id: DemoType;
  kicker: string;
  title: string;
  description: string;
  previewImage: string;
  previewAlt: string;
  featuredDetails: string[];
  accentTheme: string;
}

export const DEMO_CARDS: DemoCardItem[] = [
  {
    id: 'birthday',
    kicker: 'Birthday Experience · Interactive Keepsake',
    title: 'Aarav Turns 25 — Midnight Toast',
    description:
      'A surprise digital tribute featuring an interactive wax-seal envelope reveal, Polaroid memory wall, guestbook wishes, and celebration details.',
    previewImage: STUDIO_IMAGES.birthday,
    previewAlt: 'Preview of Aarav Turns 25 birthday celebration website',
    featuredDetails: ['Envelope Surprise Reveal', 'Interactive Wish Wall', 'Memory Polaroids'],
    accentTheme: 'Warm Cream & Champagne',
  },
  {
    id: 'wedding',
    kicker: 'Wedding Experience · Multi-Event Hub',
    title: 'Meera & Kabir — Udaipur Celebrations',
    description:
      'A complete luxury wedding website with a couple story timeline, 3-day ceremony schedule tabs, venue directions, photo gallery, and live guest RSVP.',
    previewImage: STUDIO_IMAGES.wedding,
    previewAlt: 'Preview of Meera and Kabir luxury wedding website',
    featuredDetails: ['3-Day Ceremony Tabs', 'Live Guest RSVP', 'Venue Map & Gallery'],
    accentTheme: 'Deep Burgundy & Ivory',
  },
  {
    id: 'engagement',
    kicker: 'Engagement Experience · Digital Suite',
    title: 'Riya & Dev — Ring Ceremony Invite',
    description:
      'An editorial digital engagement invitation with bespoke monogram styling, couple portrait, ceremony itinerary, dress code guide, and instant RSVP.',
    previewImage: STUDIO_IMAGES.engagement,
    previewAlt: 'Preview of Riya and Dev engagement digital invitation',
    featuredDetails: ['Monogram Crest', 'Ceremony Itinerary', 'One-Tap WhatsApp RSVP'],
    accentTheme: 'Blush Pink & Gold',
  },
];

export interface PricingTier {
  id: string;
  name: string;
  category: 'Digital Invitation' | 'Full Website';
  price: string;
  numericPrice: number;
  summary: string;
  deliverables: string[];
  featured?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'birthday-invite',
    name: 'Birthday Digital Invitation',
    category: 'Digital Invitation',
    price: '₹399',
    numericPrice: 399,
    summary: 'Stylish mobile-ready digital card built for effortless WhatsApp invites.',
    deliverables: ['Custom theme & typography', 'Event time & venue map link', '1 revision round'],
  },
  {
    id: 'birthday-website',
    name: 'Birthday Website',
    category: 'Full Website',
    price: '₹999',
    numericPrice: 999,
    summary: 'Interactive surprise website with memories, animations, and guest wishes.',
    deliverables: ['Photo gallery & personal notes', 'Interactive surprise reveal', 'Shareable custom link'],
    featured: true,
  },
  {
    id: 'engagement-invite',
    name: 'Engagement Invitation',
    category: 'Digital Invitation',
    price: '₹599',
    numericPrice: 599,
    summary: 'Elegant ring ceremony invite featuring couple portraits and event highlights.',
    deliverables: ['Couple photo integration', 'Ceremony schedule & venue link', 'WhatsApp-optimised card'],
  },
  {
    id: 'engagement-website',
    name: 'Engagement Website',
    category: 'Full Website',
    price: '₹1,499',
    numericPrice: 1499,
    summary: 'Complete engagement microsite with story, dress code, gallery, and RSVP.',
    deliverables: ['Story & portrait gallery', 'Dress code & event timeline', 'Interactive guest RSVP'],
  },
  {
    id: 'wedding-invite',
    name: 'Wedding Digital Invitation',
    category: 'Digital Invitation',
    price: '₹799',
    numericPrice: 799,
    summary: 'Bespoke multi-card digital wedding invite with royal motifs and ceremony dates.',
    deliverables: ['Custom couple monogram', 'Multi-function date layout', 'Direct venue map link'],
  },
  {
    id: 'wedding-website',
    name: 'Wedding Website',
    category: 'Full Website',
    price: '₹2,499',
    numericPrice: 2499,
    summary: 'Our flagship multi-section wedding experience crafted for modern celebrations.',
    deliverables: ['Couple story & full gallery', 'Multi-day itinerary & maps', 'Live guest RSVP & music'],
    featured: true,
  },
  {
    id: 'anniversary-website',
    name: 'Anniversary Website',
    category: 'Full Website',
    price: '₹999',
    numericPrice: 999,
    summary: 'Romantic milestone keepsake celebrating years together with photos and letters.',
    deliverables: ['Timeline of shared moments', 'Heartfelt letter & gallery', 'Custom transition animations'],
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Personalised Designs',
    description:
      'Every website and invitation is crafted around your story, colour mood, and occasion—never a rigid one-size-fits-all template.',
  },
  {
    number: '02',
    title: 'Mobile-Friendly Websites',
    description:
      'Designed mobile-first so your guests experience crisp typography, smooth scrolling, and instant loading on every phone screen.',
  },
  {
    number: '03',
    title: 'Beautiful Animations',
    description:
      'Tasteful motion reveals, envelope openings, and gentle transitions that feel refined and emotional without overwhelming the page.',
  },
  {
    number: '04',
    title: 'Custom Photo Galleries',
    description:
      'Curated editorial photo layouts that showcase your favourite candid portraits and milestone moments in high clarity.',
  },
  {
    number: '05',
    title: 'Easy WhatsApp Sharing',
    description:
      'Receive a clean, shareable link with tailored social preview cards ready to send across family WhatsApp groups in one tap.',
  },
  {
    number: '06',
    title: 'Made Especially for Your Occasion',
    description:
      'From intimate 25th birthday surprises to multi-day palace weddings, every detail reflects the warmth of your celebration.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Choose Your Occasion',
    description: 'Pick whether you need a digital invitation card or a full personalised celebration website.',
  },
  {
    step: '02',
    title: 'Share Your Photos and Details',
    description: 'Send us your event dates, venue details, favourite photographs, and personal messages via WhatsApp.',
  },
  {
    step: '03',
    title: 'Select Your Preferred Theme',
    description: 'Choose from our curated luxury palettes or let us tailor a look matching your event decor and outfit.',
  },
  {
    step: '04',
    title: 'Review Your Website Preview',
    description: 'Explore a live preview link on your phone and share any refinements before final publishing.',
  },
  {
    step: '05',
    title: 'Receive Your Final Website',
    description: 'Get your live celebration link ready to share instantly with friends and family everywhere.',
  },
];

export const SAMPLE_TESTIMONIALS = [
  {
    id: 'rev-1',
    quote:
      'We wanted something modern for our engagement instead of a heavy PDF. Everyone in both families kept opening the link just to admire the photos and music.',
    author: 'Ananya & Siddharth',
    occasion: 'Engagement Website · Mumbai',
    isSample: true,
  },
  {
    id: 'rev-2',
    quote:
      'I gifted a birthday surprise website to my sister with memories from all our friends. She actually teared up when the envelope animation opened on her phone.',
    author: 'Rhea Kapoor',
    occasion: 'Birthday Surprise Website · Bengaluru',
    isSample: true,
  },
  {
    id: 'rev-3',
    quote:
      'Our guests used the wedding website every single day for ceremony timings, dress codes, and Google Map directions. It looked like an editorial magazine.',
    author: 'Vikram & Tara',
    occasion: 'Wedding Website · Jaipur',
    isSample: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How can I order a personalised website?',
    answer:
      'Simply click any "Create Your Website" or WhatsApp button on this page. Tell us your occasion, date, and preferred package, and we will guide you step-by-step on sharing your photos and details.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Digital invitation cards are typically ready within 24–48 hours after receiving your details. Full personalised celebration websites take 3–5 days depending on customisation and photo curation.',
  },
  {
    question: 'Can I customise the design?',
    answer:
      'Yes! Colours, fonts, floral motifs, section order, background music, and event timelines can all be tailored to match your celebration theme or outfit palette.',
  },
  {
    question: 'Can I add my own photos and videos?',
    answer:
      'Absolutely. You can include curated photo galleries, couple portraits, pre-wedding shoots, and short celebration video clips or voice messages.',
  },
  {
    question: 'Can I share the website through WhatsApp?',
    answer:
      'Yes, every website and digital invitation comes with a clean, fast-loading link and a custom social preview card designed specifically for smooth WhatsApp sharing.',
  },
  {
    question: 'Do you provide revisions?',
    answer:
      'Yes, every order includes a preview review round where you can request text edits, photo swaps, or layout tweaks before we finalise your live link.',
  },
];
