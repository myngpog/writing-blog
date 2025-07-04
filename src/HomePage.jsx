import React from "react";
import Sidebar from "./components/Sidebar";
import "./theme.css";
import "./styles/homePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="about-section">
        <h1 className="gradient-title">About Me</h1>
        <p className="bio">
          Hi! I'm My K. Nguyen, a writer who loves fantasy, coffee shops, and collecting pretty quotes. 
          I post on AO3 and YouTube, and I draw sometimes when I'm procrastinating. This site is my cozy corner for sharing thoughts and work updates.
        </p>
      </main>
    </div>
  );
}
