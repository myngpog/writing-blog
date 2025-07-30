import { useState, useEffect } from "react";
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
      <div className="flex flex-row gap-22 ml-6 mr-15 home-container">
        <Sidebar />
        <div className="flex-1 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
}
