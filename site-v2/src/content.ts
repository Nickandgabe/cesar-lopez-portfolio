/**
 * All copy, numbers and case data for the site.
 * Edit this file to change what the site says — components only render it.
 *
 * Text inside [brackets] is a placeholder that still needs real content.
 * It is shown on the page on purpose, so it can't ship unnoticed.
 */
import type { ImageMetadata } from 'astro';

import heroImage from './assets/hero-poster.jpg';
import portraitImage from './assets/portrait.png';
import pulsePoster from './assets/pulse-poster.jpg';
import ccImage from './assets/cc.png';
import nexusImage from './assets/nexus.png';
import teamImage from './assets/team.png';
import trackImage from './assets/track.jpg';
import togetherImage from './assets/together.jpg';
import closeImage from './assets/close.png';

export interface Img {
  src: ImageMetadata;
  alt: string;
  /** Optional looping video shown over the image; the image must be its first frame. */
  video?: { webm?: string; mp4?: string };
}

export interface Link {
  label: string;
  href: string;
}

/** Text with an optional lighter accent tail, e.g. "Leadership, <by chapter>". */
export interface SplitText {
  main: string;
  accent?: string;
}

export const site = {
  url: 'https://www.iamcesarlopez.com',
  title: 'Cesar Lopez — AI Product Design Leader',
  description:
    'I lead products end to end, from the first business question to what ships and how it performs. My operating model lets AI agents do the heavy lifting while people make the calls that matter.',
  ogImage: '/og.jpg',
  ogImageAlt: 'Two glass diamonds with streams of blue light flowing through a glowing core',
  person: {
    name: 'Cesar Augusto Lopez Rodriguez',
    alternateName: 'Cesar Lopez',
    jobTitle: 'Lead Sr UX Designer',
    worksFor: 'AT&T',
    sameAs: ['https://linkedin.com/in/ceslop'],
  },
};

export const nav = {
  name: 'Cesar Lopez',
  portrait: { src: portraitImage, alt: '' } satisfies Img,
  links: [
    { label: 'Work', href: '/#work' },
    { label: 'Leadership', href: '/#leadership' },
    { label: '3D & range', href: '/#range' },
    { label: 'Contact', href: '#contact' },
  ] satisfies Link[],
  // The live site's résumé (password-protected). Swap for a public PDF when ready.
  resume: { label: 'Résumé ↓', href: 'https://www.iamcesarlopez.com/resume/' } satisfies Link,
};

export const hero = {
  eyebrow: 'AI Product Design Leader',
  headline: {
    main: 'Customers ask.',
    accent: 'Agents build. Team Approve.',
  } satisfies SplitText,
  body:
    'I lead products end to end, from the first business question to what ships and how it performs. My operating model lets AI agents do the heavy lifting while people make the calls that matter.',
  // Top line: [prefix] value[suffix] [unit] — only `value` counts up. Label goes below.
  stats: [
    { prefix: '', value: 18, suffix: '', unit: 'years', label: 'in product & design' },
    { prefix: 'Up to', value: 20, suffix: '', unit: '', label: 'people led across design, production and logistics' },
    { prefix: '', value: 3, suffix: '', unit: 'ventures', label: 'founded' },
    { prefix: '', value: 180, suffix: 'M', unit: 'customers', label: 'reached by my flows' },
  ],
  primary: { label: 'See the work ↓', href: '#work' } satisfies Link,
  secondary: { label: 'Get in touch', href: '#contact' } satisfies Link,
  image: {
    src: heroImage,
    alt: 'Concept image: two glass diamonds with streams of blue light flowing through a glowing core',
  } satisfies Img,
  /**
   * Hero video. Leave both empty to show the image only.
   * To use a video: put the files in public/video/ and set the paths, e.g.
   *   mp4: '/video/hero.mp4', webm: '/video/hero.webm'
   * The hero image above stays as the poster frame and as the reduced-motion fallback.
   */
  // Source: gemini_generated_video_0dcd3f46.mp4, played forward then backward so the loop has no jump.
  video: { mp4: '/video/hero.mp4', webm: '/video/hero.webm' },
};

/** One big-number stat. Only `value` counts up; `suffix` is shown in the accent colour. */
export interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
}

