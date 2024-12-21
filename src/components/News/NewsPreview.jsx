import React from 'react'


function NewsPreview() {
    return (
        <div className="bg-purple-50 py-12 px-6 md:px-20 lg:px-40">
            {/* News Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Featured News */}
                <div className="col-span-2">
                    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-full">
                        <img
                            src="https://bigboysleague--1--1734761983633854436.s3.ap-south-1.amazonaws.com/images/news_image_1.png"
                            alt="Featured News"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    An exciting match was seen between Orange Horse and Black Dog in the BBL T20 Grand Finale
                                </h3>
                                <p className="text-sm md:text-base">
                                    The grand finale of the Big Boys League (BBL) T20 witnessed an exhilarating showdown between the Orange Horses and Black Dog. The team Orange Horses was led by Ajay...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest News List */}
                <div className='grid grid-row-2'>
                    <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
                        <h4 className="text-gray-900 text-xl font-semibold mb-4">Latest news</h4>
                        <div className="space-y-4">
                            {/* News Item */}
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://bigboysleague--1--1734761983633854436.s3.ap-south-1.amazonaws.com/images/news_image_2.png"
                                    alt="News 1"
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <p className="text-sm text-gray-700">
                                    An exciting match was seen between Orange Horse and Black Dog in the BBL T20 Grand Finale
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="/news"
                        className="text-purple-600 text-lg font-medium hover:underline flex mt-auto items-center justify-center self-end"
                    >
                        See More <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsPreview;
