/**
 * Single source of truth for the site's editable details.
 * Replace the three placeholders below with the live values.
 */

// TODO: replace with your live booking link (Cal.com, Calendly, SavvyCal…)
export const BOOKING_URL = "https://calendly.com/activeiingredient/45mins";

// TODO: replace with the studio's email address
export const EMAIL = "hello@activiingredient.site";

// TODO: replace with the live Instagram profile URL
export const INSTAGRAM_URL = "https://instagram.com/activingredent/";

// Used for canonical + Open Graph URLs. Update after the first deploy.
export const SITE_URL = "https://activeingredient.site";

export const SITE = {
  name: "Active Ingredient",
  wordmark: "Active ingredient",
  tagline: "Turn interest into bookings.",
  descriptor: "Beyond the Algorithm",
  url: SITE_URL,
  title: "Active Ingredient — Turn interest into bookings",
  description:
    "Active Ingredient is a growth partner for wellness retreat hosts and spiritual coaches. Meta ad campaigns that put the right message in front of the right people, with a clear next step, so interest turns into deposits and bookings.",
  email: EMAIL,
  booking: BOOKING_URL,
  instagram: INSTAGRAM_URL,
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
