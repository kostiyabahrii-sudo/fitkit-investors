// All site copy, links and images live here. Edit this file to fill the site.
//
// Images: put files into /public and set `src` (e.g. "/team.jpg").
// While `src` is null a labelled placeholder box is shown instead.

export const BRAND = "Fitkit";

export const LINKS = {
  linkedin: "https://www.linkedin.com/company/fitkitcommerce/",
  waitlist: "https://waitlist-frontend-646k.onrender.com/",
  store: "https://chromewebstore.google.com/detail/fitkit/johbinipmcknlfoomlbicpkccbambcam",
  // Footer "Contact us". Any link works: https://..., mailto:hi@fitkit.space,
  // a form, Telegram. Can also be set with VITE_CONTACT_URL.
  // While empty, "Contact us" shows as plain text.
  contact: import.meta.env.VITE_CONTACT_URL || "",
};

export const ABOUT = {
  title: "Who are we?",
  lead: "FitKit is a way to turn posts you’ve already saved on Pinterest into complete, order-ready carts in just one click.",
  paragraphs: [
    "We're first to offer one-click purchase of any outfits you'd see on social media.",
    "Unlike other search solutions our algorithm, made specifically for clothes, instantly identifies exact items, finds available sizes, matches your budget, and ships the full look directly to your door.",
  ],
};

export const TEAM = {
  title: "Core team",
  // Wide group photo shown under the nav. Leave src null to hide it.
  photo: {
    src: null,
    alt: "The Fitkit team",
    placeholder: "Team photo — wide, 16:9",
  },
  // Portraits: 4:5, faces near the top third. Files live in public/team/.
  members: [
    {
      name: "Mariia",
      role: "Founder, UI/UX designer",
      bio: "3 years of experience in web design, nonprofit cofounder.",
      photo: "/team/mariia.jpg",
      linkedin: null,
    },
    {
      name: "Ivan",
      role: "Cofounder, full-stack developer",
      bio: "Ex-software developer at WiterOK startup, platinum Infomatrix winner.",
      photo: "/team/ivan.jpg",
      linkedin: null,
    },
    {
      name: "Sophiia",
      role: "Marketing strategist",
      bio: "Ex-marketing intern in the US.",
      photo: "/team/sophiia.jpg",
      linkedin: null,
    },
    {
      name: "Kostyantin",
      role: "Backend developer",
      bio: "Builds Fitkit’s backend: Django APIs, database and deployment. Shipped the waitlist that collects early users.",
      photo: "/team/kostyantin.jpg",
      linkedin: null,
    },
  ],
};

export const ROADMAP = {
  title: "Roadmap",
  stages: [
    {
      label: "Now",
      items: ["Finish MVP", "acquire funding", "launch iOS app"],
    },
    {
      label: "Next",
      items: ["Checkout beta", "set up legal entity", "marketing campaign"],
    },
    {
      label: "Later",
      items: [
        "Extend business to non-clothing items",
        "contracts with shipping companies",
        "contracts with vendors",
        "subscription-based creator fees",
        "Android app",
        "worldwide operation",
        "in-house search optimization",
      ],
    },
  ],
};

export const FAQ = {
  title: "FAQ",
  items: [
    {
      q: "How do we make money?",
      a: "We take a small service fee (5-20%) on every purchase made through our app, as users buy complete outfits in bulk.",
    },
    {
      q: "Who are our competitors?",
      a: [
        "Platforms like Pinterest and LTK offer outfit discovery through the feed, while FitKit is the only service that provides a 1-click purchase experience on what's already been discovered through Pinterest. For more information, visit ",
        { to: "/products", text: "our product page" },
        ".",
      ],
    },
    {
      q: "Placeholder question: how can I get in touch?",
      a: "Placeholder answer.",
    },
  ],
};

export const PRODUCTS = {
  title: "Products",
  extension: {
    name: "Browser extension",
    description: [
      "Our Chrome extension lets you instantly find exact items from a Pinterest post and order the entire look (or some items) in just one click.",
      "Just open a post, and our algorithm will detect the items, find the best prices, and create a ready-to-buy cart in seconds. Automatic purchase coming in next updates.",
    ],
    cta: "Open in store",
    screenshot: {
      src: "/extension.jpg",
      alt: "Fitkit browser extension: pinned items with prices and Buy pin items",
      placeholder: "Extension screenshot",
    },
  },
  app: {
    name: "iOS app",
    description: [
      "Our iOS app automatically syncs with your Pinterest saves to turn your fashion boards into a 1-click shopping experience, now on mobile.",
      "Multiple carts, retailer comparisons, native UI and auto checkout coming at launch.",
    ],
    cta: "Join waitlist",
    screenshots: [
      { src: "/app-1.jpg", alt: "Fitkit app: Shop This Look", placeholder: "App screen 1" },
      { src: "/app-2.jpg", alt: "Fitkit app: Get This Look checkout", placeholder: "App screen 2" },
    ],
  },
};
