import React from "react";
import "./theme.css";
import "./styles/homePage.css";
import headerImage from './assets/header.jpg';

export default function HomePage() {
  return (
    <div className="home-container">
      <main className="about-section">
        <div className="about-header">
          <h1 className="about-me">
            about
          </h1>
          <p className="blurb">
            M.K. (My) Nguyen is a Vietnamese American writer from southern California. When she's not busy keeping up with the world and caring a little too much about her social life, she spends the rest of her time in her head. 
            <br></br>
            <br></br>
            She enjoys writing about troubled (she likes to call them complex) characters and their navigation of the intricate worlds they exist in. She also likes to collect quotes and wastes too much money at tea and coffee shops. 
          </p>
        </div>
        <div className="writing-section">
          <h1 className="about-me">
            currently writing
          </h1>
          <div className="current-works">
            <ul className="works-list">
              <li className="work-item">
              <p className="work-title">Wait Where the Daffodils Bloom</p><span className="work-description">A historical romance fantasy novel WIP</span>
              </li>
              <li className="work-item">
              <p className="work-title">a day, a night; winter</p><span className="work-description">A(n angsty) Hansy fanfic WIP</span>
              </li>
            </ul>
          </div>
        </div>
        <img 
          src={headerImage} 
          className="about-image" 
        />
      </main>
    </div>
  );
}
