import "../theme.css";
import "../styles/projects.css";

export default function Daffodils() {
  return (
    <div className="home-container">
      {/* New container for Daffodils content */}
      <div className="project-container">
        <div className="project-title">
          <h1>Daffodils</h1>
          <div className="vertical-line"></div>
          <p className="project-description">
            A historical romance fantasy following the life of the one fallen from grace.
          </p>
        </div>

        <div className="content-wrapper">
          <div className="project-books">
            <h3 className="about-me">Books in the Series</h3>
            <div className="book-list">
              <div className="book-item">
                <h4>Book 1: The Fall</h4>
                <p>A story of betrayal and the fall from grace that changes everything.</p>
              </div>
              <div className="book-item">
                <h4>Book 2: Rising Again</h4>
                <p>As the protagonist struggles to reclaim her reputation, new challenges arise.</p>
              </div>
              <div className="book-item">
                <h4>Book 3: Redemption</h4>
                <p>In this final chapter, the protagonist seeks redemption and love, but at a great cost.</p>
              </div>
            </div>
          </div>

          {/* Spotify Embed Section */}
          <div className="project-spotify">
            <h3>Listen to the Playlist</h3>
            <p>Here is a playlist inspired by the themes of Daffodils:</p>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/7gWTaXvb8NDDPjKJkzTuDC?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Daffodils Playlist"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