/** Career-wide strip under the hero. Must not repeat hero stats (18 years, up to 20 people, 3 ventures, 180M). */
export const career = {
  title: 'Range across a career',
  subtitle: 'Eighteen years, two countries, and every layer of a product, from physical objects to AI agents.',
  // Big number + accent suffix, then `unit` as a small label and `detail` below it.
  items: [
    { value: 12, suffix: '+', unit: 'industries', detail: 'from telecom, healthcare and fintech to NGOs, political campaigns and manufacturing' },
    { value: 30, suffix: '+', unit: 'brands', detail: 'including Toyota, Bavaria and AT&T' },
    { value: 2, suffix: '', unit: 'countries', detail: 'products built in Colombia and the US' },
    // The 8 disciplines: 3D, industrial design, UX, front-end code, VR/AR, product management,
    // AI orchestration, photography. Change the number if any is removed.
    { value: 8, suffix: '', unit: 'disciplines', detail: 'from 3D and industrial design to digital product design, code and AI orchestration' },
  ],
  industriesLabel: 'Industries',
  industries: ['Telecom', 'Healthcare', 'Automotive', 'Fintech', 'Education', 'Sports', 'Construction', 'Political parties', 'NGOs', 'Floriculture', 'Plumbing fixtures', 'Veterinary'],
};

/* ---------------- Case studies ---------------- */

export interface ResultGroup {
  label: string;
  items: { value: string; label: string }[];
}

