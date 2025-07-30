import { Link } from "react-router-dom";
import WideDropdown from "./WideDropdown";
import WideLink from "./WideLink";
import Line from "./Line";

export default function Sidebar() {
    return (
        <aside className="w-[215px] sidebar flex flex-col items-center gap-4 font-accent">
            <img src="/assets/profile.jpg" className="w-[150px] rounded-[50%]" alt="profile" />
            <h1 className="text-2xl font-header text-center text-dark-pink font-bold tracking-[0.3rem] hover:text-[rgb(192,143,139)] transition-colors duration-300">
                <Link to="/" className="home-link">M.K. Nguyen</Link>
            </h1>
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

            <nav className="flex flex-col w-full gap-2">
                <WideLink to="/posts">Blog</WideLink>
                <WideLink to="/stats">Writing Stats</WideLink>
                <WideLink to="/publications">Publications</WideLink>
                <WideDropdown text="Projects">
                    <Link to="/daffodils">Daffodils</Link>
                    <Link to="/vth">Vth</Link>
                </WideDropdown>

                <div className="flex flex-row justify-center items-center gap-2 m-1">
                    <Line className="bg-dark-pink-button opacity-50" />
                    <span className="text-sm text-dark-pink tracking-widest">External</span>
                    <Line className="bg-dark-pink-button opacity-50" />
                </div>

                <WideLink href="https://www.archiveofourown.org/users/coffeeinthemorning/profile" target="_blank" rel="noopener noreferrer">AO3</WideLink>
                <WideLink href="https://youtube.com/@notmymi?si=GjfiNXZXtMmP9-7M" target="_blank" rel="noopener noreferrer">YouTube</WideLink>
                <WideLink href="https://youtube.com/channel/UC99cIKMRn7-zBX1EqBCmIEA" target="_blank" rel="noopener noreferrer">Art YouTube</WideLink>
                <WideLink href="https://pingpeng.carrd.co/" target="_blank" rel="noopener noreferrer">Carrd</WideLink>
            </nav>
        </aside>
    );
}
