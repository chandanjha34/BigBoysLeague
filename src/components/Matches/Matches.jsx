import React, { useState } from "react";
import matchData from "./matchData";
import "./Matches.css";
import Navbar from "../Navbar/Navbar";
import GalleryPreview from '../Gallery/GalleryPreview';
import Footer from '../Footer/Footer';
import NewsPreview from '../News/NewsPreview';

const MatchesPage = () => {
  const [visibleMatches, setVisibleMatches] = useState(3);

  const showMoreMatches = () => {
    setVisibleMatches(matchData.length);
  };

  return (
    <div>
        <div>
            <Navbar version={3} />
        </div>

    <div className="matches-page">
      <h1 className="page-title">Matches</h1>
      <div className="matches-container">
        {matchData.slice(0, visibleMatches).map((match, index) => (
          <div key={index} className="match-card">
            <div className="match-header">
            {match.stage && <span className="match-stage">{match.stage}</span>}
              <span className="match-date">{match.date}</span>
            </div>
            <div className="teams">
              <p>{match.teams}</p>
            </div>
            <div className="venue">{match.venue}</div>
            <div className="scores">{match.scores}</div>
            <div className="result">{match.result}</div>
          </div>
        ))}
      </div>
      {visibleMatches < matchData.length && (
        <button className="show-more-button" onClick={showMoreMatches}>
          Show More
        </button>
      )}
    </div>
    <GalleryPreview />
      <NewsPreview />
      <Footer />
    </div>
  );
};

export default MatchesPage;
