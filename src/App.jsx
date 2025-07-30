import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./components/SideBar";
import Banner from "./components/Banner";
import quotes from "../public/assets/quotes";
import MobileSidebar from "./components/MobileSideBar";

export default function App() {
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <>
      <Banner quote={quote} />
      <div className="flex flex-row gap-10 xl:gap-22 ml-6 mr-6 xl:mr-15">
        <Sidebar className="hidden lg:flex"/>
        <MobileSidebar />
        <div className="flex-1 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
}
