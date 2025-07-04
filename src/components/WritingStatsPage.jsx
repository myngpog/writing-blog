import React from "react";
import Sidebar from "./Sidebar";
import WritingChart from "./WritingChart";
import "../styles/writingStatsPage.css"

export default function WritingStatsPage() {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="stats-section">
        <h1 className="gradient-title">Writing Stats</h1>
        <WritingChart />
      </main>
    </div>
  );
}
