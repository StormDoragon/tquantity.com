import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeless Quantity",
  description: "Evergreen essentials & AI tools that compound your time."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-slate-800">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a className="font-bold text-xl" href="/">Timeless Quantity</a>
            <nav className="flex gap-6 text-sm text-slate-300">
              <a href="/guides">Guides</a>
              <a href="/tools">AI Tools</a>
              <a href="/deals">Deals</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="mt-16 border-t border-slate-800">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-400">
            © {new Date().getFullYear()} Timeless Quantity • We may earn commissions from links.
          </div>
        </footer>
      </body>
    </html>
  );
}
import './globals.css' // Remove any pp reference