export interface CaseStudy {
  slug: string;
  /** false = page only exists in `npm run dev`, never in the deployed build. */
  published: boolean;
  /** Why it isn't published yet (shown in dev only). */
  hold?: string;
  label: string;
  title: SplitText;
  impact: string;
  image: Img;
  results: ResultGroup[];
  problem: string;
  role: string[];
  decisions: { title: string; why: string }[];
  visuals: string[];
  takeaway: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-product-journey',
    published: true,
    label: 'AT&T · AI operating model',
    title: { main: 'AI Product Journey', accent: '& Pulse' },
    impact: 'An AI-agent operating model presented to VPs and AVPs — and the tools to run it.',
    image: {
      src: pulsePoster,
      alt: 'A glass sphere lit with blue energy, with smaller glass spheres orbiting it on lines of light',
      // Source: gemini_generated_video_d754408c.mp4, played forward then backward.
      video: { webm: '/video/pulse.webm', mp4: '/video/pulse.mp4' },
    },
    results: [
      {
        label: 'Proof',
        items: [
          { value: 'VPs & AVPs', label: 'audience the operating model was presented to' },
          { value: 'Pulse', label: 'the OKR platform I own — started as my Cascade prototype' },
          { value: '3 levels', label: 'Strategic Priorities → Objectives → Key Results' },
          { value: '[TODO]', label: '[Adoption or usage metric for Pulse, if AT&T allows]' },
        ],
      },
    ],
    problem:
      'AI agents change how product teams explore and build. Leadership needed an operating model for it: what agents do, where people decide, and what keeps quality when speed goes up.',
    role: [
      'Lead Sr UX Designer at AT&T, leading a team of 5 designers on AI-driven and agentic experiences.',
      'I built AI Product Journey and presented it to VPs and AVPs.',
      'I own Pulse, the OKR platform, from prototype to product.',
    ],
    decisions: [
      {
        title: 'Designed an operating model for AI agents',
        why: 'Agents explore and build, people decide, the design system holds it together, and guardrails protect what ships — a model leaders can adopt, not a single screen.',
      },
      {
        title: 'Took Pulse from my Cascade prototype to the platform I own',
        why: 'The model needed a tool to run on. Pulse makes the OKRs behind it visible.',
      },
      {
        title: 'Narrowed Pulse after AVP feedback',
        why: 'Down to Strategic Priorities → Objectives → Key Results, with AI-assisted objective rewriting — fewer levels, clearer objectives.',
      },
      {
        title: 'Built Plexus as a working demonstrator',
        why: 'It turns a Jira epic into a build-ready package — proof the model runs end to end. A demonstrator, not a shipped product.',
      },
    ],
    visuals: [
      '[Visual — the operating model diagram, redrawn without AT&T material]',
      '[Visual — Pulse, only what AT&T approves for publication]',
    ],
    takeaway: 'The operating model is the product: AI does more of the work, and people keep the decisions.',
  },
  {
    slug: 'customer-connect',
    published: true,
    label: 'AT&T · Enterprise scale',
    title: { main: 'Customer Connect' },
    impact: '8x faster to market for 9,000 agents serving 180M customers.',
    image: { src: ccImage, alt: 'Seven small glass blocks merging into larger blue-lit glass blocks' },
    results: [
      {
        label: 'My design work',
        items: [
          { value: '50+', label: 'service flows: internet, wireless, billing, payments, account changes' },
          { value: '7 → 3', label: 'steps per flow on average — 57% fewer' },
        ],
      },
      {
        label: 'Program results',
        items: [
          { value: '8×', label: 'faster time to market' },
          { value: '75%', label: 'API reuse across the program' },
          { value: '~2M', label: 'work hours saved a year' },
          { value: '9,000', label: 'agents serving 180M customers' },
        ],
      },
    ],
    problem:
      'AT&T agents were working across 50+ legacy systems. Customer Connect moved them onto one unified Salesforce platform — and every service flow had to work for 9,000 agents and 180M customers.',
    role: [
      'Sr UX Designer on the Customer Connect transformation team (May 2024 – Jan 2026), 2.5 years on the Salesforce C360 platform.',
      'I personally designed 50+ service flows for retail and call center.',
    ],
    decisions: [
      {
        title: 'Cut the average flow from 7 steps to 3',
        why: 'About 57% less effort on every flow, repeated across 50+ flows and thousands of agents.',
      },
      { title: '[TODO: decision 2]', why: '[What you changed and why it mattered]' },
      { title: '[TODO: decision 3]', why: '[What you changed and why it mattered]' },
    ],
    visuals: [
      '[Visual — a flow before/after, redrawn without AT&T screens]',
      '[Visual — only what AT&T approves for publication]',
    ],
    takeaway: 'Scale comes from removing steps — then repeating that across every flow.',
  },
  {
    slug: 'nexus',
    published: false,
    hold: 'Hidden until the patent application is filed. Set published: true in content.ts to release it.',
    label: 'Founder · Fintech',
    title: { main: 'Nexus' },
    impact:
      'A fintech platform I founded, designed and built around verified human identity: passkeys, on-device biometrics and risk-matched verification.',
    image: { src: nexusImage, alt: 'A glass phone on a stone pedestal with a glowing blue chevron inside' },
    results: [
      {
        label: 'Pre-launch',
        items: [
          { value: '[TODO]', label: '[Pilots, if any]' },
          { value: '[TODO]', label: '[Merchants or partners, if any]' },
        ],
      },
    ],
    problem: 'Online, it is hard to know there is a real person on the other side — and passwords are the weakest link.',
    role: ['Founder. Strategy, design and code, end to end — built with one collaborator on GCP.'],
    decisions: [
      { title: 'Passkeys instead of passwords', why: 'Nothing to remember, nothing to phish.' },
      { title: 'On-device biometrics', why: 'Identity checks happen on the person’s own device.' },
      { title: 'Anti-Sybil protection', why: 'One real person, one account.' },
      { title: 'Verification matched to the risk of each action', why: 'Low-risk actions stay light; high-risk actions ask for more.' },
    ],
    visuals: ['[Visual — product screens]', '[Visual — vision / brand]'],
    takeaway: 'Trust is designed in from the first screen, not added at the end.',
  },
];

/** URL of a case page, or null while it isn't published (dev builds show drafts). */
export function caseHref(slug: string): string | null {
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return null;
  return c.published || import.meta.env.DEV ? `/work/${slug}/` : null;
}

export interface CaseItem {
  slug: string;
  label: string;
  title: SplitText;
  /** Body sentence, plus an optional emphasised tail sentence. */
  body: SplitText;
  linkLabel: string;
  image: Img;
  layout: 'full' | 'full-right' | 'right' | 'right-dark';
  /** Optional stat row shown under the case, with a footnote. */
  metrics?: { items: Stat[]; note: string };
}

