import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Sections } from "./components/Sections";
import EditorsLetter from "./components/EditorsLetter";
import Interactive from "./components/Interactive";
import About from "./components/About";

function App() {
  const [data, setData] = useState(null);

  /* for now, use articles from grad issue as template */
  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/grad-issue-24-25"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    data && (
      <div className="App">
        <Sidebar />

        <div className="background-grid" />

        <div className="main-content">
          <Header />
          <EditorsLetter />
          <Interactive />
          <Sections />
          <div style={{ height: "300px", background: "transparent" }} />
          <About />
          <div style={{ height: "100px", background: "transparent" }} />
          <Footer />
        </div>
      </div>
    )
  );
}

export default App;
