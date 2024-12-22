import React from 'react'


function TeamsPreview() {

  return (
      <div className="bg-white py-12 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center md:items-start">
        {/* Teams Section */}
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-6 w-full md:w-1/2">
          <img
            src="https://bigboysleague--1--1734761983633854436.s3.ap-south-1.amazonaws.com/images/black_dog.png"
            alt="Team Black Dogs"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://bigboysleague--1--1734761983633854436.s3.ap-south-1.amazonaws.com/images/purple_panthers.png"
            alt="Team Purple Panthers"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://bigboysleague--1--1734761983633854436.s3.ap-south-1.amazonaws.com/images/white_tigers.png"
            alt="Team White tigers"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://bigboysleague--1--1734761983633854436.s3.ap-south-1.amazonaws.com/images/brown_brears.png"
            alt="Team Brown Bears"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="h-full mt-8 md:mt-0 md:ml-12 w-full md:w-1/2 text-center md:text-left content-center">
          <h4 className="text-purple-600 text-sm font-semibold uppercase tracking-wide mb-4">
            Teams
          </h4>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-4">
            BBL Teams: Power, Passion, and Performance
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Unite with the corporate stars showcasing their cricketing excellence.
          </p>
          <a
            href="/teams"
            className="inline-block mt-4 text-purple-600 text-lg font-medium hover:underline flex items-center justify-center"
          >
            See More <span className="ml-2">→</span>
          </a>
        </div>
      </div>

  );
}
export default TeamsPreview;
