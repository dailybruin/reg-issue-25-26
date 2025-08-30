import React from "react";
import "./EditorsLetter.css";

import letterImage from "../../images/desktop/LETTER.png";
import letterImageMobile from "../../images/mobile/Letter_Mobile.png";

import Sidebar from "../Sidebar";

const EditorsLetter = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);

  return (
    <>
      {isMobile && (
        <Sidebar
          mobileToggleOnly={false}
          forceMobile={true}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
      )}
      <div className="editors-letter-container" id="letter">
        <div className="editors-letter-content">
          <div className="editors-letter-image-wrapper">
            <img
              src={isMobile ? letterImageMobile : letterImage}
              alt="Letter from the editors"
              className="editors-letter-image"
            />
            {isMobile && (
              <button
                className="sidebar-toggle sidebar-toggle-on-letter"
                onClick={handleSidebarToggle}
              >
                ☰
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorsLetter;
