import { site } from '../lib/site';

export default async function sitemap() {
  const routes = ["", "/booking", "/our-services", "/about-progevity", "/contact-us", "/privacy", "/terms", "/disclaimer"]
    .map((p) => ({
      url: `${site.url}${p || "/"}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: p === "" ? 1.0 : 0.7,
    }));
  return routes;
}
