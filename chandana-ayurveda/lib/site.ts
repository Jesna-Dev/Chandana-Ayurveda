// Central place for clinic details — update these with the real information.
export const site = {
  name: "Chandana Ayurveda",
  tagline: "Ayurveda Hospital & Wellness Centre",
  email: "info@chandanaayurveda.com",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  address: "Chandana Ayurveda Hospital, Kerala, India",
  hours: "Mon – Sat · 8:00 AM – 7:00 PM",
  // Full address lines for the Contact page (replace with the real address)
  addressLines: ["Chandana Ayurveda Hospital", "Kerala, India"],
  // What Google Maps should search for — the exact hospital name + town, or "lat,lng"
  // coordinates for a precise pin (right-click the spot in Google Maps to copy them).
  mapQuery: "Kerala, India",
  // Day-by-day hours for the Contact page
  hoursDetail: [
    { days: "Monday – Saturday", time: "8:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  // WhatsApp number in international format, digits only. Appointment requests are sent here.
  whatsappNumber: "917560959885",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    whatsapp: "#",
  },
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "History", href: "/history" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Our Doctor", href: "/#doctor" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const images = {
  about: u("photo-1596178065887-1198b6148b2b", 1400),
};

export const treatments = [
  {
    name: "Panchakarma",
    image: u("photo-1612817288484-6f916006741a", 900),
    desc: "The classical five-fold detoxification that cleanses deep-rooted toxins and restores the balance of the doshas.",
  },
  {
    name: "Abhyanga",
    image: u("photo-1544161515-4ab6ce6db874", 900),
    desc: "A full-body massage with warm, herb-infused oils that nourishes tissues, calms the mind and improves circulation.",
  },
  {
    name: "Shirodhara",
    image: u("photo-1515377905703-c4788e51af15", 900),
    desc: "A continuous, gentle stream of medicated oil over the forehead to relieve stress, insomnia and headaches.",
  },
  {
    name: "Elakizhi & Njavarakizhi",
    image: u("photo-1519823551278-64ac92734fb1", 900),
    desc: "Warm herbal and rice poultices that ease joint pain, stiffness and muscular conditions.",
  },
  {
    name: "Marma Therapy",
    image: u("photo-1611073615830-9f76902c10fe", 900),
    desc: "Precise stimulation of vital energy points to release blockages and support natural healing.",
  },
  {
    name: "Mukhalepam",
    image: u("photo-1570172619644-dfd03ed5d881", 900),
    desc: "Traditional herbal face packs prepared fresh to rejuvenate and brighten the skin.",
  },
];

// Stock photos for now — replace with photos of the hospital's own rooms.
// `span` controls the tile size in the desktop grid.
export const facilities = [
  {
    name: "Therapy Rooms",
    desc: "Calm, private rooms prepared for traditional oil therapies.",
    image: u("photo-1600334129128-685c5582fd35", 1400),
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Consultation Rooms",
    desc: "Unhurried one-to-one consultations, pulse diagnosis and Prakriti assessment.",
    image: u("photo-1631217868264-e5b90bb7e133", 1000),
    span: "lg:col-span-2",
  },
  {
    name: "Inpatient Care",
    desc: "Clean, comfortable rooms for residential treatment.",
    image: u("photo-1631049307264-da0ec9d70304", 700),
    span: "",
  },
  {
    name: "Accommodation",
    desc: "Restful stays for patients and companions.",
    image: u("photo-1582719478250-c89cae4dc85b", 700),
    span: "",
  },
  {
    name: "Yoga & Meditation",
    desc: "Daily sessions to support healing.",
    image: u("photo-1506126613408-eca07ce68773", 700),
    span: "",
  },
  {
    name: "Herbal Pharmacy",
    desc: "Classical medicines prepared with care.",
    image: u("photo-1615485500704-8e990f9900f7", 700),
    span: "",
  },
  {
    name: "Ayurvedic Diet",
    desc: "Fresh meals planned to suit each treatment.",
    image: u("photo-1546833999-b9f581a1996d", 700),
    span: "",
  },
  {
    name: "Healing Gardens",
    desc: "Green, quiet spaces to rest and recover.",
    image: u("photo-1520250497591-112f2f40a3f4", 700),
    span: "",
  },
];

// Confirm these against what the hospital actually offers.
export const amenities = [
  "Private & shared rooms",
  "Attached bathrooms",
  "Hot water",
  "Wi-Fi",
  "Parking",
  "Wheelchair access",
  "Stay for a companion",
  "Doctor on call",
];

// Only list accreditations the hospital actually holds, with certificate or registration
// details. The section stays hidden while this list is empty. Examples of the format:
//   { name: "NABH Accredited", detail: "Certificate no. …, valid until …" },
//   { name: "Ministry of AYUSH", detail: "Registration no. …" },
//   { name: "Kerala Tourism Green Leaf", detail: "Classified Ayurveda centre, …" },
export const accreditations: { name: string; detail: string }[] = [];

// Real patient feedback only — never write or edit reviews on a patient's behalf.
// Get written consent before publishing (keep the signed form on file), and set
// `consent: true` only once you have it; entries without consent are never shown.
// Use initials or first name + town if the patient prefers. The section stays
// hidden until at least one consented testimonial is added. Example format:
//   {
//     quote: "In the patient's own words…",
//     name: "A. K.",
//     detail: "Thrissur",
//     treatment: "Panchakarma",
//     consent: true,
//   },
export type Testimonial = {
  quote: string;
  name: string;
  detail?: string;
  treatment?: string;
  consent: boolean;
};

export const testimonials: Testimonial[] = [];

// Optional link to the hospital's public reviews (e.g. Google Business profile).
export const reviewsUrl = "";

// Gallery. Replace the stock photos with the hospital's own: put files in
// public/gallery/ and use e.g. { src: "/gallery/reception.jpg", width: 1200, height: 800, … }.
// Categories with no photos are hidden from the filter, so "Hospital" and "Doctors"
// appear once real photos are added. Only add photos of staff or patients with their consent.
export const galleryCategories = [
  "Hospital",
  "Doctors",
  "Treatment Rooms",
  "Therapies",
  "Facilities",
] as const;

export type GalleryImage = {
  src: string;
  alt: string;
  category: (typeof galleryCategories)[number];
  width: number;
  height: number;
};

const g = (id: string, width: number, height: number) => ({
  src: `https://images.unsplash.com/${id}?w=${width}&h=${height}&q=80&auto=format&fit=crop`,
  width,
  height,
});

export const galleryImages: GalleryImage[] = [
  { ...g("photo-1600334129128-685c5582fd35", 1200, 800), alt: "Hot stone therapy room", category: "Treatment Rooms" },
  { ...g("photo-1515377905703-c4788e51af15", 900, 1200), alt: "Medicated oil being prepared", category: "Therapies" },
  { ...g("photo-1631049307264-da0ec9d70304", 1200, 800), alt: "Inpatient room", category: "Facilities" },
  { ...g("photo-1544161515-4ab6ce6db874", 1200, 900), alt: "Abhyanga oil massage", category: "Treatment Rooms" },
  { ...g("photo-1506126613408-eca07ce68773", 900, 1200), alt: "Morning meditation", category: "Facilities" },
  { ...g("photo-1519823551278-64ac92734fb1", 1200, 800), alt: "Therapeutic massage", category: "Therapies" },
  { ...g("photo-1582719478250-c89cae4dc85b", 1200, 900), alt: "Accommodation with garden view", category: "Facilities" },
  { ...g("photo-1611073615830-9f76902c10fe", 900, 1200), alt: "Marma point therapy", category: "Therapies" },
  { ...g("photo-1600334089648-b0d9d3028eb2", 1200, 800), alt: "Stone therapy with orchids", category: "Treatment Rooms" },
  { ...g("photo-1546833999-b9f581a1996d", 1200, 900), alt: "Ayurvedic meal", category: "Facilities" },
  { ...g("photo-1570172619644-dfd03ed5d881", 1200, 800), alt: "Herbal face pack", category: "Therapies" },
  { ...g("photo-1615485500704-8e990f9900f7", 900, 1200), alt: "Dried medicinal herbs", category: "Facilities" },
  { ...g("photo-1520250497591-112f2f40a3f4", 1200, 800), alt: "Gardens and pool", category: "Facilities" },
  { ...g("photo-1620733723572-11c53f73a416", 1200, 900), alt: "Aromatherapy", category: "Therapies" },
];

// Landmarks and travel notes shown under "How to reach us" on the Contact page.
// Hidden while empty. Example: { mode: "By train", text: "… km from … railway station" },
export const directions: { mode: string; text: string }[] = [];

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`;
export const whatsappUrl = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hello Chandana Ayurveda, I have a question.")}`
  : "";

// Medicines for sale — replace with the hospital's actual products. `price` and `size`
// are optional; add `image: "/medicines/….jpg"` (in public/medicines/) for a real photo.
export type Medicine = {
  name: string;
  type: string;
  form: "oil" | "paste" | "powder";
  desc: string;
  size?: string;
  price?: string;
  image?: string;
};

export const medicines: Medicine[] = [
  {
    name: "Chandha™",
    type: "Herbal powder",
    form: "powder",
    desc: "Pure Ayurveda for a healthier tomorrow. Ask us about its ingredients and how to take it.",
    image: "/medicines/chandha.jpg",
  },
  {
    name: "Dhanwantharam Thailam",
    type: "Medicated oil",
    form: "oil",
    desc: "A classical Kerala oil traditionally used for Abhyanga massage to support joints, muscles and nerves.",
  },
  {
    name: "Pinda Thailam",
    type: "Medicated oil",
    form: "oil",
    desc: "A cooling oil traditionally applied to soothe joint pain and burning sensation.",
  },
  {
    name: "Chyawanprash",
    type: "Lehyam · herbal jam",
    form: "paste",
    desc: "A time-honoured rasayana made with amla, traditionally taken to support immunity and vitality.",
  },
];

export const medicineEnquiryUrl = (name: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${site.name}, I would like to buy ${name}. Is it available, and what is the price?`,
  )}`;
