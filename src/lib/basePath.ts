/**
 * Centralized Base Path Configuration for Avensoft.
 * 
 * CURRENT STATUS:
 * - Running on GitHub Pages: https://avensoft26.github.io/Avensoft.com/
 *   basePath is '/Avensoft.com'.
 * 
 * FUTURE UPGRADE (When you buy a custom domain like avensoft.com):
 * - Just set NEXT_PUBLIC_BASE_PATH="" in your build environment or change DEFAULT_BASE_PATH to "" below.
 * - All assets and links will automatically switch to root with zero manual code edits across components.
 */
export const DEFAULT_BASE_PATH = "/Avensoft.com";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://avensoft26.github.io/Avensoft.com";

const isDev = process.env.NODE_ENV === "development";

export const basePath = isDev
  ? ""
  : (process.env.NEXT_PUBLIC_BASE_PATH !== undefined
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : DEFAULT_BASE_PATH);

export function assetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }
  return `${basePath}${cleanPath}`;
}
