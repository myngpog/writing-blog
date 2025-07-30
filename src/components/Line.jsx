import { twMerge } from "tailwind-merge";

export default function Line({ className = "" }) {
  return <div className={twMerge("h-[1px] bg-dark-pink flex-grow min-w-0", className)}></div>;
}
