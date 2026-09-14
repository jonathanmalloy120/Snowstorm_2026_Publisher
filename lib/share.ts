export type SharePlatform = "x" | "facebook" | "linkedin" | "copy-link";

export const sharePlatforms: { id: SharePlatform; label: string }[] = [
  { id: "x", label: "X" },
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "copy-link", label: "Copy link" },
];

export function buildShareUrl(platform: SharePlatform, url: string, headline: string): string | null {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(headline);

  switch (platform) {
    case "x":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case "copy-link":
      return null;
  }
}
