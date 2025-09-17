import React, { useState, useEffect } from "react";
import "./sidebar.css";

const Sidebar = ({ mobileToggleOnly, forceMobile, isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If only rendering the mobile toggle button (for EditorsLetter), do not render the sidebar itself
  if (mobileToggleOnly) {
    return null;
  }

  // Use forced mobile mode if provided (for EditorsLetter)
  const mobile = forceMobile !== undefined ? forceMobile : isMobile;
  const open = typeof isOpen === "boolean" ? isOpen : false;

  return (
    <aside className={`sidebar ${mobile ? (open ? "open" : "closed") : ""}`}>
      {mobile && (
        <button
          className="sidebar-close"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          ×
        </button>
      )}

      <div className="sidebar-header">
        <h2 style={{ fontWeight: "bold" }}>Registration Issue</h2>
        <p>2025</p>
        <div className="sidebar-divider"></div>
      </div>

      <nav className="sidebar-nav">
        <a
          href="#title"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          TITLE <span className="sidebar-dot"></span>
        </a>
        <a
          href="#letter"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          LETTER <span className="sidebar-dot"></span>
        </a>
        <a
          href="#interactive"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          INTERACTIVE <span className="sidebar-dot"></span>
        </a>
        <a
          href="#news"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          NEWS <span className="sidebar-dot"></span>
        </a>
        <a
          href="#sports"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          SPORTS <span className="sidebar-dot"></span>
        </a>
        <a
          href="#arts"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          ARTS <span className="sidebar-dot"></span>
        </a>
        <a
          href="#opinion"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          OPINION <span className="sidebar-dot"></span>
        </a>
        <a
          href="#quad"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          THE QUAD <span className="sidebar-dot"></span>
        </a>
        <a
          href="#multimedia"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          MULTIMEDIA <span className="sidebar-dot"></span>
        </a>
        <a
          href="#prime"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          PRIME <span className="sidebar-dot"></span>
        </a>
        <a
          href="#about"
          className="sidebar-link"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          ABOUT <span className="sidebar-dot"></span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
