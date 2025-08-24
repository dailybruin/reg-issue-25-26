import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FourCardsLayout from "./layouts/FourCards";
import Sidebar from "./components/Sidebar";

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
          <FourCardsLayout />
          <Footer />
        </div>
      </div>
    )
  );
}

export default App;
