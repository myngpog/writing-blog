import { useEffect, useState } from "react";
import Sidebar from "./SideBar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 p-2 bg-dark-pink-button text-white active:text-dark-pink-button active:bg-background transition-colors duration-100 rounded-lg shadow-lg lg:hidden"
        aria-label="Toggle Sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-40 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-background p-6 h-4/5 rounded-md overflow-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}
