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
  lead: "FitKit is a fashion-tech assistant that turns outfit inspiration from Pinterest into complete, order-ready carts in just one click.",
  paragraphs: [
    "Young shoppers spend an average of two hours manually searching for clothes they see on social media, often without success.",
    "Our custom search algorithm instantly identifies exact items, finds available sizes, matches your budget, and ships the full look directly to your door.",
    "We currently have a working MVP in the Chrome Web Store, mobile apps (iOS and Android) in active development, and a growing waitlist of early adopters ready for seamless shopping.",
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
      q: "How does FitKit make money?",
      a: "We take a small service fee (5-20%) on every purchase made through our app, as users buy complete outfits in bulk.",
    },
    {
      q: "How much are you raising?",
      a: "We are currently raising a $4,000 pre-seed round to fund marketing, server infrastructure, app store launches, and legal setup for the next 6 months.",
    },
    {
      q: "Who are your competitors?",
      a: "While platforms like Pinterest and LTK offer inspiration, FitKit is the only service that provides a 1-click checkout for entire outfits with integrated budget matching.",
    },
    {
      q: "How can I get in touch?",
      a: "You can reach out to our founders directly via email or through our LinkedIn profiles linked in the navigation bar.",
    },
  ],
};

export const PRODUCTS = {
  title: "Products",
  extension: {
    name: "Browser extension",
    description: [
      "Our Chrome extension lets you select an outfit post, instantly find exact items and prices, and order the entire look (or singular item) in just one click.",
      "Just open an image of an outfit, and our algorithm will detect the items, find the best prices, and create a ready-to-buy cart in seconds.",
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
      "The FitKit iOS app automatically syncs with your Pinterest saves to turn your fashion boards into a 1-click shopping experience.",
      "At launch, you will get automatic outfit recognition, budget matching, and seamless direct-to-door delivery.",
    ],
    cta: "Join waitlist",
    screenshots: [
      { src: "/app-1.jpg", alt: "Fitkit app: Shop This Look", placeholder: "App screen 1" },
      { src: "/app-2.jpg", alt: "Fitkit app: Get This Look checkout", placeholder: "App screen 2" },
    ],
  },
};
