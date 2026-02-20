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

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Header and PageContent */}
      <Routes>
        {Object.entries(pathMapping).map(
          ([path, { title, lead, component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={
                path === "/" ? (
                  <Component />
                ) : (
                  <>
                    <Header title={title || ""} lead={lead || ""} />
                    <div className="container">
                      <Component />
                    </div>
                  </>
                )
              }
            />
          ),
        )}
        <Route
          path="*"
          element={
            <>
              <Header
                title="Not Found"
                lead="The requested URL was not found on this server."
              />
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
