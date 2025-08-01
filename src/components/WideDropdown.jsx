import { wideButtonClassNames } from "./WideLink";

export default function WideDropdown({ children, text }) {
  return (
    <div className="relative group/dropdown">
      <button
        className={`${wideButtonClassNames} text-dark-pink peer w-full cursor-pointer group-hover/dropdown:rounded-b-none`}
      >
        {text}
      </button>
      <div className="flex flex-col absolute w-full z-1 group-hover/dropdown:max-h-55 duration-300 -translate-y-2 group-hover/dropdown:translate-y-0 transition-all dark-pink-button max-h-0 overflow-hidden group-hover/dropdown:border-b rounded-b-md bg-background border-x border-dark-pink-button text-dark-pink [&>a]:w-full [&>a]:hover:underline [&>a]:text-center [&>a]:py-1.5">
        {children}
      </div>
    </div>
  );
}
