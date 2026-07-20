import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PROJECT_REPOS, fetchReport, type ProjectSlug } from "@/lib/reports";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return Object.keys(PROJECT_REPOS).map((slug) => ({ project: slug }));
}

function isValidSlug(value: string): value is ProjectSlug {
  return value in PROJECT_REPOS;
}

export default async function ProjectReportPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;

  if (!isValidSlug(project)) {
    notFound();
  }

  const ref = PROJECT_REPOS[project];
  const report = await fetchReport(project);

  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "48px 24px 96px",
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        color: "#18181b",
      }}
    >
      <Link
        href="/myproductdashboard"
        style={{ fontSize: 13, color: "#4f46e5", textDecoration: "none", fontWeight: 600 }}
      >
        ← Back to Products Hub
      </Link>

      <h1 style={{ fontSize: 28, fontWeight: 700, margin: "16px 0 4px" }}>{ref.displayName}</h1>

      <p style={{ fontSize: 13, color: "#71717a", margin: "0 0 32px" }}>
        Synced live from{" "}
        <a href={report.htmlUrl} target="_blank" rel="noreferrer" style={{ color: "#4f46e5" }}>
          {ref.owner}/{ref.repo}
        </a>
        {report.lastUpdated
          ? ` · updated ${new Date(report.lastUpdated).toLocaleString()}`
          : ""}
      </p>

      {report.error && (
        <div
          style={{
            background: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#b91c1c",
            borderRadius: 10,
            padding: "14px 16px",
            fontSize: 13.5,
            marginBottom: 24,
          }}
        >
          {report.error}
        </div>
      )}

      {!report.error && !report.found && (
        <div
          style={{
            background: "#fafafa",
            border: "1px dashed #d4d4d8",
            borderRadius: 12,
            padding: "32px 20px",
            textAlign: "center",
            color: "#71717a",
            fontSize: 14,
          }}
        >
          No report yet for {ref.displayName}. Push a{" "}
          <code style={{ background: "#f0f0f2", padding: "2px 5px", borderRadius: 4 }}>
            {ref.path}
          </code>{" "}
          file to the {ref.branch} branch of{" "}
          <a href={report.htmlUrl} target="_blank" rel="noreferrer" style={{ color: "#4f46e5" }}>
            {ref.repo}
          </a>{" "}
          and refresh this page.
        </div>
      )}

      {report.found && (
        <article
          style={{
            fontSize: 15.5,
            lineHeight: 1.7,
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{report.markdown}</ReactMarkdown>
        </article>
      )}
    </main>
  );
}
