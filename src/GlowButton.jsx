import { useEffect, useRef } from "react";

export default function GlowButton() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const angle = Math.atan2(y, x) * (180 / Math.PI) + 180;

      el.style.setProperty("--mouse-angle", `${angle}deg`);
    };

    el.addEventListener("mousemove", handleMove);

    return () => {
      el.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div ref={ref} className="glow-container">
      <div className="glow"></div>

      <button className="ai-btn">
        ✨ AI Mode
      </button>
    </div>
  );
}