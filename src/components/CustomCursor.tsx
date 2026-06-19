import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is touch-enabled or small-screen
    const checkIsMobile = () => {
      const mobileQuery = window.matchMedia('(max-width: 768px)');
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(mobileQuery.matches || hasTouch);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    if (!isMobile) {
      addEventListeners();

      // Detect hover on buttons, links, togglers
      const handleSelectorHover = () => {
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .interactive-cursor');
        interactiveElements.forEach((el) => {
          el.addEventListener('mouseenter', () => setLinkHovered(true));
          el.addEventListener('mouseleave', () => setLinkHovered(false));
        });
      };

      // Periodic check in case DOM nodes re-render
      const interval = setInterval(handleSelectorHover, 1000);

      return () => {
        removeEventListeners();
        clearInterval(interval);
        window.removeEventListener('resize', checkIsMobile);
      };
    }

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [isMobile]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        id="cursor-ring"
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out mix-blend-difference ${
          clicked ? 'scale-75 bg-white' : linkHovered ? 'scale-150 bg-transparent border-dashed' : 'scale-100'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Center Dot */}
      <div
        id="cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
