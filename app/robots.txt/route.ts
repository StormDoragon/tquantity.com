export function GET() {
  const base = process.env.SITE_URL || "https://tquatity.com";
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain" }
  });
}
