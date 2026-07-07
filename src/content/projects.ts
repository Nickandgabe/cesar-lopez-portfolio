export type ProjectVariant = "elevated" | "outlined";

export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  year: string;
  flagship?: boolean;
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
};

export const projects: Project[] = [
  {
    slug: "att-digital-transformation",
    name: "AT&T Digital Transformation & Omni-Channel CX",
    client: "AT&T",
    category: "Enterprise Systems Architecture",
    year: "2023–2025",
    flagship: true,
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
      "Built an immersive, browser-based virtual auto show experience translating a physical event into a scalable digital showroom.",
    tags: ["Immersive Web", "3D/WebGL", "Front-End Engineering"],
    role: "Front-End Engineer & Product Designer",
    challenge: "Placeholder: constraints of translating a physical, spatial event into the browser at scale.",
    approach: [
      "Placeholder: the technical approach to 3D/WebGL performance across devices.",
      "Placeholder: the UX model for wayfinding in a virtual space.",
    ],
    outcome: "Placeholder: engagement and reach outcomes.",
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
