import React from 'react'
import image2 from '../../assets/Home_assets/image2.png'
import image3 from '../../assets/Home_assets/image3.png'

function GalleryPreview() {
    return (
    <div className="bg-purple-50 py-12 px-6 md:px-20 lg:px-40">
        {/* Gallery Section */}
        <div className="text-center mb-8">
            <h4 className="text-purple-600 text-sm font-semibold uppercase tracking-wide">
                Gallery
            </h4>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">
                A Celebration in Frames
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
                Showcasing the best moments, players, and passion from our tournaments.
            </p>
            <a
                href="/gallery"
                className="inline-block mt-4 text-purple-600 text-lg font-medium hover:underline flex items-center justify-center"
            >
                See More <span className="ml-2">→</span>
            </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img
                src="https://bigboysleague--1--1734761983633854436.s3.ap-south-1.amazonaws.com/images/gal_1.png"
                alt="Gallery Sample Image 1"
                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
            />
            <img
                src="https://bigboysleague--1--1734761983633854436.s3.ap-south-1.amazonaws.com/images/gal_2.png"
                alt="Gallery Sample Image 2"
                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
            />
            <img
                src={image2}
                alt="Gallery Sample Image 3"
                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
            />
            <img
                src={image3}
                alt="Gallery Sample Image 4"
                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
            />
        </div>
    </div>
    );
}

export default GalleryPreview;
