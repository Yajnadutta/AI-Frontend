import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHashElement
 * Drop this once inside any page that has in-page anchor targets
 * (elements with matching `id`s). Whenever the URL's hash changes —
 * including navigating in from another page via <Link to="/resources#faqs" /> —
 * this scrolls the matching element into view.
 *
 * Usage (inside Resources.jsx, right under the opening <div className="home">):
 *   <ScrollToHashElement />
 */
export default function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    // Small delay lets the page's content (and any lazy images) render
    // first, so scrollIntoView measures the correct final position.
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}
