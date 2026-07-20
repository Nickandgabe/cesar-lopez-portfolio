import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { PROJECT_REPOS, fetchReport, type ProjectSlug } from "@/lib/reports";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return Object.keys(PROJECT_REPOS).map((slug) => ({ project: slug }));
}

function isValidSlug(value: string): value is ProjectSlug {
  return value in PROJECT_REPOS;
}

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h2 className="mt-10 mb-4 font-display text-headline-sm text-on-surface first:mt-0">{children}</h2>
  ),
  h2: ({ children }) => (
    <h3 className="mt-8 mb-3 font-display text-title-lg text-on-surface">{children}</h3>
  ),
  h3: ({ children }) => (
    <h4 className="mt-6 mb-2 text-title-md font-medium text-on-surface">{children}</h4>
  ),
  p: ({ children }) => <p className="mb-4 text-body-lg text-on-surface-variant">{children}</p>,
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-1.5 pl-5 text-body-lg text-on-surface-variant">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-body-lg text-on-surface-variant">{children}</ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded-m3-xs bg-surface-container-highest px-1.5 py-0.5 text-body-sm text-on-surface">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-m3-md bg-surface-container-highest p-4 text-body-sm text-on-surface">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-2 border-outline pl-4 text-body-lg text-on-surface-variant italic">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse text-body-md">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-outline-variant px-3 py-2 text-left text-title-sm text-on-surface">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-outline-variant px-3 py-2 text-on-surface-variant">{children}</td>
  ),
  hr: () => <hr className="my-8 border-outline-variant" />,
};

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
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <Link
        href="/myproductdashboard"
        className="state-layer inline-flex items-center gap-1 text-label-lg font-medium text-primary"
      >
        ← Back to Products Hub
      </Link>

      <h1 className="mt-4 mb-2 font-display text-headline-lg text-on-surface md:text-display-sm">
        {ref.displayName}
      </h1>

      <p className="mb-8 text-body-sm text-on-surface-variant">
        Synced live from{" "}
        <a
          href={report.htmlUrl}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-2"
        >
          {ref.owner}/{ref.repo}
        </a>
        {report.lastUpdated ? ` · updated ${new Date(report.lastUpdated).toLocaleString()}` : ""}
      </p>

      {report.error && (
        <div className="rounded-m3-lg bg-error-container p-5 text-body-md text-on-error-container">
          {report.error}
        </div>
      )}

      {!report.error && !report.found && (
        <div className="rounded-m3-lg border border-dashed border-outline-variant bg-surface-container-low p-8 text-center text-body-md text-on-surface-variant">
          No report yet for {ref.displayName}. Push a{" "}
          <code className="rounded-m3-xs bg-surface-container-highest px-1.5 py-0.5 text-body-sm text-on-surface">
            {ref.path}
          </code>{" "}
          file to the {ref.branch} branch of{" "}
          <a
            href={report.htmlUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            {ref.repo}
          </a>{" "}
          and refresh this page.
        </div>
      )}

      {report.found && (
        <article className="rounded-m3-lg bg-surface-container-low p-6 md:p-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {report.markdown}
          </ReactMarkdown>
        </article>
      )}
    </main>
  );
}
