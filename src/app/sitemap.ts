import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/basePath";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/contact",
    "/services",
    "/services/mobile",
    "/services/web",
    "/services/ai",
    "/services/enterprise",
    "/services/design",
  ];

  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
