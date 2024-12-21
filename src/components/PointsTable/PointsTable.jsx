import React from "react";
import "./PointsTable.css";
import Navbar1 from '../Navbar1/Navbar1';
import team1 from '../../assets/PointsTable_assets/team1.png';
import team2 from '../../assets/PointsTable_assets/team2.png';
import team3 from '../../assets/PointsTable_assets/team3.png';
import team4 from '../../assets/PointsTable_assets/team4.png';
import team5 from '../../assets/PointsTable_assets/team5.png';
import team6 from '../../assets/PointsTable_assets/team6.png';
import team7 from '../../assets/PointsTable_assets/team7.png';
import team8 from '../../assets/PointsTable_assets/team8.png';
import team9 from '../../assets/PointsTable_assets/team9.png';
import team10 from '../../assets/PointsTable_assets/team10.png';

// Sample data array
// Updated pointsData array with NR and Tied columns
const pointsData = [
    {
      position: 1,
      teamName: "Black Dogs",
      matches: 9,
      won: 7,
      lost: 2,
      nr: 0,
      tied: 0,
      nrr: 0.994,
      points: 14,
      image: team1,
      background: team1,
    },
    {
      position: 2,
      teamName: "Purple Panthers",
      matches: 9,
      won: 7,
      lost: 2,
      nr: 0,
      tied: 0,
      nrr: 0.568,
      points: 14,
      image: team2,
      background: team2,
    },
    {
      position: 3,
      teamName: "White Tigers",
      matches: 9,
      won: 6,
      lost: 3,
      nr: 0,
      tied: 0,
      nrr: 1.010,
      points: 12,
      image: team3,
      background: team3,
    },
    {
        position: 4,
        teamName: "Orange Horses",
        matches: 9,
        won: 6,
        lost: 3,
        nr: 0,
        tied: 0,
        nrr: 0.899,
        points: 12,
        image: team4,
        background: team4,
      },
      {
        position: 5,
        teamName: "Yellow Lion",
        matches: 9,
        won: 6,
        lost: 3,
        nr: 1,
        tied: 0,
        nrr: 0.656,
        points: 12,
        image: team5,
        background: team5,
      },
      {
        position: 6,
        teamName: "Grey Elephant",
        matches: 9,
        won: 3,
        lost: 6,
        nr: 0,
        tied: 0,
        nrr: -0.641,
        points: 6,
        image: team6,
        background: team6,
      },
      {
        position: 7,
        teamName: "Brown Bears",
        matches: 9,
        won: 3,
        lost: 6,
        nr: 1,
        tied: 0,
        nrr: -1.115,
        points: 6,
        image: team7,
        background: team7,
      },
      {
        position: 8,
        teamName: "Red Bulls",
        matches: 9,
        won: 3,
        lost: 6,
        nr: 1,
        tied: 0,
        nrr: -1.683,
        points: 6,
        image: team8,
        background: team8,
      },
      {
        position: 9,
        teamName: "Blue Scorpions",
        matches: 9,
        won: 2,
        lost: 7,
        nr: 0,
        tied: 0,
        nrr: -0.612,
        points: 4,
        image: team9,
        background: team9,
      },
      {
        position: 10,
        teamName: "Green Sharks",
        matches: 9,
        won: 2,
        lost: 7,
        nr: 0,
        tied: 0,
        nrr: -1.015,
        points: 4,
        image: team10,
        background: team10,
      },
  ];
  
  const PointsTable = () => {
    return (
      <div className="bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen">
        <Navbar1 />
        <div className="p-6 flex flex-col items-center">
          <header className="text-white text-3xl font-bold mb-6">Points Table</header>
          {/* Dropdown */}
          <div className="mb-6">
            <select className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>BBL S2 2024</option>
              {/* Add more tournament options here */}
            </select>
          </div>
  
          {/* Points Table Wrapper */}
          <div className="table-wrapper relative w-11/12 md:w-3/4 lg:w-2/3 overflow-x-auto">
            <table className="table-auto w-full text-left text-white relative z-10">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-4 py-2">POS</th>
                  <th className="px-4 py-2">TEAM</th>
                  <th className="px-4 py-2">MAT</th>
                  <th className="px-4 py-2">WON</th>
                  <th className="px-4 py-2">LOST</th>
                  <th className="px-4 py-2">NR</th>
                  <th className="px-4 py-2">TIED</th>
                  <th className="px-4 py-2">NRR</th>
                  <th className="px-4 py-2">PTS</th>
                </tr>
              </thead>
              <tbody>
                {pointsData.map((team, index) => (
                  <tr key={index} className="relative hover:bg-gray-500">
                    <td className="px-4 py-2 text-center">{team.position}</td>
                    <td className="px-4 py-2 flex items-center space-x-2 text-center">
                      <span>
                        <img className="w-[2rem] h-[2rem] rounded-full" src={team.image} alt={team.teamName} />
                      </span>
                      <span>{team.teamName}</span>
                    </td>
                    <td className="px-4 py-2 text-center">{team.matches}</td>
                    <td className="px-4 py-2 text-center">{team.won}</td>
                    <td className="px-4 py-2 text-center">{team.lost}</td>
                    <td className="px-4 py-2 text-center">{team.nr}</td>
                    <td className="px-4 py-2 text-center">{team.tied}</td>
                    <td className="px-4 py-2 text-center">{team.nrr}</td>
                    <td className="px-4 py-2 text-center">{team.points}</td>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${team.background})`,
                        opacity: 0.3,
                        zIndex: -1,
                        filter: "brightness(4.5)",
                      }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default PointsTable;
  