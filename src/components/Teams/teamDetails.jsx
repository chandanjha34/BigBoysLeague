import React from 'react';
import { useParams, Link } from 'react-router-dom';
import teamsData from './teams';

function TeamDetails() {
  const { season, teamIndex } = useParams(); // Get season and team index from URL parameters
  const team = teamsData[season][teamIndex]; // Fetch the team data from the JSON

  if (!team) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-800">Team not found!</h2>
        <Link to="/" className="text-purple-600 hover:underline">
          Go back to Teams
        </Link>
      </div>
    );
  }

  return (
    
    <div className="bg-purple-50 min-h-screen py-12 px-6 md:px-20 lg:px-40">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Team Logo */}
        <div className="text-center mb-6">
          <img
            src={team.teamLogo}
            alt={team.teamName}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-purple-900">{team.teamName}</h1>
        </div>

        {/* Team Profile */}
        <div className="mb-6">
          <h2 className="text-lg font-bold bg-yellow-400 inline-block px-3 py-1 rounded-md">
            Team Profile:
          </h2>
          <p className="text-gray-700 mt-2">{team.teamProfile}</p>
        </div>

        {/* Team Owner */}
        <div className="flex items-start mt-4">
          <div className="flex-shrink-0">
            <img
              src={team.teamOwnerImage}
              alt={team.teamOwner}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold text-gray-900 bg-yellow-400 inline-block px-3 py-1 rounded-md">
              {team.teamOwner}
            </h4>
            <p className="text-gray-700 mt-2">{team.teamOwnerBio}</p>
          </div>
        </div>

        {/* Back to Teams Button */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="bg-purple-900 text-white px-6 py-2 rounded-md hover:bg-purple-800"
          >
            Back to Teams
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;
