type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Menu = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M4 8h16M4 16h16" /></svg>
);
export const Close = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Stethoscope = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M6 3v6a5 5 0 0 0 10 0V3" /><path d="M11 14v2a5 5 0 0 0 10 0v-2" /><circle cx="21" cy="12" r="2" transform="translate(-1 0)" /></svg>
);
export const Clipboard = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" /></svg>
);
export const Leaf = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M5 19c0-9 5-14 15-15-1 10-6 15-15 15Z" /><path d="M5 19 13 11" /></svg>
);
export const HeartHand = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M12 11.5 9.2 8.8a2 2 0 0 1 2.8-2.9 2 2 0 0 1 2.8 2.9L12 11.5Z" /><path d="M3 15h3l4 2h4a1.5 1.5 0 0 0 0-3h-3M14 14l4-2a1.6 1.6 0 0 1 2 2.4L15 19H8l-5-1" /></svg>
);
export const Badge = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><circle cx="12" cy="9" r="6" /><path d="m9 14.5-1.5 6.5L12 19l4.5 2-1.5-6.5" /></svg>
);
export const Phone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
);
export const Mail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6 8.5 7 8.5-7" /></svg>
);
export const Pin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const Clock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Whatsapp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3l-4.5 1.5Z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-1.5-1-2-2l1-1-1-2L9 9.5Z" /></svg>
);
export const Bottle = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base} strokeWidth={1.2}><path d="M20 4h8v6h-8z" /><path d="M20 10c0 4-6 6-6 12v18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V22c0-6-6-8-6-12" /><path d="M14 26h20M14 36h20" /></svg>
);
export const Jar = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base} strokeWidth={1.2}><rect x="12" y="6" width="24" height="6" rx="2" /><path d="M14 12h20v26a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4z" /><path d="M14 22h20M14 32h20" /></svg>
);
export const Bowl = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base} strokeWidth={1.2}><path d="M6 24h36a18 18 0 0 1-36 0Z" /><path d="M16 24c0-4 4-8 8-8s8 4 8 8" /><path d="M18 42h12" /></svg>
);
