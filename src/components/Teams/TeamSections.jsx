// TeamsSection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import teamsData from './teamsData';

function TeamsSection({ marginTop }) {
  const [selectedSeason, setSelectedSeason] = useState('2023');
  const [selectedTeam, setSelectedTeam] = useState(null);

  const seasons = Object.keys(teamsData);

  useEffect(() => {
    if (selectedTeam) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedTeam]);

  const closeModal = () => {
    setSelectedTeam(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="flex flex-col items-center mt-10" style={{ marginTop }}>
      <div className="mb-8">
        <label htmlFor="season-select" className="text-lg font-bold mr-4">
          Select Season:
        </label>
        <select
          id="season-select"
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
          className="p-2 border rounded"
        >
          {seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamsData[selectedSeason] && teamsData[selectedSeason].length > 0 ? (
          teamsData[selectedSeason].map((team, index) => (
            <Link
              key={index}
              to={`/teamDetails/${selectedSeason}/${index}`}
              className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedTeam(team)}
            >
              <img
                src={team.teamLogo}
                alt={team.teamName}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{team.teamName}</h3>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No teams available for the selected season.
          </p>
        )}
      </div>

      {selectedTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedTeam.teamLogo}
              alt={selectedTeam.teamName}
              className="w-40 h-40 object-cover rounded-full mb-4 mx-auto"
            />
            <h2 className="text-2xl font-bold text-center mb-4">
              {selectedTeam.teamName}
            </h2>
            <p className="text-center text-gray-700">More details about the team...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamsSection;