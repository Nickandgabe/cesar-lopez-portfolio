/**
 * All copy, numbers and case data for the homepage.
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

/** Text with an optional lighter "serif-style" tail, e.g. "Leadership, <by chapter>". */
export interface SplitText {
  main: string;
  accent?: string;
}

export const site = {
  url: 'https://www.iamcesarlopez.com',
  title: 'Cesar Lopez — AI Product Design Management',
  description:
    'The Double Diamond, rebuilt for AI: agents explore and build, people decide, the design system holds it together, and guardrails protect what ships. 18 years across industrial design, 3D, enterprise platforms and the ventures I founded.',
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
    { label: 'Work', href: '#work' },
    { label: 'Leadership', href: '#leadership' },
    { label: '3D & range', href: '#range' },
    { label: 'Contact', href: '#contact' },
  ] satisfies Link[],
  // The live site's résumé (password-protected). Swap for a public PDF when ready.
  resume: { label: 'Résumé ↓', href: 'https://www.iamcesarlopez.com/resume/' } satisfies Link,
};

export const hero = {
  eyebrow: 'Cesar Lopez · Open to Director / VP roles',
  headline: {
    main: 'AI Product Design Management.',
    accent: 'The new E2E operating model.',
  } satisfies SplitText,
  body:
    'The Double Diamond, rebuilt for AI: agents explore and build, people decide, the design system holds it together, and guardrails protect what ships. It is how I lead — shaped over 18 years across industrial design, 3D, enterprise platforms and the ventures I founded.',
  stats: [
    { value: 18, label: 'years in product & design' },
    { value: 10, label: 'designers & developers led' },
    { value: 3, label: 'ventures founded' },
  ],
  primary: { label: 'See the model in action ↓', href: '#work' } satisfies Link,
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

export const metrics = [
  { prefix: '', value: 50, suffix: '+', lines: ['service flows redesigned,', 'from 7 steps to 3'] },
  { prefix: '', value: 8, suffix: '×', lines: ['faster time to market,', 'Customer Connect'] },
  { prefix: '', value: 75, suffix: '%', lines: ['API reuse', 'across the program'] },
  { prefix: '~', value: 2, suffix: 'M', lines: ['hours saved a year — 9,000', 'agents, 180M customers'] },
];

export interface CaseItem {
  id: string;
  label: string;
  title: SplitText;
  /** Body sentence, plus an optional emphasised tail sentence. */
  body: SplitText;
  /** Link to the full case page. Set to null until the page exists. */
  href: string | null;
  linkLabel: string;
  image: Img;
  layout: 'full' | 'right' | 'right-dark';
}

export const work = {
  eyebrow: 'Selected work — AI orchestration first',
  cases: [
    {
      id: 'case-2',
      label: '01 / 03 · AT&T · Under NDA',
      title: { main: 'AI Product Journey,', accent: 'Pulse & Plexus' },
      body: {
        main: 'An AI-agent operating model presented to VPs and AVPs — and the tools that run it: Pulse for OKRs, and Plexus, 25 agents that turn a Jira epic into a build-ready package.',
      },
      href: null,
      linkLabel: 'Read the case →',
      image: {
        src: apjImage,
        alt: 'A frosted glass sphere with smaller glass spheres orbiting on lines of blue light',
      },
      layout: 'full',
    },
    {
      id: 'case-1',
      label: '02 / 03 · AT&T · Under NDA',
      title: { main: 'Customer Connect' },
      body: {
        main: '8x faster to market for 9,000 agents serving 180M customers.',
        accent: 'Seven steps became three.',
      },
      href: null,
      linkLabel: 'Read the case →',
      image: {
        src: ccImage,
        alt: 'Seven small glass blocks merging into larger blue-lit glass blocks',
      },
      layout: 'right',
    },
    {
      id: 'case-3',
      label: '03 / 03 · Founder · Fintech',
      title: { main: 'Nexus' },
      body: {
        main: 'A fintech platform I founded, designed and built around verified human identity.',
        accent: 'Passkeys, not passwords.',
      },
      href: null,
      linkLabel: 'Read the case →',
      image: {
        src: nexusImage,
        alt: 'A glass phone on a stone pedestal with a glowing blue chevron inside',
      },
      layout: 'right-dark',
    },
  ] satisfies CaseItem[],
  /** Shown instead of the link while a case page doesn't exist yet. */
  pendingLabel: '[Case page coming soon]',
};

export const leadership = {
  title: { main: 'Leadership,', accent: 'by chapter' } satisfies SplitText,
  image: {
    src: teamImage,
    alt: 'Six abstract glass figures standing together, one glowing blue in front',
  } satisfies Img,
  chapters: [
    { n: '01', role: 'AT&T — Lead Sr UX Designer', detail: 'Leading 5 designers on AI-driven and agentic experiences.' },
    { n: '02', role: 'AT&T — Sr UX Designer · UX Architect', detail: '50+ service flows, Customer Connect, AI Product Journey.' },
    { n: '03', role: 'Brain Group', detail: 'Led up to 10 designers and developers.' },
    { n: '04', role: 'Founder — Nexus, Together, SwapZone', detail: 'Strategy, design and code, end to end.' },
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
