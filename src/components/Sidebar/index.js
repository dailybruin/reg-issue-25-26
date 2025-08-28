import React, { useState, useEffect } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      <aside
        className={`sidebar ${isMobile ? (isOpen ? "open" : "closed") : ""}`}
      >
        <div className="sidebar-header">
          <h2>Registration Issue</h2>
          <p>2025</p>
          <div className="sidebar-divider"></div>
        </div>

        <nav className="sidebar-nav">
          <a href="#title" className="sidebar-link">
            TITLE
          </a>
          <a href="#letter" className="sidebar-link">
            LETTER
          </a>
          <a href="#interactive" className="sidebar-link">
            INTERACTIVE
          </a>
          <a href="#news" className="sidebar-link">
            NEWS
          </a>
          <a href="#sports" className="sidebar-link">
            SPORTS
          </a>
          <a href="#arts" className="sidebar-link">
            ARTS
          </a>
          <a href="#opinion" className="sidebar-link">
            OPINION
          </a>
          <a href="#quad" className="sidebar-link">
            THE QUAD
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
