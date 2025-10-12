export default async function sitemap() {
  const base = process.env.SITE_URL || "https://tquatity.com";
  const now = new Date();
  return [
    { url: base, lastModified: now },
    { url: base + "/guides", lastModified: now },
    { url: base + "/tools", lastModified: now },
    { url: base + "/deals", lastModified: now }
  ];
}
