import { useEffect, useState } from "react";
import { stringToSlug } from "../utils";

type HeadingItem = {
  id: string;
  text: string;
  level: 2 | 3;
  parentH2Id: string | null;
};

type TableOfContentsProps = {
  contentSelector: string;
  /** When this changes (e.g. route pathname), TOC is re-built so it reflects the current page. */
  contentKey?: string;
};

export function TableOfContents({ contentSelector, contentKey }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);

  useEffect(() => {
    const buildToc = () => {
      const contentRoot = document.querySelector(contentSelector);
      if (!contentRoot) {
        setHeadings([]);
        return;
      }

      const headingElements = Array.from(
        contentRoot.querySelectorAll<HTMLHeadingElement>("h2, h3"),
      );
      const usedIds = new Set<string>();
      let currentH2Id: string | null = null;

      const tocHeadings = headingElements.map((heading, index) => {
        const headingText = heading.textContent?.trim() || `Section ${index + 1}`;
        const level = heading.tagName === "H3" ? 3 : 2;
        let baseId = heading.id || stringToSlug(headingText) || `section-${index + 1}`;
        let uniqueId = baseId;
        let suffix = 2;

        while (usedIds.has(uniqueId)) {
          uniqueId = `${baseId}-${suffix}`;
          suffix += 1;
        }

        usedIds.add(uniqueId);
        heading.id = uniqueId;
        if (level === 2) currentH2Id = uniqueId;

        return {
          id: uniqueId,
          text: headingText,
          level,
          parentH2Id: level === 3 ? currentH2Id : null,
        } as HeadingItem;
      });

      setHeadings(tocHeadings);
      setActiveHeadingId(tocHeadings[0]?.id ?? null);
    };

    // Defer so we run after React has committed the new page content into #page-content
    const id = requestAnimationFrame(() => {
      buildToc();
    });
    return () => cancelAnimationFrame(id);
  }, [contentSelector, contentKey]);

  useEffect(() => {
    if (headings.length === 0) return;

    const offset = 110;

    const updateActiveHeading = () => {
      const scrollAnchor = window.scrollY + offset;
      let nextActiveId = headings[0]?.id ?? null;

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (!element) continue;

        if (element.offsetTop <= scrollAnchor) {
          nextActiveId = heading.id;
        } else {
          break;
        }
      }

      setActiveHeadingId((prev) => (prev === nextActiveId ? prev : nextActiveId));
    };

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);

    return () => {
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  const activeHeading = headings.find((heading) => heading.id === activeHeadingId);
  const activeH2Id =
    activeHeading?.level === 2
      ? activeHeading.id
      : activeHeading?.parentH2Id ?? headings.find((heading) => heading.level === 2)?.id ?? null;

  return (
    <nav className="toc-sidebar" aria-label="On this page">
      <h6 className="toc-title">On this page</h6>
      <ul className="toc-list">
        {headings.map((heading) => {
          if (heading.level === 3 && heading.parentH2Id !== activeH2Id) return null;

          const isActive =
            heading.level === 2 ? heading.id === activeH2Id : heading.id === activeHeadingId;

          return (
            <li key={heading.id} className={`toc-item toc-item-level-${heading.level}`}>
              <a
                className={`toc-link ${isActive ? "is-active" : ""}`}
                href={`#${heading.id}`}
                aria-current={isActive ? "location" : undefined}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
