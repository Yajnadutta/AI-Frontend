import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * Mount this once, inside <BrowserRouter> but outside/above <Routes>
 * (see App.jsx). Without it, React Router keeps whatever scroll
 * position you were at on the previous page — so clicking a footer
 * link while scrolled to the bottom lands you at the bottom of the
 * new page too.
 *
 * If the destination has a hash (e.g. /resources#faqs), this steps
 * aside and lets ScrollToHashElement (used on the Resources page)
 * scroll to that section instead of forcing the page to the top.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
