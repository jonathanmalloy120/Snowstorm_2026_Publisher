"use client";

import { useEffect, useRef, useState } from "react";
import { Article } from "@/types/article";
import { sharePlatforms, buildShareUrl, SharePlatform } from "@/lib/share";
import { trackArticleInteraction } from "@/lib/snowplow";
import Icon from "@/components/ui/Icon";

export default function ShareMenu({ article }: { article: Article }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function handleToggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setOpen((v) => !v);
  }

  function handleShare(e: React.MouseEvent, platform: SharePlatform) {
    e.preventDefault();
    e.stopPropagation();

    const articleUrl = `${window.location.origin}/article/${article.slug}`;
    const shareUrl = buildShareUrl(platform, articleUrl, article.headline);

    if (platform === "copy-link") {
      navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } else if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }

    trackArticleInteraction(article, "share", platform);
    if (platform !== "copy-link") setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative inline-block" data-article-id={article.id}>
      <button
        type="button"
        onClick={handleToggle}
        data-action="share-open"
        aria-label="Share article"
        aria-expanded={open}
        className="inline-flex items-center rounded-full p-1.5 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <Icon name="share" />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-10 mt-2 w-44 rounded-lg border border-neutral-200 bg-white py-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
          {sharePlatforms.map((platform) => (
            <button
              key={platform.id}
              type="button"
              data-action="share-click"
              data-share-platform={platform.id}
              data-article-id={article.id}
              onClick={(e) => handleShare(e, platform.id)}
              className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              <Icon
                name={
                  platform.id === "copy-link" && copied
                    ? "check"
                    : platform.id === "copy-link"
                      ? "link"
                      : platform.id
                }
                size={16}
              />
              {platform.id === "copy-link" && copied ? "Copied!" : platform.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
