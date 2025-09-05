import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./components/SideBar";
import Banner from "./components/Banner";
import quotes from "../public/assets/quotes";

export default function App() {
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <>
      <Banner quote={quote} />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 xl:gap-22 ml-6 mr-6 xl:mr-15 mb-8">
        <Sidebar />
        <div className="flex-1 w-full md:w-auto md:mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
}
