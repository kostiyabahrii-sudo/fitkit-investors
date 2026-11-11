import { lazy, Suspense, useEffect } from "react";
import { Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { BRAND, LINKS } from "./content.js";
import { useTheme } from "./theme.js";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Products from "./pages/Products.jsx";

// FitKit for brands: its own section with its own frame, loaded only when
// someone opens /for-brands (see src/features/fitkit).
const FitkitApp = lazy(() => import("./features/fitkit/FitkitApp.tsx"));
const FOR_BRANDS = "/for-brands";

// Order matches the nav: About | Team | Roadmap | LinkedIn | Products | For brands
// `wideOnly`: shown in the nav row on wider screens only; on phones the same
// link sits in the logo row instead (see .top-extra), so the nav row keeps
// its five items.
const NAV = [
  { label: "About", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "Products", to: "/products" },
  { label: "For brands", to: FOR_BRANDS, wideOnly: true },
];

// Router keeps the old scroll position between pages; reset it unless the
// URL points at an anchor (e.g. /#faq).
function useScrollReset() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

export default function App() {
  useScrollReset();
  const { pathname } = useLocation();
  const [theme, toggleTheme] = useTheme();

  // /for-brands/* is FitKit's section, with its own bar and footer.
  if (pathname === FOR_BRANDS || pathname.startsWith(`${FOR_BRANDS}/`)) {
    return (
      <Suspense fallback={null}>
        <FitkitApp />
      </Suspense>
    );
  }

  return (
    <>
      <header className="top">
        <NavLink to="/" className="brand" aria-label={`${BRAND} home`}>
          <img src="/logo.png" alt="" width="34" height="34" />
          <span>{BRAND}</span>
        </NavLink>

        <nav className="nav" aria-label="Main">
          {NAV.map((item, i) => (
            <span
              className={item.wideOnly ? "nav-item nav-item--wide" : "nav-item"}
              key={item.label}
            >
              {i > 0 && (
                <span className="sep" aria-hidden="true">
                  |
                </span>
              )}
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                  <span className="ext" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ) : (
                <NavLink to={item.to} end>
                  {item.label}
                </NavLink>
              )}
            </span>
          ))}
        </nav>

        <div className="top-extra">
          <NavLink to={FOR_BRANDS} className="top-extra__brands">
            For brands
          </NavLink>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            Theme <span aria-hidden="true">{theme === "dark" ? "☾" : "☀"}</span>
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/team" element={<Team />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="foot">
        <span>
          © {new Date().getFullYear()} {BRAND}
        </span>
        {LINKS.contact ? (
          <a
            href={LINKS.contact}
            {...(LINKS.contact.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Contact us ↗
          </a>
        ) : (
          <span>Contact us</span>
        )}
      </footer>
    </>
  );
}
