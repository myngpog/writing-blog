export default function Sidebar({ onSearch }) {
    return (
        <aside className="sidebar">
            <img src="src/assets/profile.jpg" className="profile-pic" alt="profile" />
            <h1 className="gradient-title">
                <a href="/" className="home-link">M.K. Nguyen</a>
            </h1>
            <p className="bio">"your heart is running away with your head"</p>
            <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                onChange={(e) => onSearch(e.target.value)}
            />
            <nav className="nav-links">
                <a href="/posts">Blog & Quotes</a>       
                <a href="/stats">Writing Stats</a>

                <span className="nav-separator">External</span>

                <a href="https://www.archiveofourown.org/users/coffeeinthemorning/profile" target="_blank" rel="noopener noreferrer">AO3</a>
                <a href="https://youtube.com/@notmymi?si=GjfiNXZXtMmP9-7M" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://youtube.com/channel/UC99cIKMRn7-zBX1EqBCmIEA" target="_blank" rel="noopener noreferrer">Art YouTube</a>
                <a href="https://pingpeng.carrd.co/" target="_blank" rel="noopener noreferrer">Carrd</a>
            </nav>
        </aside>
    );
}
