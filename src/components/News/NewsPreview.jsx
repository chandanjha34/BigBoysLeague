import React, { useState, useEffect } from "react";

const newsData = [
  {
    type: "news",
    image: "https://i.ibb.co/b1BdrVX/news1.png",
    link: "http://m.samaylive.com/regional-news-in-hindi/ncr-news-in-hindi/522106/-from-the-boardroom-to-the-borders-one7-sports-big-boys-league-season-2-unveiled.html",
    description: "बोर्डरूम से लेकर सीमाओं तक! वन7 स्पोर्ट्स - बिग बॉयज लीग सीजन 2 का अनावरण",
  },
  {
    type: "news",
    image: "https://i.ibb.co/CzdVcrp/news2.png",
    link: "https://haryana.punjabkesari.in/gurgaon/news/one7-sports--unveils-big-boys-league-season-2-2079198",
    description: "वन7 स्पोर्ट्स - बिग बॉयज लीग सीजन 2 का अनावरण",
  },
  {
    type: "news",
    image: "https://i.ibb.co/P6F5mzY/news3.png",
    link: "https://epaper.thestatesman.com/m5/3956167/Delhi-The-Statesman/25-12-2024#page/16/1",
    description: "Big Bos Laague Season 2 unvieled",
  },
  {
    type: "news",
    image: "https://i.ibb.co/RBSM2Fg/news4.png",
    link: "https://www.jagran.com/other-sports/headlines-big-boys-league-season-2-unveiled-23856970.html",
    description:
      "BBL: बिग बॉयज लीग सीजन 2 का अनावरण, दिल्ली एनसीआर के पेशेवर दिखाएंगे अपना हुनर",
  },

];

function NewsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + itemsPerSlide) % newsData.length
      );
    }, 5000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Get the current slide's data
  const currentNews = newsData.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  return (
    <div className="bg-purple-50 py-12 px-6 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Featured News */}
        <div className="col-span-2">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <img
              src={newsData[0].image}
              alt="Featured News"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {newsData[0].description}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* News Slider */}
        <div className="bg-white p-6 rounded-lg shadow-lg xl:w-[20vw] h-fit">
          <h4 className="text-gray-900 text-xl font-semibold mb-4">
            Latest News
          </h4>
          <div className="space-y-4">
            {currentNews.map((news, index) => (
              <a
                key={index}
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <img
                  src={news.image}
                  alt={`News ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <p className="text-sm text-gray-700">{news.description}</p>
              </a>
            ))}
          </div>
          <div className="mt-4 flex justify-center items-center gap-2">
            {Array.from({
              length: Math.ceil(newsData.length / itemsPerSlide),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * itemsPerSlide)}
                className={`w-3 h-3 rounded-full ${
                  idx === Math.floor(currentIndex / itemsPerSlide)
                    ? "bg-purple-600"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPreview;
