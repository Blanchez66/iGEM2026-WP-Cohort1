import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping } from "../../utils";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
import { TableOfContents } from "../../components/TableOfContents";

const App = () => {
  const pathMapping = getPathMapping();
  const { pathname } = useLocation();
  const normalizedBase = import.meta.env.BASE_URL.replace(/\/+$/, "");
  let currentPath = pathname;

  if (normalizedBase && currentPath.startsWith(normalizedBase)) {
    currentPath = currentPath.slice(normalizedBase.length) || "/";
  }

  if (!currentPath.startsWith("/")) {
    currentPath = `/${currentPath}`;
  }

  const pageName =
    currentPath in pathMapping ? pathMapping[currentPath].name || "Home" : "Not Found";
  const faviconHref = `${import.meta.env.BASE_URL}images/home/crab.svg?v=2`;

  useEffect(() => {
    document.title = `${pageName}｜ iGEM Winter Project`;

    const upsertFavicon = (rel: "icon" | "shortcut icon") => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.type = "image/svg+xml";
      link.href = faviconHref;
    };

    upsertFavicon("icon");
    upsertFavicon("shortcut icon");
  }, [pageName, faviconHref]);

  useEffect(() => {
    if (currentPath === "/") return;

    const root = document.querySelector<HTMLElement>("#page-content");
    if (!root) return;

    const cleanupHandlers: Array<() => void> = [];

    const setupCollapsibleH2 = () => {
      const h2Elements = Array.from(root.querySelectorAll<HTMLHeadingElement>("h2"));

      h2Elements.forEach((heading) => {
        if (heading.dataset.collapsibleReady === "true") return;
        const parent = heading.parentElement;
        if (!parent) return;

        let nextSibling = heading.nextElementSibling;
        if (!nextSibling || nextSibling.tagName === "H2") return;

        const sectionBody = document.createElement("div");
        sectionBody.className = "h2-section-body";
        sectionBody.dataset.collapsibleBody = "true";

        while (nextSibling && nextSibling.tagName !== "H2") {
          const current = nextSibling;
          nextSibling = nextSibling.nextElementSibling;
          sectionBody.appendChild(current);
        }

        heading.insertAdjacentElement("afterend", sectionBody);
        heading.classList.add("h2-collapsible");
        heading.dataset.collapsibleReady = "true";
        heading.tabIndex = 0;
        heading.setAttribute("role", "button");
        heading.setAttribute("aria-expanded", "true");

        const toggleSection = () => {
          const isCollapsed = heading.classList.toggle("is-collapsed");
          sectionBody.classList.toggle("is-collapsed", isCollapsed);
          heading.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
        };

        const onKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleSection();
          }
        };

        heading.addEventListener("click", toggleSection);
        heading.addEventListener("keydown", onKeyDown);
        cleanupHandlers.push(() => {
          heading.removeEventListener("click", toggleSection);
          heading.removeEventListener("keydown", onKeyDown);
        });
      });
    };

    const id = requestAnimationFrame(setupCollapsibleH2);

    return () => {
      cancelAnimationFrame(id);
      cleanupHandlers.forEach((cleanup) => cleanup());
    };
  }, [currentPath]);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Header and PageContent */}
      <Routes>
        {Object.entries(pathMapping).map(
          ([path, { title, component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={
                path === "/" ? (
                  <Component />
                ) : (
                  <div>
                    <Header title={title || ""} />
                    <div className="container page-layout-container">
                      <div className="row">
                        <aside className="col-lg-3 d-none d-lg-block">
                          <TableOfContents contentSelector="#page-content" contentKey={currentPath} />
                        </aside>
                        <main id="page-content" className="col-12 col-lg-9">
                          <Component />
                        </main>
                      </div>
                    </div>
                  </div>
                )
              }
            />
          ),
        )}
        <Route
          path="*"
          element={
            <>
              <Header title="Not Found" />
              <NotFound />
            </>
          }
        />
      </Routes>

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />
    </>
  );
};

export default App;
