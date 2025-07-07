import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Sidebar({ onSearch }) {
    return (
        <aside className="sidebar">
            <img src="src/assets/profile.jpg" className="profile-pic" alt="profile" />
            <h1 className="gradient-title">
                <Link to="/" className="home-link">M.K. Nguyen</Link>
            </h1>
            <p className="bio">It's pronounced Mii</p>

            <form 
                className="newsletter-form" 
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="email"
                    placeholder="Newsletter coming soon!!"
                    className="newsletter-input"
                    disabled
                />
                <button 
                    type="submit" 
                    className="newsletter-button" 
                    disabled
                    title="Coming Soon!"
                >
                    ✓
                </button>
            </form>

            <nav className="nav-links">
                <Link to="/posts">Blog</Link>
                <Link to="/stats">Writing Stats</Link>
                <Link to="/art">Fanart</Link>
                <Link to="/publications">Publications</Link>
                <Dropdown />

                <span className="nav-separator">External</span>

                <a href="https://www.archiveofourown.org/users/coffeeinthemorning/profile" target="_blank" rel="noopener noreferrer">AO3</a>
                <a href="https://youtube.com/@notmymi?si=GjfiNXZXtMmP9-7M" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://youtube.com/channel/UC99cIKMRn7-zBX1EqBCmIEA" target="_blank" rel="noopener noreferrer">Art YouTube</a>
                <a href="https://pingpeng.carrd.co/" target="_blank" rel="noopener noreferrer">Carrd</a>
            </nav>
        </aside>
    );
}
