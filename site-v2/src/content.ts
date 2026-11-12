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
import invitedImage from './assets/work/invited.jpg';
import archive3dImage from './assets/work/archive-3d.webp';
import blackMonkeyLogo from './assets/work/brands/black-monkey.png';
import civilTechLogo from './assets/work/brands/civil-and-tech.png';
import cloudstersLogo from './assets/work/brands/cloudsters.png';
import ikimonoLogo from './assets/work/brands/ikimono.png';
import isergoLogo from './assets/work/brands/isergo-group.png';
import linkersLogo from './assets/work/brands/linkers.png';
import riskLogo from './assets/work/brands/risk-appraisals.png';
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
    'I lead products end to end, from the first business question to what ships and how it performs. My operating model lets AI agents do the heavy lifting while teams make the calls that matter.',
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
    { label: 'All work', href: '/#all-work' },
    { label: 'Contact', href: '#contact' },
  ] satisfies Link[],
  // The live site's résumé (password-protected). Swap for a public PDF when ready.
  resume: { label: 'Résumé ↓', href: 'https://www.iamcesarlopez.com/resume/' } satisfies Link,
};

export const hero = {
  eyebrow: { main: 'AI Product Design Leader', accent: 'AI Product Manager' } satisfies SplitText,
  headline: {
    main: 'Customers ask.',
    accent: 'Agents build. Teams approve.',
  } satisfies SplitText,
  body:
    'I lead products end to end, from the first business question to what ships and how it performs. My operating model lets AI agents do the heavy lifting while teams make the calls that matter.',
  // Top line: [prefix] value[suffix] [unit] — only `value` counts up. Label goes below.
  stats: [
    { prefix: '', value: 18, suffix: '', unit: 'years', label: 'in product & design', text: '' },
    // `text` = static (no count-up), shown in the number's size and style.
    { prefix: '', value: 0, text: 'Any scale', suffix: '', unit: '', label: 'teams led across design, product and engineering' },
    { prefix: '', value: 3, suffix: '', unit: 'ventures', label: 'founded', text: '' },
    { prefix: '', value: 180, suffix: 'M', unit: 'customers', label: 'reached by my flows', text: '' },
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
      slug: 'nexus',
      label: '02 / 03 · Founder · Fintech',
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
    {
      slug: 'customer-connect',
      label: '03 / 03 · AT&T · Enterprise scale',
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
  ] satisfies CaseItem[],
  /** Shown instead of the link while a case page isn't published. */
  pendingLabel: '[Case page coming soon]',
};

export const leadership = {
  title: { main: 'How I lead' } satisfies SplitText,
  subtitle:
    'I orchestrate design, product and engineering at every level, from a hands-on squad shipping one feature to cross-functional teams building whole platforms.',
  image: {
    src: teamImage,
    alt: 'Six abstract glass figures standing together, one glowing blue in front',
  } satisfies Img,
  principles: [
    { title: 'I stay in the work.', detail: "I review flows, prototype and write code next to my team. Leading from a distance isn't my style." },
    { title: 'Clear goals, then trust.', detail: 'I set the direction and the bar, then give people room to own their part.' },
    { title: 'Teams approve.', detail: 'The same rule I use with AI: tools and agents do the heavy lifting, and humans make the calls that matter.' },
  ],
  // Newest first.
  chapters: [
    {
      n: '01',
      role: 'AT&T, Lead Sr. UX Designer',
      dates: 'Jan 2026 – Present',
      tag: 'AI product squad',
      detail: 'Leading a design team while running AI products in parallel, and presenting a new AI operating model to VPs and AVPs.',
    },
    {
      n: '02',
      role: 'AT&T, Sr. UX Designer · UX Architect',
      dates: '2023 – 2026',
      tag: 'Enterprise platform teams',
      detail: 'Owned 50+ service flows on the Customer Connect program, serving 9,000 agents, and cut them from seven steps to three. Set design system standards across workstreams.',
    },
    {
      n: '03',
      role: 'Globe Check · Immersicom · Integris',
      dates: '2020 – 2023',
      tag: 'Product & design lead',
      detail: 'Led product and design for a healthcare SaaS platform, ran an enterprise design system, and presented roadmaps to executives.',
    },
    {
      n: '04',
      role: 'Brain Group',
      dates: '2013 – 2020',
      tag: 'Multi-brand design & dev team',
      detail: 'Led designers and developers across a portfolio of brands in Colombia and the US, and scoped and costed every project.',
    },
    {
      n: '05',
      role: 'Founder: Nexus, Together, SwapZone',
      dates: 'Ongoing',
      tag: 'Founder-led product teams',
      detail: 'Strategy, design and code, end to end.',
    },
  ],
  earlier: 'Earlier: design and product roles in Bogotá, 2008–2013.',
};

/* ---------------- All work (filterable index) ---------------- */

export const categories = ['AI & Product', 'Enterprise', 'Apps & Platforms', '3D & XR', 'Brand', 'Ventures'] as const;
export type Category = (typeof categories)[number];

const OLD_SITE = 'https://www.iamcesarlopez.com';

export interface Project {
  title: string;
  /** Client or role line, shown small under the title. */
  meta: string;
  summary: string;
  cats: Category[];
  /** Image on a soft tile. `fit: 'contain'` for logos, phone screens and cut-out renders. */
  image?: Img & { fit?: 'cover' | 'contain' };
  /** Show the draggable Supra turntable instead of an image. */
  turntable?: boolean;
  href?: string;
  /** Small badge on the card, e.g. "Case study", "Access on request". */
  badge?: string;
}

/** Brand identities: one grouped card under "All", individual cards under the Brand filter. */
const brandList: { name: string; line: string; slug: string; logo: ImageMetadata }[] = [
  { name: 'Black Monkey', line: 'Playful branding with bite.', slug: 'black-monkey', logo: blackMonkeyLogo },
  { name: 'Civil & Tech', line: 'Engineering the ground beneath you.', slug: 'civil-and-tech', logo: civilTechLogo },
  { name: 'Cloudsters', line: 'Dreammakers, built for the cloud.', slug: 'cloudsters', logo: cloudstersLogo },
  { name: 'ikimono', line: 'Living, breathing brand experiences.', slug: 'ikimono', logo: ikimonoLogo },
  { name: 'ISERGO Group', line: 'Structural integrity, at every scale.', slug: 'isergo-group', logo: isergoLogo },
  { name: 'Linkers', line: 'Infrastructure, made visible.', slug: 'linkers', logo: linkersLogo },
  { name: 'Risk & Appraisals', line: 'Precision you can stand behind.', slug: 'risk-appraisals', logo: riskLogo },
];

export const allWork = {
  title: 'All work',
  intro: 'Everything else I have shipped, designed or founded, from enterprise platforms to 3D experiences and brand identities.',
  allLabel: 'All',
  // Order = order under "All": AI and enterprise first, brand last.
  projects: [
    {
      title: 'AI Product Journey & Pulse',
      meta: 'AT&T',
      summary: 'An AI-agent operating model presented to VPs and AVPs, and the tools to run it.',
      cats: ['AI & Product', 'Enterprise'],
      image: { src: pulsePoster, alt: 'A glass sphere with smaller glass spheres orbiting it on lines of light', fit: 'cover' },
      href: '/work/ai-product-journey/',
      badge: 'Case study',
    },
    {
      title: 'Nexus',
      meta: 'Founder · Fintech',
      summary: 'A fintech platform built around verified human identity. Passkeys, not passwords.',
      cats: ['AI & Product', 'Ventures'],
      image: { src: nexusImage, alt: 'A glass phone on a stone pedestal with a glowing blue chevron inside', fit: 'cover' },
      badge: 'Coming soon',
    },
    {
      title: 'Customer Connect',
      meta: 'AT&T',
      summary: '50+ service flows for 9,000 agents serving 180M customers. Seven steps became three.',
      cats: ['Enterprise'],
      image: { src: ccImage, alt: 'Seven small glass blocks merging into larger blue-lit glass blocks', fit: 'cover' },
      href: '/work/customer-connect/',
      badge: 'Case study',
    },
    {
      title: 'Globe Check',
      meta: 'Product & design lead · 2020–2023',
      summary: 'A healthcare SaaS platform: product and design leadership, from roadmap to shipped screens.',
      cats: ['Apps & Platforms'],
    },
    {
      title: 'Invited',
      meta: 'Club & golf membership app',
      summary: 'A multi-tenant web and mobile app for members of exclusive golf and city clubs: membership, bookings, tee times.',
      cats: ['Apps & Platforms'],
      image: { src: invitedImage, alt: 'Invited app home screen with club activities and featured events', fit: 'contain' },
      href: `${OLD_SITE}/work/invited-club-golf/`,
    },
    {
      title: 'Toyota Virtual Auto Show',
      meta: 'Toyota · UX / 3D',
      summary: 'A virtual auto show so anyone, anywhere, could explore Toyota vehicles. Drag the Supra to rotate it.',
      cats: ['Apps & Platforms', '3D & XR'],
      turntable: true,
      href: `${OLD_SITE}/work/toyota-auto-show/`,
      badge: 'Access on request',
    },
    {
      title: 'Immersicom',
      meta: 'UX/UI designer & developer',
      summary: 'A virtual showroom: any product or trade-show booth as an explorable 3D web experience. Designed and coded end to end.',
      cats: ['3D & XR', 'Apps & Platforms'],
      href: `${OLD_SITE}/work/immersicom/`,
    },
    {
      title: 'Together',
      meta: 'Founder',
      summary: 'A bilingual digital home for families raising a child on the autism spectrum.',
      cats: ['Ventures', 'Apps & Platforms'],
      image: { src: togetherImage, alt: 'A parent using the Together platform on a laptop at home', fit: 'cover' },
      href: `${OLD_SITE}/work/together/`,
    },
    {
      title: 'SwapZone',
      meta: 'Founder',
      summary: 'A PWA for trading FIFA World Cup 2026 sticker collections.',
      cats: ['Ventures'],
    },
    {
      title: '3D & interactive archive',
      meta: 'Earlier work',
      summary: 'Product turntables, showroom transitions and 360° scenes from Toyota and Immersicom deliverables.',
      cats: ['3D & XR'],
      image: { src: archive3dImage, alt: '3D render of a Black Hawk helicopter on a glowing platform', fit: 'contain' },
      href: `${OLD_SITE}/work/earlier-work/`,
    },
  ] satisfies Project[],
  brands: {
    groupTitle: 'Brand identities',
    groupSummary: 'Seven identity systems, from logo to full guidelines.',
    groupMeta: 'Brand design',
    items: brandList.map((b) => ({
      title: b.name,
      meta: 'Brand guidelines',
      summary: b.line,
      cats: ['Brand'] as Category[],
      image: { src: b.logo, alt: `${b.name} logo`, fit: 'contain' as const },
      href: `${OLD_SITE}/work/brands/${b.slug}/`,
    })) satisfies Project[],
  },
  turntable: {
    alt: '3D render of a blue Toyota Supra on a glowing platform',
    basePath: '/turntables/supra/frame-',
    ext: 'webp',
    frames: 59,
  },
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
