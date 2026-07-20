import { notFound } from "next/navigation";
import Link from "next/link";
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

  if (report.found) {
    return (
      <div className="flex h-dvh flex-col">
        <div className="flex items-center justify-between border-b border-outline-variant bg-surface px-6 py-3">
          <Link
            href="/myproductdashboard"
            className="state-layer inline-flex items-center gap-1 text-label-lg font-medium text-primary"
          >
            ← Back to Products Hub
          </Link>
          <span className="text-body-sm text-on-surface-variant">
            {ref.displayName}
            {report.lastUpdated ? ` · updated ${new Date(report.lastUpdated).toLocaleString()}` : ""}
          </span>
        </div>
        <iframe
          srcDoc={report.html}
          title={`${ref.displayName} report`}
          className="flex-1 w-full border-0"
        />
      </div>
    );
  }

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
      </p>

      {report.error && (
        <div className="rounded-m3-lg bg-error-container p-5 text-body-md text-on-error-container">
          {report.error}
        </div>
      )}

      {!report.error && (
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
    </main>
  );
}
