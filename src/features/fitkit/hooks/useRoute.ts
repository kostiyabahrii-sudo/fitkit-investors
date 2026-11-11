import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * The FitKit section's router.
 *
 * In the standalone landing the pages were fragments (`#/policies`). Inside the
 * main site they are real paths under `/for-brands`, served by react-router;
 * this hook maps the path to one of the section's pages.
 *
 * In-page anchors (`#list-your-brand`) still share the address bar and leave the
 * page alone.
 */
export type Route = 'home' | 'creators' | 'policies';

export const BASE = '/for-brands';

const ROUTES: Record<string, Route> = {
  [BASE]: 'home',
  [`${BASE}/creators`]: 'creators',
  [`${BASE}/policies`]: 'policies',
};

/** The route a path names, or null when it is not one of the section's pages. */
export function routeFor(path: string): Route | null {
  return ROUTES[path.toLowerCase().replace(/\/+$/, '')] ?? null;
}

/**
 * The current route, kept in step with the address bar.
 *
 * Call this once, at the top of the section: it owns the scroll reset that
 * comes with a change of page.
 */
export function useRoute(): Route | null {
  const { pathname } = useLocation();
  const route = routeFor(pathname);
  const shown = useRef(route);

  // A new page starts at the top, and gets there instantly: `html` scrolls
  // smoothly for in-page anchors, which is the wrong move for a page that has
  // just been replaced.
  useEffect(() => {
    if (shown.current === route) return;

    shown.current = route;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  return route;
}
