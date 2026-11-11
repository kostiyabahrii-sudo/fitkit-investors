/**
 * Top-bar navigation and the page's single call to action.
 *
 * `compact: false` drops a link from the collapsed mobile bar. An `href`
 * starting with `/for-brands` is a page of this section and the bar marks it
 * as the current one while it is open; `/` is the main site's home page.
 */
import { BASE } from '../hooks/useRoute';

export interface NavLink {
  label: string;
  href: string;
  /** Keep this link visible in the collapsed mobile bar. Defaults to true. */
  compact?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Main page', href: '/' },
  { label: 'Policies', href: `${BASE}/policies` },
];

/**
 * The only action on the page. Deliberately singular — there is no secondary
 * CTA in this version, in the hero or anywhere else.
 */
export const PRIMARY_CTA = {
  label: 'List your brand',
  href: '#list-your-brand',
};
