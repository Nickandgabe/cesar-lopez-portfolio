import type { LucideIcon } from "lucide-react";
import { Network, GitBranch, Blocks, Sparkles } from "lucide-react";

export type ValueProp = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const valueProps: ValueProp[] = [
  {
    icon: Network,
    title: "Architecting at Scale",
    description:
      "Designing systems, not just screens — structuring fragmented enterprise products into unified, extensible ecosystems built to grow.",
  },
  {
    icon: GitBranch,
    title: "Bridging Strategy & Execution",
    description:
      "Operating fluently within SAFe product management — translating executive strategy into shippable, cross-team roadmaps.",
  },
  {
    icon: Blocks,
    title: "Enterprise Framework Mastery",
    description:
      "Deep, practical command of enterprise design systems like SLDS — building on proven foundations rather than reinventing them.",
  },
  {
    icon: Sparkles,
    title: "Forward-Thinking Technologist",
    description:
      "Actively integrating AI and agentic workflows into product design practice, from research synthesis to production tooling.",
  },
];
