import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import GalleryPreview from '../Gallery/GalleryPreview';
import NewsPreview from '../News/NewsPreview';
import teamsData from "./teams.json";

function TeamsSection({marginTop}) {
  const [selectedSeason, setSelectedSeason] = useState("BBL SZ 2024");
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    setSelectedTeam(null); // Reset the selected team when changing the season
  };

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  const closeModal = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="bg-purple-50 py-12 px-6 md:px-20 lg:px-40" style={{ marginTop: `${marginTop}px` }}>
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Teams
        </h2>
        <div className="relative inline-block">
          <select
            value={selectedSeason}
            onChange={handleSeasonChange}
            className="px-4 py-2 bg-purple-900 text-white rounded-md focus:outline-none"
          >
            {Object.keys(teamsData).map((season, index) => (
              <option key={index} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamsData[selectedSeason].map((team, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleTeamClick(team)}
          >
            <img
              src={team.teamLogo}
              alt={team.teamName}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{team.teamName}</h3>
          </div>
        ))}
      </div>

      {/* Team Detail Modal */}
      {selectedTeam && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        onClick={closeModal}
      >
        ✕
      </button>

      {/* Team Header */}
      <div className="text-center mb-6">
        <img
          src={selectedTeam.teamLogo}
          alt={selectedTeam.teamName}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h3 className="text-2xl font-bold text-purple-900">
          {selectedTeam.teamName}
        </h3>
      </div>

      {/* Team Profile Section */}
      <div className="mb-6">
        <h4 className="text-lg font-bold text-gray-900 mb-2 bg-yellow-400 inline-block px-3 py-1 rounded-md">
          Team Profile:
        </h4>
        <p className="text-gray-700">{selectedTeam.teamProfile}</p>
      </div>

      {/* Team Owner Section */}
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <img
            src={selectedTeam.teamOwnerImage}
            alt={selectedTeam.teamOwner}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-gray-900 mb-2 bg-yellow-400 inline-block px-3 py-1 rounded-md">
            {selectedTeam.teamOwner}
          </h4>
          <p className="text-gray-700">{selectedTeam.teamOwnerBio}</p>
        </div>
      </div>
    </div>
  </div>
      )}


    </div>
  );
}


function Teams() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Toggle scrolled state based on a threshold
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MAX_HEADER_HEIGHT = scrolled?200:600;

  return (
    <div className="flex flex-col h-full">
      <Navbar version={3} />

      {/* About One7 Section */}
      <TeamsSection marginTop={MAX_HEADER_HEIGHT}/>

      {/* Gallery Section */}
      <GalleryPreview />

      {/* News Section */}
      <NewsPreview />

      <Footer />
    </div>


  );
}
export default Teams;
