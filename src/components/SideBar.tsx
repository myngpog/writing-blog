import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import Heading from './Heading';
import Line from './Line';
import WideDropdown from './WideDropdown';
import WideLink from './WideLink';

export default function Sidebar() {
  return (
    <aside className="w-[215px] flex sidebar flex-col items-center gap-4 font-accent">
      <img
        src="/assets/profile.jpg"
        className="w-[150px] rounded-[50%]"
        alt="profile"
      />
      <Heading className="text-2xl text-center tracking-[0.3rem] hover:text-[rgb(192,143,139)] transition-colors duration-300">
        <Link to="/">M.K. Nguyen</Link>
      </Heading>
      <p className="text-[#8b9a75]">It's pronounced Mii</p>

      <form
        className="flex flex-row items-center gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Newsletter coming soon!!"
          className="p-1.5 w-full font-body text-[0.8rem] rounded-md border border-gray-300 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled
        />
        <button
          type="submit"
          className="text-white px-2.5 h-full rounded-md bg-dark-pink-button border border-dark-pink-button hover:bg-transparent hover:text-dark-pink hover:border-dark-pink-button disabled:cursor-not-allowed disabled:opacity-60"
          disabled
          title="Coming Soon!"
        >
          ✓
        </button>
      </form>

      <Navigation className="hidden md:flex" />
      <MobileNavigation />
    </aside>
  );
}

function Navigation({ className }: { className?: string }) {
  return (
    <nav className={twMerge('flex flex-col w-full gap-2 ', className)}>
      <WideLink to="/posts">Blog</WideLink>
      <WideLink to="/stats">Writing Stats</WideLink>
      <WideDropdown text={<Link to="/publications">Publications</Link>}>
        <Link to="/projects/daffodils">Daffodils</Link>
        <Link to="/projects/vth">Vth</Link>
      </WideDropdown>
      <WideDropdown text="Fanfiction">
        <Link to="/projects/ttaw">the thing about war</Link>
        <Link to="/projects/tqom">this queen of mine</Link>
      </WideDropdown>

      <div className="flex flex-row justify-center items-center gap-2 m-1">
        <Line className="bg-dark-pink-button opacity-50" />
        <span className="text-sm text-dark-pink tracking-widest">External</span>
        <Line className="bg-dark-pink-button opacity-50" />
      </div>

      <WideLink
        href="https://ko-fi.com/penguinsonice#linkModal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Support my work!
      </WideLink>
      <WideDropdown text="YouTube">
        <Link
          to="https://youtube.com/@notmymi?si=GjfiNXZXtMmP9-7M"
          target="_blank"
        >
          Main
        </Link>
        <Link
          to="https://youtube.com/channel/UC99cIKMRn7-zBX1EqBCmIEA"
          target="_blank"
        >
          Art
        </Link>
      </WideDropdown>
      <WideLink
        href="https://www.archiveofourown.org/users/coffeeinthemorning/profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        AO3
      </WideLink>
      <WideLink
        href="https://pingpeng.carrd.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Carrd
      </WideLink>
    </nav>
  );
}

function MobileNavigation() {
  return (
    <div className="md:hidden w-full">
      <details className="group">
        <summary className="list-none flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="size-7 p-1 stroke-dark-pink cursor-pointer rounded-2xl border border-gray-300/60 transition-transform group-open:rotate-180 duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </summary>
        <Navigation className="mt-4 max-h-0 group-open:max-h-100 overflow-hidden transition-[max-height] duration-500 delay-50" />
      </details>
    </div>
  );
}
