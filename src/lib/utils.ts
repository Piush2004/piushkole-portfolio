import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves the canonical site URL for metadata, sitemaps, and structured data.
 * Prefers an explicit override, falls back to Vercel's auto-populated
 * production URL, and finally to the known live deployment.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelUrl =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "https://piushkole-portfolio.vercel.app";
}
