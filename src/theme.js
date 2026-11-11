import { useCallback, useEffect, useState } from "react";

// One Theme switch for the whole site, /for-brands included: the choice lives
// on <html data-theme> and in localStorage under the same key the FitKit
// section uses. index.html applies it before first paint.
const STORAGE_KEY = "fitkit-theme";

const current = () =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useState(current);

  // The FitKit section has its own switch; follow the attribute so this one
  // never disagrees with what is on screen after coming back from there.
  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(current()));
    observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
    setTheme(current());
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    const next = current() === "dark" ? "light" : "dark";
    if (next === "dark") document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: the switch still works for this visit.
    }
    setTheme(next);
  }, []);

  return [theme, toggle];
}
