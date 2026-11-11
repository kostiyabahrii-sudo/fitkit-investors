// Self-hosted type, loaded only with this section. Fraunces ships its full axis
// set (opsz / SOFT / WONK) — the display cut of the headline depends on them.
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/inter';
// Newsreader carries the hero headline, in its opsz cut.
import '@fontsource-variable/newsreader/opsz.css';
import { useEffect, type MouseEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Creators from './components/Creators';
import Footer from './components/Footer';
import Policies from './components/Policies';
import ScrollStory from './components/ScrollStory';
import TopBar from './components/TopBar';
import { BASE, useRoute } from './hooks/useRoute';
import './styles/global.css';

/**
 * FitKit for brands, mounted by the main site at `/for-brands/*`.
 *
 * Three pages inside one frame: the landing page at `/for-brands`, the
 * creators page at `/for-brands/creators` (where "List your brand" leads), and
 * the policies page at `/for-brands/policies`. The bar and the footer are the
 * frame around all of them, so only the middle is swapped.
 *
 * Everything sits inside `.fk`: the section's tokens, base type and element
 * rules are scoped to it (see styles/global.css), so nothing here reaches the
 * main site's pages and the main site's resets stay out of here.
 */
export default function FitkitApp() {
  const route = useRoute();
  const navigate = useNavigate();

  // The copied components link with plain <a href>. Same-site paths are
  // handed to the router so moving between pages (and back to the main site)
  // stays in the app instead of reloading it.
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = (event.target as Element).closest('a');
    const href = link?.getAttribute('href');
    if (!link || !href || !href.startsWith('/') || href.startsWith('//')) return;
    if (link.target && link.target !== '_self') return;

    event.preventDefault();
    navigate(href);
  };

  useEffect(() => {
    if (route !== 'home') return;
    const previous = document.title;
    document.title = 'Fitkit for brands — where fashion brands get found';
    return () => {
      document.title = previous;
    };
  }, [route]);

  if (route === null) return <Navigate to={BASE} replace />;

  return (
    <div className="fk" onClick={onClick}>
      <div className="page">
        <TopBar route={route} />
        {route === 'creators' ? <Creators /> : route === 'policies' ? <Policies /> : <Landing />}
        <Footer />
      </div>
    </div>
  );
}

/**
 * The landing page is one told sequence, ending in one question: ScrollStory
 * holds all of it on a single pinned stage.
 */
function Landing() {
  return (
    <main>
      <ScrollStory />
    </main>
  );
}
