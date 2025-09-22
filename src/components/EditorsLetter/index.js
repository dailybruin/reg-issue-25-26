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
                  If you’re a first-year student, you might be entering a very different
                  Westwood from when you committed to UCLA. If you’re returning, campus might
                  be very different from when you left.
                </p>
                <p>
                  The Trump administration has{" "}
                  <a
                    href="https://dailybruin.com/2025/07/31/federal-government-suspends-research-funding-to-ucla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    suspended over $500 million in funding
                  </a>{" "}
                  from the university over allegedly allowing antisemitism, practicing
                  affirmative action and allowing “men to participate in women’s sports.”
                </p>
                <p>
                  Although, as of Sept. 21, a federal judge has{" "}
                  <a
                    href="https://dailybruin.com/2025/08/12/judge-orders-trump-administration-to-restore-some-of-uclas-frozen-research-grants"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    issued an injunction
                  </a>{" "}
                  against some of the revocations and has said she is inclined to restore
                  additional grants, we’re returning to a campus facing looming uncertainty:{" "}
                  <a
                    href="https://dailybruin.com/2025/09/02/ucla-plans-to-consolidate-some-campus-services-to-cut-costs-increase-efficiency"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    financial uncertainty
                  </a>{", "}
                  uncertainty about what the future of{" "}
                  <a
                    href="https://dailybruin.com/2025/09/01/federal-funding-cuts-drastically-limit-undergraduate-research-opportunities"
                    target="_blank"
                    rel="noopener noreferrer"  
                  >
                    research
                  </a>{" "} will
                  look like at our university and uncertainty about the future of UCLA’s{" "}
                  <a
                    href="https://dailybruin.com/2025/08/09/an-attack-on-knowledge-ucla-researchers-say-lifesaving-research-is-in-jeopardy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    lifesaving innovations
                  </a>{"."}
                </p>
                <p>
                  Amid this uncertainty, one thing is for certain: We are living through a
                  historic moment.
                </p>
                <p>
                  At the beginning of each academic year, the Daily Bruin releases its
                  Registration Issue as students and their families flock to campus. During
                  this pivotal point in UCLA’s history, we chose to focus on just that: our
                  university’s transformation across it.
                </p>
                <p>
                  In this issue, our News team takes a look at recovery efforts after the{" "}
                  <a
                    href="https://dailybruin.com/tag/la-county-fires"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    historic fires
                  </a>{" "}
                  that devastated parts of Los Angeles County. The Quad examines
                  the history of voting rights protections. Our Video team speaks to
                  researchers facing the consequences of the Trump administration’s historic
                  funding cuts.
                </p>
                <p>
                  If you want to play a part in telling these stories, we encourage you to
                  apply to one of The Bruin’s 17 sections and to join us in Kerckhoff Hall. You
                  can find application updates at @joindailybruin on Instagram and apply at{" "}
                  <a
                    href="https://apply.uclastudentmedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    apply.uclastudentmedia.com
                  </a>
                  .
                </p>
                <p>
                  And if you don’t – despite all this uncertainty – you can be sure that the
                  Daily Bruin will continue to inform you and our broader community.
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
