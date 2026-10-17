// Booking form options, validation and the WhatsApp message it sends.
import { site, treatments } from "./site";

export const services = ["General consultation", ...treatments.map((t) => t.name)];

export const consultationTypes = [
  { value: "In-person", label: "In-person", hint: "Visit the hospital" },
  { value: "Online", label: "Online", hint: "Video consultation" },
  { value: "Inpatient", label: "Inpatient stay", hint: "Residential treatment enquiry" },
] as const;

export const timeSlots = ["Morning (8 – 12)", "Afternoon (12 – 4)", "Evening (4 – 7)"] as const;

export type BookingRequest = {
  service: string;
  consultationType: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
};

export type BookingErrors = Partial<Record<keyof BookingRequest, string>>;

// `today` is YYYY-MM-DD in the visitor's local time
export function validate(r: BookingRequest, today: string): BookingErrors {
  const errors: BookingErrors = {};
  if (!services.includes(r.service)) errors.service = "Please choose a service.";
  if (!consultationTypes.some((c) => c.value === r.consultationType))
    errors.consultationType = "Please choose a consultation type.";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date) || r.date < today) errors.date = "Please choose today or a later date.";
  if (!(timeSlots as readonly string[]).includes(r.time)) errors.time = "Please choose a time.";
  if (r.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^\+?[\d\s-]{7,16}$/.test(r.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (r.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email.trim())) errors.email = "Please check your email.";
  if (!r.consent) errors.consent = "Please agree so we can contact you.";
  return errors;
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

export function whatsappBookingUrl(r: BookingRequest) {
  const text = [
    `Hello ${site.name}, I would like to request an appointment.`,
    ``,
    `*Service:* ${r.service}`,
    `*Consultation:* ${r.consultationType}`,
    `*Preferred date:* ${formatDate(r.date)}`,
    `*Preferred time:* ${r.time}`,
    ``,
    `*Name:* ${r.name.trim()}`,
    `*Phone:* ${r.phone.trim()}`,
    ...(r.email.trim() ? [`*Email:* ${r.email.trim()}`] : []),
    ...(r.message.trim() ? [``, `*Health concern:* ${r.message.trim()}`] : []),
  ].join("\n");
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
