import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

/**
 * Site-wide layout: sticky navbar, main content area, footer.
 * Wraps every page rendered through the root route.
 */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
