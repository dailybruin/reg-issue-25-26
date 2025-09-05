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
            <div className="editors-letter-overlay"> 
              <div className="letter-body"> 
                <p style={{ textAlign: "left" }}>Dear Bruins,</p>
                <p>
                  If you’re a first-year student, you might be entering a very different Westwood from when you committed to UCLA. If you’re returning, campus might be very different from when you left.
                </p>
                <p>
                  The Trump administration has suspended over $500 million in funding from the university over allegedly allowing antisemitism, practicing affirmative action and “allowing men to participate in women’s sports.”
                </p>
                <p>
                  Although a federal judge has granted an injunction against some of the revocations, some of the funding cuts are still up in the air. We’re returning to a campus facing looming uncertainty: financial uncertainty, uncertainty about what the future of research will look like at our university and uncertainty about the future of UCLA’s lifesaving innovations.
                </p>
                <p>
                  Amid this uncertainty, one thing is for certain: We are living through a historic moment.
                </p>
                <p>
                  At the beginning of each academic year, the Daily Bruin releases its Registration Issue as students and their families flock to campus. During this pivotal point in UCLA’s history, we chose to focus on just that: our university’s transformation across it.
                </p>
                <p>
                  In this issue, our News team takes a look at recovery efforts after the historic fires that devastated parts of Los Angeles County. The Quad examines the history of voting rights protections. Our Video team speaks to researchers facing the consequences of the Trump administration’s historic funding cuts.
                </p>
                <p>
                  If you want to play a part in telling these stories, we encourage you to apply to one of The Bruin’s 17 sections and to join us in Kerckhoff Hall. You can find application updates at @joindailybruin on Instagram and apply at apply.uclastudentmedia.com.
                </p>
                <p>
                  And if you don’t – despite all this uncertainty – you can be sure that the Daily Bruin will continue to inform you and our broader community.
                </p>
              </div> 
              <div className="letter-signatures">
                <p>Welcome back,</p>
                <p><br/>Dylan Winward | Editor in chief<br/>
                Shiv Patel | Managing editor<br/>
                Zimo Li | Digital managing editor</p>
              </div>
            </div>
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