export const work = {
  eyebrow: 'Selected work — AI orchestration first',
  cases: [
    {
      slug: 'ai-product-journey',
      label: '01 / 03 · AT&T · AI operating model',
      title: { main: 'AI Product Journey', accent: '& Pulse' },
      body: {
        main: 'The AI-agent operating model I built and presented to VPs and AVPs — and Pulse, the OKR platform I own that runs it.',
        accent: 'Plexus, a working demonstrator, turns a Jira epic into a build-ready package.',
      },
      linkLabel: 'Read the case →',
      image: {
        src: pulsePoster,
        alt: 'A glass sphere lit with blue energy, with smaller glass spheres orbiting it on lines of light',
        // Source: gemini_generated_video_d754408c.mp4, played forward then backward.
        video: { webm: '/video/pulse.webm', mp4: '/video/pulse.mp4' },
      },
      layout: 'full-right',
    },
    {
      slug: 'customer-connect',
      label: '02 / 03 · AT&T · Enterprise scale',
      title: { main: 'Customer Connect' },
      body: {
        main: 'My 50+ service flows inside the program that moved 9,000 agents off 50+ legacy systems onto one platform.',
        accent: 'Seven steps became three.',
      },
      linkLabel: 'Read the case →',
      image: {
        src: ccImage,
        alt: 'Seven small glass blocks merging into larger blue-lit glass blocks',
      },
      layout: 'right',
      metrics: {
        items: [
          { value: 50, suffix: '+', label: 'service flows I redesigned — 7 steps to 3, 57% fewer' },
          { value: 8, suffix: '×', label: 'faster time to market, Customer Connect program' },
          { value: 75, suffix: '%', label: 'API reuse across the program' },
          { prefix: '~', value: 2, suffix: 'M', label: 'work hours saved a year — 9,000 agents, 180M customers' },
        ],
        note: '50+ flows: my own design work · 8×, 75%, ~2M: AT&T Customer Connect program results',
      },
    },
    {
      slug: 'nexus',
      label: '03 / 03 · Founder · Fintech',
      title: { main: 'Nexus' },
      body: {
        main: 'A fintech platform I founded, designed and built around verified human identity.',
        accent: 'Passkeys, not passwords.',
      },
      linkLabel: 'Read the case →',
      image: {
        src: nexusImage,
        alt: 'A glass phone on a stone pedestal with a glowing blue chevron inside',
      },
      layout: 'right-dark',
    },
  ] satisfies CaseItem[],
  /** Shown instead of the link while a case page isn't published. */
  pendingLabel: '[Case page coming soon]',
};

export const leadership = {
  title: { main: 'Leadership,', accent: 'by chapter' } satisfies SplitText,
  image: {
    src: teamImage,
    alt: 'Six abstract glass figures standing together, one glowing blue in front',
  } satisfies Img,
  chapters: [
    {
      n: '01',
      role: 'AT&T — Lead Sr UX Designer',
      dates: 'Jan 2026 – present',
      detail: 'Leading a team of 5 designers on AI-driven and agentic experiences, design systems and AI governance.',
    },
    {
      n: '02',
      role: 'AT&T — Sr UX Designer · UX Architect',
      dates: '2023 – 2026',
      detail: '50+ service flows for retail and call center, Customer Connect, AI Product Journey.',
    },
    { n: '03', role: 'Brain Group', dates: '2013 – 2020', detail: 'Led a team of up to 10 designers and developers.' },
    { n: '04', role: 'Founder — Nexus, Together, SwapZone', dates: '', detail: 'Strategy, design and code, end to end.' },
  ],
};

export const range = {
  title: { main: 'Where I come from:', accent: '3D.' } satisfies SplitText,
  intro: 'Industrial designer by training. Years of building products you can turn around in your hands.',
  turntable: {
    caption: 'Toyota — 3D product experience',
    hint: 'Drag to rotate · 360°',
    alt: '3D render of a blue Toyota Supra on a glowing platform',
    basePath: '/turntables/supra/frame-',
    ext: 'webp',
    frames: 59,
  },
  items: [
    { caption: 'Toyota Virtual Auto Show', image: { src: trackImage, alt: '3D render of a race track with two stock cars' } },
    { caption: 'Together — founder', image: { src: togetherImage, alt: 'A parent using the Together platform on a laptop at home' } },
  ] satisfies { caption: string; image: Img }[],
};

export const closing = {
  title: { main: "Let's build", accent: 'what wins.' } satisfies SplitText,
  image: {
    src: closeImage,
    alt: 'A clear glass cube refracting a beam of blue light in a dark studio',
  } satisfies Img,
  secondary: { label: 'LinkedIn', href: 'https://linkedin.com/in/ceslop' } satisfies Link,
  // Placeholder until a public email exists, e.g. 'mailto:hello@iamcesarlopez.com'.
  primary: { label: '[Email Cesar]', href: '#contact' } satisfies Link,
  footer: '© 2026 Cesar Augusto Lopez Rodriguez · iamcesarlopez.com',
};
