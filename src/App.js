import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Sections } from "./components/Sections";
import EditorsLetter from "./components/EditorsLetter";
import Interactive from "./components/Interactive";
import About from "./components/About";
import Landing from "./components/Landing";

function App() {
  const [data, setData] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  /* for now, use articles from grad issue as template */
  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/grad-issue-24-25"
    )
      .then((res) => res.json())
      // .then((res) => setData(res.data["article.aml"]));
      .then((res) => {
        const aml = res.data["article.aml"];
        setData(aml);
        if (typeof window !== "undefined") window.__ARTICLE_AML__ = aml;
      });
  }, []);

  useEffect(() => {
    const landing = document.getElementById("title");
    if (!landing) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    obs.observe(landing);
    return () => obs.disconnect();
  }, [data]);

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    data && (
      <div className="App">
        {showSidebar && <Sidebar />}
        
        {isMobile 
          ? <div className="background-grid-mobile" /> 
          : <div className="background-grid" />
        }

        <div className="main-content">
          <Header />
          <Landing />
          <EditorsLetter />
          <Interactive />
          <Sections />
          <About />
          <div style={{ height: "100px", background: "transparent" }} />
          <Footer />
        </div>
      </div>
    )
  );
}

export default App;
