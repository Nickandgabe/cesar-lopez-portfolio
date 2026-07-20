import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products Hub",
    robots: { index: false, follow: false },
};

export default function ProductDashboardPage() {
    return (
          <iframe
                  src="/myproductdashboard.html"
                  title="Products Hub"
                  style={{
                            border: "none",
                            width: "100%",
                            height: "100vh",
                            display: "block",
                  }}
                />
        );
}
