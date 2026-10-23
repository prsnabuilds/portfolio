// All site copy in one place — edit text here without touching layout.
export const site = {
  name: "Prasanna Narayanan",
  email: "hi@prsana.com", // NOTE: as written in the Figma content plan — double-check the spelling
  cta: "Let’s Talk",
};

export const hero = {
  titleWake: "Hey, I’m ",
  titleName: "Prasanna",
  sub: "I design Conversion-ready websites and product interfaces your business grows on",
  nav: [
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export const projects = [
  {
    title: "Migrating an Edtech Website Off a Restrictive Builder",
    desc: "Migrated the website from a platform that had limited design and testing flexibility to Framer - redesigned and built landing pages for the entire program lineup",
    tags: ["Web Design & Development", "Funnel Optimization"],
    image: "/assets/c1x3.png",
    alt: "Trade Direct. Settle Certain. — project hero screen",
    link: "#",
  },
  {
    title: "Designing the Brand and Landing Page for an AI-First Commodity Trade Platform",
    desc: "A new AI-First B2B trading brand needed to look credible across the India–Gulf corridor. Designed the full identity system and the landing page that carries it.",
    tags: ["Brand Identity", "Web Design"],
    image: null, // no artwork in the Figma content plan yet — placeholder until screenshots arrive
    alt: "AI-first commodity trade platform brand",
    link: "#",
  },
  {
    title: "Designing and Building a Management System for Multi-Property PGs",
    desc: "A custom rent and tenant management system for a PG business. Designed and built from the first workflow to the final screen.",
    tags: ["Product Design", "AI Development"],
    image: null,
    alt: "Multi-property PG management system",
    link: "#",
  },
];

export const services = [
  {
    number: "01",
    title: "Websites and Landing Pages That Convert",
    desc: "Designed and built in Framer, Webflow or Shopify, with conversion structure, tracking, and analytics set up from day one.",
    tags: ["Web Design", "Conversion optimization", "Web Development", "Funnel Optimization"],
  },
  {
    number: "02",
    title: "Digital Products",
    desc: "Custom products designed and built around how a business actually runs, from the first workflow to the final screen.",
    tags: ["Product Design", "UX/UI Design", "Design System", "AI Development"],
  },
  {
    number: "03",
    title: "Brand Identity",
    desc: "Positioning, visual identity, and a design system, so the brand holds up across a website, a product, and a pitch.",
    tags: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines"],
  },
];

export const process = [
  {
    icon: "/assets/icons/understand.svg",
    title: "Understand",
    desc: "Define the business goal, the audience, and the one action a visitor should take, before any screen is designed.",
  },
  {
    icon: "/assets/icons/design.svg",
    title: "Design",
    desc: "Structure the pages around that action. Layout, copy hierarchy, and visuals are reviewed with you before anything is built.",
  },
  {
    icon: "/assets/icons/build.svg",
    title: "Build",
    desc: "Build the approved design in Framer, Webflow, or code, with tracking and analytics set up from the start.",
  },
  {
    icon: "/assets/icons/launch.svg",
    title: "Launch and Refine",
    desc: "Go live, check that forms, tracking, and pages work as designed, then refine based on what the data shows.",
  },
];

export const about = {
  kicker: "/about me",
  title: "How I Got Here",
  text: "Through five years of graphic, motion, product, and UI/UX design, I kept returning to the same question: what makes someone act? That pulled me closer to the teams who measure it. I worked alongside performance and marketing teams, designing the ad creative and the landing pages and funnels their traffic lands on, then adjusting both as results came in. Web migrations and products built from scratch grew out of the same work. Now I bring all of it into one focus: designing and building websites and digital products for businesses that want growth they can measure.",
  image: "/assets/about.png",
  alt: "Softened waves in dramatic profile",
};

export const contact = {
  kicker: "/Start With a Conversation",
  title: "Got a Site or Product to Fix, Launch, or Grow?",
};
