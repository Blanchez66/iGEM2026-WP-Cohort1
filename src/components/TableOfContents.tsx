import { useEffect, useState } from "react";
import { stringToSlug } from "../utils";

type HeadingItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

type TableOfContentsProps = {
  contentSelector: string;
  /** When this changes (e.g. route pathname), TOC is re-built so it reflects the current page. */
  contentKey?: string;
};

export function TableOfContents({ contentSelector, contentKey }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

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

        return { id: uniqueId, text: headingText, level } as HeadingItem;
      });

      setHeadings(tocHeadings);
    };

    // Defer so we run after React has committed the new page content into #page-content
    const id = requestAnimationFrame(() => {
      buildToc();
    });
    return () => cancelAnimationFrame(id);
  }, [contentSelector, contentKey]);

  if (headings.length === 0) return null;

  return (
    <nav className="toc-sidebar" aria-label="On this page">
      <h6 className="toc-title">On this page</h6>
      <ul className="toc-list">
        {headings.map((heading) => (
          <li key={heading.id} className={`toc-item toc-item-level-${heading.level}`}>
            <a className="toc-link" href={`#${heading.id}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
