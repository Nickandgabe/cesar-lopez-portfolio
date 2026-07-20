export type ProjectSlug = "nexus" | "nerve" | "swapzone" | "together" | "portfolio";

interface RepoRef {
  owner: string;
  repo: string;
  /** Path to the report file within the repo. */
  path: string;
  /** Branch to read from. */
  branch: string;
  displayName: string;
}

export const PROJECT_REPOS: Record<ProjectSlug, RepoRef> = {
  nexus: {
    owner: "Nickandgabe",
    repo: "Project-Nexus",
    path: "REPORT.md",
    branch: "main",
    displayName: "Nexus",
  },
  nerve: {
    owner: "Nickandgabe",
    repo: "nerve-app",
    path: "REPORT.md",
    branch: "main",
    displayName: "Nerve",
  },
  swapzone: {
    owner: "Nickandgabe",
    repo: "theswapzone",
    path: "REPORT.md",
    branch: "main",
    displayName: "Swap Zone",
  },
  together: {
    owner: "Nickandgabe",
    repo: "Together",
    path: "REPORT.md",
    branch: "main",
    displayName: "Together",
  },
  portfolio: {
    owner: "Nickandgabe",
    repo: "cesar-lopez-portfolio",
    path: "REPORT.md",
    branch: "main",
    displayName: "My Portfolio",
  },
};

export interface ReportResult {
  found: boolean;
  markdown: string;
  htmlUrl: string;
  lastUpdated: string | null;
  lastCommitMessage: string | null;
  error: string | null;
}

/**
 * Fetches a project's report file straight from its GitHub repo.
 * Runs server-side only (Next.js Server Component) so the token never
 * reaches the browser. Always requests fresh data — no caching — so a
 * push to the repo is reflected on the very next page load.
 */
export async function fetchReport(slug: ProjectSlug): Promise<ReportResult> {
  const ref = PROJECT_REPOS[slug];
  const htmlUrl = `https://github.com/${ref.owner}/${ref.repo}/blob/${ref.branch}/${ref.path}`;

  const token = process.env.GITHUB_REPORTS_TOKEN;
  if (!token) {
    return {
      found: false,
      markdown: "",
      htmlUrl,
      lastUpdated: null,
      lastCommitMessage: null,
      error: "GITHUB_REPORTS_TOKEN is not configured on the server.",
    };
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  try {
    const contentRes = await fetch(
      `https://api.github.com/repos/${ref.owner}/${ref.repo}/contents/${ref.path}?ref=${ref.branch}`,
      { headers, cache: "no-store" }
    );

    if (contentRes.status === 404) {
      return {
        found: false,
        markdown: "",
        htmlUrl,
        lastUpdated: null,
        lastCommitMessage: null,
        error: null,
      };
    }

    if (!contentRes.ok) {
      return {
        found: false,
        markdown: "",
        htmlUrl,
        lastUpdated: null,
        lastCommitMessage: null,
        error: `GitHub API returned ${contentRes.status} for ${ref.repo}.`,
      };
    }

    const json = (await contentRes.json()) as { content: string; encoding: string };
    const markdown = Buffer.from(json.content, "base64").toString("utf-8");

    let lastUpdated: string | null = null;
    let lastCommitMessage: string | null = null;

    const commitsRes = await fetch(
      `https://api.github.com/repos/${ref.owner}/${ref.repo}/commits?path=${ref.path}&sha=${ref.branch}&per_page=1`,
      { headers, cache: "no-store" }
    );

    if (commitsRes.ok) {
      const commits = (await commitsRes.json()) as Array<{
        commit: { message: string; committer: { date: string } };
      }>;
      if (commits.length > 0) {
        lastUpdated = commits[0].commit.committer.date;
        lastCommitMessage = commits[0].commit.message;
      }
    }

    return { found: true, markdown, htmlUrl, lastUpdated, lastCommitMessage, error: null };
  } catch {
    return {
      found: false,
      markdown: "",
      htmlUrl,
      lastUpdated: null,
      lastCommitMessage: null,
      error: `Could not reach GitHub for ${ref.repo}.`,
    };
  }
}
