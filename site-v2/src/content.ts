/**
 * All copy, numbers and case data for the site.
 * Edit this file to change what the site says — components only render it.
 *
 * Text inside [brackets] is a placeholder that still needs real content.
 * It is shown on the page on purpose, so it can't ship unnoticed.
 */
import type { ImageMetadata } from 'astro';

import heroImage from './assets/hero-concept.png';
import portraitImage from './assets/portrait.png';
import apjImage from './assets/apj.png';
import ccImage from './assets/cc.png';
import nexusImage from './assets/nexus.png';
import teamImage from './assets/team.png';
import trackImage from './assets/track.jpg';
import togetherImage from './assets/together.jpg';
import closeImage from './assets/close.png';

export interface Img {
  src: ImageMetadata;
  alt: string;
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
  title: 'Cesar Lopez — AI Experience Design Leader',
  description:
    'I lead AI experience design that turns complex enterprise systems into measurable business results — with an operating model where agents explore and build, and people decide. 18 years across product design, product management, UX and front-end.',
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
  // Neutral on purpose: an "Open to Director / VP roles" line is visible to your current employer.
  eyebrow: 'Lead Sr UX Designer · AT&T · Certified AI Product Manager (SAFe)',
  headline: {
    main: 'AI Experience Design Leader.',
    accent: 'Agents build. People decide.',
  } satisfies SplitText,
  body:
    'I lead AI experience design that turns complex enterprise systems into measurable business results — with an operating model where agents explore and build, people decide, and guardrails protect what ships. Shaped over 18 years across industrial design, 3D, enterprise platforms and the ventures I founded.',
  stats: [
    { value: 18, label: 'years in product & design' },
    { value: 5, label: 'designers I lead at AT&T' },
    { value: 3, label: 'ventures founded' },
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
  video: { mp4: '', webm: '' },
};

export const metrics = {
  items: [
    { prefix: '', value: 50, suffix: '+', lines: ['service flows I redesigned —', '7 steps to 3, 57% fewer'] },
    { prefix: '', value: 8, suffix: '×', lines: ['faster time to market,', 'Customer Connect program'] },
    { prefix: '', value: 75, suffix: '%', lines: ['API reuse', 'across the program'] },
    { prefix: '~', value: 2, suffix: 'M', lines: ['work hours saved a year — 9,000', 'agents, 180M customers'] },
  ],
  note: '50+ flows: my own design work · 8×, 75%, ~2M: AT&T Customer Connect program results',
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
    image: { src: apjImage, alt: 'A frosted glass sphere with smaller glass spheres orbiting on lines of blue light' },
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
  layout: 'full' | 'right' | 'right-dark';
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
        src: apjImage,
        alt: 'A frosted glass sphere with smaller glass spheres orbiting on lines of blue light',
      },
      layout: 'full',
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
