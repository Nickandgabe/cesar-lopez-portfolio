export type ProjectVariant = "elevated" | "outlined";

/** PRACTICE_MODE = client/employer case studies. R&D_MODE = independent product ventures. */
export type ProjectMode = "practice" | "rd";

export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  year: string;
  /** Defaults to "practice" — set "rd" for self-directed product ventures. */
  mode?: ProjectMode;
  summary: string;
  tags: string[];
  role: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  /** Ordered frame URLs for a drag-to-rotate 360 view (image sequence). Optional — falls back to poster/placeholder. */
  frames?: string[];
  /** Looping muted background clip for the media stage. Optional — falls back to poster/frames/placeholder via ProjectMedia's priority chain. */
  video?: string;
  /** Static hero/preview image, used when no frame sequence is set. */
  poster?: string;
  /** Real .glb model — highest priority in ProjectMedia. Renders an interactive drag-to-orbit viewer instead of a flat image/video. */
  model3d?: string;
  /** Supporting stills shown below the case study text, distinct from the hero media stage. */
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "att-digital-transformation",
    name: "AT&T Digital Transformation & Omni-Channel CX",
    client: "AT&T",
    category: "Enterprise Systems Architecture",
    year: "2023–2025",
    summary:
      "Unified fragmented retail, care, and self-service experiences into a single omni-channel design system spanning web, mobile, and in-store touchpoints.",
    tags: ["Design Systems", "SAFe", "Omni-Channel CX", "SLDS"],
    role: "Senior Product Design Leader, Systems Architect",
    challenge:
      "Replace this placeholder with the real framing of the business problem: fragmented ownership across channel teams, inconsistent CX, and legacy technical debt slowing delivery.",
    approach: [
      "Placeholder: how you audited the existing ecosystem and aligned cross-functional stakeholders.",
      "Placeholder: the governance model or system architecture you introduced.",
      "Placeholder: how the design system scaled across teams under SAFe cadences.",
    ],
    outcome:
      "Placeholder: quantify the before/after — velocity, consistency, adoption, or cost impact.",
    metrics: [
      { label: "Channels unified", value: "6" },
      { label: "Teams onboarded", value: "12+" },
      { label: "Delivery velocity", value: "—" },
    ],
  },
  {
    slug: "invited-club-golf",
    name: "Invited – Club Golf Mobile App",
    client: "Invited (Club Corp)",
    category: "Multi-Tenant Architecture",
    year: "2022–2023",
    summary:
      "Designed a multi-tenant mobile architecture serving hundreds of private clubs with independent branding on a shared, scalable core.",
    tags: ["Multi-Tenant Architecture", "Mobile", "Design Systems"],
    role: "Senior Product Designer",
    challenge:
      "Placeholder: the tension between per-club brand identity and a maintainable shared codebase/design system.",
    approach: [
      "Placeholder: the tenant theming model and component abstraction layer you designed.",
      "Placeholder: how you validated it across a representative sample of clubs.",
    ],
    outcome: "Placeholder: rollout scale and measurable outcomes.",
    metrics: [{ label: "Clubs served", value: "300+" }],
  },
  {
    slug: "toyota-virtual-auto-show",
    name: "Toyota Virtual Auto Show",
    client: "Toyota",
    category: "Immersive Web Experience",
    year: "2021",
    summary:
      "Built an immersive, browser-based virtual auto show translating a physical event into a scalable digital showroom, in response to COVID-19 making in-person shows impossible.",
    tags: ["Immersive Web", "3D/WebGL", "Front-End Engineering"],
    role: "Front-End Engineer & Product Designer",
    challenge:
      "When COVID-19 made in-person auto shows impossible, Toyota needed a digital alternative that felt as immersive as walking a show floor — usable across technical skill levels, devices, and accessibility needs, with high-quality 3D vehicle exhibits and none of the cost or logistics of a physical event.",
    approach: [
      "Ran a full double-diamond process — discovery research and stakeholder alignment, synthesis into a defined problem space, ideation and prototyping, then iterative testing before implementation.",
      "Designed a spatial, top-down showroom hub where each vehicle sits at its own interactive station, translating a physical show floor's wayfinding into browser navigation.",
      "Built real-time 3D vehicle viewers — 360° turntables, hotspots, environment toggles — alongside embedded video for launches like the GR Supra and Sienna.",
      "Optimized 3D assets and interactive scenes for performance across devices, balancing visual fidelity against load time and accessibility constraints.",
    ],
    outcome:
      "Shipped a fully interactive virtual auto show spanning the RAV4, Highlander, Camry, Sienna, Venza, Tacoma, GR Supra, and Toyota's e-Palette mobility concept — giving Toyota a scalable, always-on alternative to in-person events.",
    model3d: "/models/supra.glb",
    poster: "/images/toyota/supra_reveal.jpg",
    gallery: ["/images/toyota/overview_hub.jpg", "/images/toyota/highlander_360.jpg", "/images/toyota/mobility_epalette.jpg"],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
