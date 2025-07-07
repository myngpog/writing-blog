import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import quotes from "../public/assets/quotes";

export default function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }, []);

  return (
    <>
      <Header quote={quote} />
      <div className="home-container">
        <Sidebar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
