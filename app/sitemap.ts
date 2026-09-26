import type { MetadataRoute } from "next";

const BASE = "https://jmi-entertainment.vercel.app";

const paths = [
  "/",
  "/home",
  "/about",
  "/our-work",
  "/contact",
  "/brodantre",
  "/casting-submissions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((path, i) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: i === 0 ? "weekly" : "monthly",
    priority: i === 0 ? 1 : 0.7,
  }));
}
