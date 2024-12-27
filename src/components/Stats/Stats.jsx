import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';
import TeamsPreview from '../Teams/TeamsPreview';
import NewsPreview from '../News/NewsPreview';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import dummy_player from "../../assets/Statistics_assets/shivam.png";
import topcard from "../../assets/Statistics_assets/topcard.png";
import bgtop from "../../assets/Statistics_assets/bgImageTop.png";
import Players from "../../assets/Statistics_assets/topPlayers.png";
// Mock data
const mockPlayers = [
    {
        id: 1,
        name: "Shivam Singh",
        matches: 10,
        innings: 9,
        notOut: 1,
        runs: 364,
        highScore: "106*",
        average: 45.50,
        ballsFaced: 270,
        strikeRate: 134.81,
        hundreds: 1,
        fifties: 3,
        fours: 27,
        sixes: 23,
        team: "CSG"
    },
    {
        id: 2,
        name: "Tushar Raheja",
        matches: 9,
        innings: 9,
        notOut: 0,
        runs: 324,
        highScore: "81",
        average: 36.00,
        ballsFaced: 216,
        strikeRate: 150.00,
        hundreds: 0,
        fifties: 3,
        fours: 33,
        sixes: 14,
        team: "MTB"
    },
    {
        id: 3,
        name: "Arjun Verma",
        matches: 12,
        innings: 11,
        notOut: 2,
        runs: 401,
        highScore: "99*",
        average: 44.56,
        ballsFaced: 310,
        strikeRate: 129.35,
        hundreds: 0,
        fifties: 4,
        fours: 45,
        sixes: 18,
        team: "KNG"
    },
    {
        id: 4,
        name: "Rohan Gupta",
        matches: 8,
        innings: 8,
        notOut: 1,
        runs: 278,
        highScore: "72*",
        average: 39.71,
        ballsFaced: 205,
        strikeRate: 135.61,
        hundreds: 0,
        fifties: 2,
        fours: 28,
        sixes: 12,
        team: "RR"
    },
    {
        id: 5,
        name: "Aman Yadav",
        matches: 9,
        innings: 9,
        notOut: 0,
        runs: 333,
        highScore: "88",
        average: 37.00,
        ballsFaced: 260,
        strikeRate: 128.07,
        hundreds: 0,
        fifties: 3,
        fours: 40,
        sixes: 10,
        team: "CSG"
    },
    {
        id: 6,
        name: "Karan Desai",
        matches: 10,
        innings: 10,
        notOut: 3,
        runs: 402,
        highScore: "97",
        average: 57.43,
        ballsFaced: 280,
        strikeRate: 143.57,
        hundreds: 0,
        fifties: 4,
        fours: 38,
        sixes: 15,
        team: "MTB"
    },
    {
        id: 7,
        name: "Vikas Sharma",
        matches: 11,
        innings: 11,
        notOut: 1,
        runs: 366,
        highScore: "85",
        average: 36.60,
        ballsFaced: 255,
        strikeRate: 143.53,
        hundreds: 0,
        fifties: 3,
        fours: 29,
        sixes: 20,
        team: "KNG"
    },
    {
        id: 8,
        name: "Siddharth Mishra",
        matches: 12,
        innings: 12,
        notOut: 2,
        runs: 410,
        highScore: "102*",
        average: 41.00,
        ballsFaced: 300,
        strikeRate: 136.67,
        hundreds: 1,
        fifties: 2,
        fours: 36,
        sixes: 22,
        team: "RR"
    },
    {
        id: 9,
        name: "Nitin Kumar",
        matches: 10,
        innings: 9,
        notOut: 2,
        runs: 309,
        highScore: "78*",
        average: 44.14,
        ballsFaced: 230,
        strikeRate: 134.35,
        hundreds: 0,
        fifties: 2,
        fours: 31,
        sixes: 11,
        team: "CSG"
    },
    {
        id: 10,
        name: "Deepak Joshi",
        matches: 8,
        innings: 8,
        notOut: 0,
        runs: 248,
        highScore: "67",
        average: 31.00,
        ballsFaced: 190,
        strikeRate: 130.53,
        hundreds: 0,
        fifties: 2,
        fours: 21,
        sixes: 15,
        team: "MTB"
    },
    {
        id: 11,
        name: "Ravi Tripathi",
        matches: 7,
        innings: 7,
        notOut: 1,
        runs: 223,
        highScore: "61*",
        average: 37.17,
        ballsFaced: 165,
        strikeRate: 135.15,
        hundreds: 0,
        fifties: 1,
        fours: 24,
        sixes: 10,
        team: "KNG"
    },
    {
        id: 12,
        name: "Manish Reddy",
        matches: 9,
        innings: 9,
        notOut: 2,
        runs: 294,
        highScore: "82",
        average: 42.00,
        ballsFaced: 200,
        strikeRate: 147.00,
        hundreds: 0,
        fifties: 2,
        fours: 25,
        sixes: 20,
        team: "RR"
    },
    {
        id: 13,
        name: "Saurabh Jain",
        matches: 10,
        innings: 10,
        notOut: 1,
        runs: 357,
        highScore: "91",
        average: 39.67,
        ballsFaced: 280,
        strikeRate: 127.50,
        hundreds: 0,
        fifties: 3,
        fours: 33,
        sixes: 12,
        team: "CSG"
    },
    {
        id: 14,
        name: "Harsh Tandon",
        matches: 8,
        innings: 8,
        notOut: 0,
        runs: 254,
        highScore: "70",
        average: 31.75,
        ballsFaced: 195,
        strikeRate: 130.26,
        hundreds: 0,
        fifties: 2,
        fours: 27,
        sixes: 8,
        team: "MTB"
    },
    {
        id: 15,
        name: "Akash Saini",
        matches: 12,
        innings: 12,
        notOut: 3,
        runs: 404,
        highScore: "96",
        average: 44.89,
        ballsFaced: 320,
        strikeRate: 126.25,
        hundreds: 0,
        fifties: 3,
        fours: 41,
        sixes: 11,
        team: "KNG"
    },
    {
        id: 16,
        name: "Vivek Chaturvedi",
        matches: 9,
        innings: 9,
        notOut: 0,
        runs: 295,
        highScore: "74",
        average: 32.78,
        ballsFaced: 215,
        strikeRate: 137.21,
        hundreds: 0,
        fifties: 2,
        fours: 28,
        sixes: 13,
        team: "RR"
    },
    {
        id: 17,
        name: "Sandeep Rawat",
        matches: 11,
        innings: 10,
        notOut: 1,
        runs: 363,
        highScore: "89",
        average: 40.33,
        ballsFaced: 275,
        strikeRate: 131.64,
        hundreds: 0,
        fifties: 3,
        fours: 34,
        sixes: 14,
        team: "CSG"
    },
    {
        id: 18,
        name: "Ankit Sharma",
        matches: 8,
        innings: 7,
        notOut: 2,
        runs: 210,
        highScore: "57*",
        average: 42.00,
        ballsFaced: 150,
        strikeRate: 140.00,
        hundreds: 0,
        fifties: 1,
        fours: 20,
        sixes: 10,
        team: "MTB"
    },
    {
        id: 19,
        name: "Yash Patel",
        matches: 10,
        innings: 10,
        notOut: 1,
        runs: 312,
        highScore: "86",
        average: 34.67,
        ballsFaced: 240,
        strikeRate: 130.00,
        hundreds: 0,
        fifties: 2,
        fours: 35,
        sixes: 9,
        team: "KNG"
    },
    {
        id: 20,
        name: "Rajiv Pandey",
        matches: 7,
        innings: 6,
        notOut: 1,
        runs: 168,
        highScore: "50*",
        average: 33.60,
        ballsFaced: 120,
        strikeRate: 140.00,
        hundreds: 0,
        fifties: 1,
        fours: 19,
        sixes: 5,
        team: "RR"
    }
].map(player => ({
    ...player,
    // Add random bowling stats for demonstration
    wickets: Math.floor(Math.random() * 15),
    bowlingInnings: Math.floor(Math.random() * 10) + 5,
    economy: (Math.random() * 4 + 6).toFixed(2),
    bowlingAverage: (Math.random() * 15 + 20).toFixed(2),
    bestBowling: `${Math.floor(Math.random() * 4)}/${Math.floor(Math.random() * 30)}`
}));;


const cards = [
    {
        gradient: ["#ffc107", "#dc3545"],
        logo: topcard,
        playerName: "Shivam Singh",
        runs: 364,
    },
    {
        gradient: ["#28a745", "#17a2b8"],
        logo: topcard,
        playerName: "Tushar Raheja",
        runs: 324,
    },
    {
        gradient: ["#6f42c1", "#6610f2"],
        logo: topcard,
        playerName: "B Indrajith",
        runs: 286,
    },
];

const Dropdown = ({ label, options, onSelect, isOpen, setIsOpen }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [setIsOpen]);

    return (
        <div style={{
            position: 'relative',
            width: '24%'
        }} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    backgroundColor: 'white', padding: '8px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', border: '1px solid #e5e7eb', fontWeight: '500'
                }}
            >
                {label}
                <svg style={{
                    width: '16px',
                    height: '16px',
                    marginLeft: '8px'
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    zIndex: 10,
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    marginTop: '4px',
                    border: '1px solid #e5e7eb',
                }}>
                    {options.map((option) => (
                        <div
                            key={option}
                            style={{
                                padding: '8px 16px',
                                cursor: 'pointer',
                                ':hover': {
                                    backgroundColor: '#f3f4f6'
                                }
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            onClick={() => {
                                onSelect(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


const Card = ({ gradient, logo, playerName, runs }) => {
    return (
        <div
            style={{
                position: "relative",
                width: "480px",
                height: "260px",
                background: `linear-gradient(to bottom, ${gradient[0]}, ${gradient[1]})`,
                borderRadius: "15px",
                color: "white",
                padding: "20px",
                textAlign: "center",
                display: "flex",
            }}
        >
            {/* Logo */}
            <div
                style={{
                    position: "absolute",
                    left: "12%",
                    top: '-14px',
                    width: "230px",
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={logo}
                    alt="Team Logo"
                />
            </div>
            <div style={{ width: '50%' }}>

            </div>
            <div style={{ width: '50%', textAlign: 'end' }}>
                <div>
                    <span style={{
                        fontSize: "18px",
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        padding: '5px 8px',
                    }} className='rounded'>MOST RUNS</span>
                </div>
                <h2
                    style={{
                        fontSize: "28px",
                        fontWeight: "500",
                        textTransform: 'uppercase',
                    }}
                >
                    {playerName}
                </h2>
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', right: '0', fontSize: '1.2rem' }}>
                        Runs
                    </div>
                    <div>
                        <span style={{ fontSize: '4rem', fontWeight: '500' }}>
                            {runs}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

const CricketStats = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [yearOpen, setYearOpen] = useState(false);
    const [statsOpen, setStatsOpen] = useState(false);
    const [teamsOpen, setTeamsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState("BPL 2024");
    const [selectedStat, setSelectedStat] = useState("MOST RUNS");
    const [selectedTeam, setSelectedTeam] = useState("ALL TEAMS");
    const [filteredPlayers, setFilteredPlayers] = useState(mockPlayers);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        let filtered = mockPlayers.filter(player => {
            const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTeam = selectedTeam === "ALL TEAMS" || player.team === selectedTeam;
            return matchesSearch && matchesTeam;
        });

        // Sort based on selected stat
        filtered = filtered.sort((a, b) => {
            if (selectedStat === "MOST RUNS") {
                return b.runs - a.runs;
            } else if (selectedStat === "MOST WICKETS") {
                return b.wickets - a.wickets;
            }
            return 0;
        });

        setFilteredPlayers(filtered);
    }, [searchTerm, selectedTeam, selectedStat]);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const MAX_HEADER_HEIGHT = scrolled ? 200 : 600;
    const displayedPlayers = showAll ? filteredPlayers : filteredPlayers.slice(0, 10);

    const renderTableHeaders = () => {
        if (selectedStat === "MOST RUNS") {
            return (
                <tr className="text-center header-color">
                    <th className="px-4 py-2">POS</th>
                    <th className="p-4 py-2">Player</th>
                    <th className="p-4 py-2">Mat</th>
                    <th className="p-4 py-2">Inns</th>
                    <th className="p-4 py-2">NO</th>
                    <th className="p-4 py-2">Runs</th>
                    <th className="p-4 py-2">HS</th>
                    <th className="p-4 py-2">Avg</th>
                    <th className="p-4 py-2">BF</th>
                    <th className="p-4 py-2">SR</th>
                    <th className="p-4 py-2">100</th>
                    <th className="p-4 py-2">50</th>
                    <th className="p-4 py-2">4s</th>
                    <th className="p-4 py-2">6s</th>
                </tr>
            );
        } else {
            return (
                <tr className="text-center header-color">
                    <th className="px-4 py-2">POS</th>
                    <th className="p-4 py-2">Player</th>
                    <th className="p-4 py-2">Mat</th>
                    <th className="p-4 py-2">Inns</th>
                    <th className="p-4 py-2">Wkts</th>
                    <th className="p-4 py-2">Econ</th>
                    <th className="p-4 py-2">Avg</th>
                    <th className="p-4 py-2">Best</th>
                </tr>
            );
        }
    };

    const renderTableRow = (player, index) => {
        if (selectedStat === "MOST RUNS") {
            return (
                <tr key={player.id} className="row-style text-center">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={dummy_player} style={{ width: '50px' }} />
                            </div>
                            <div style={{ paddingLeft: '10px', textAlign: 'start' }}>
                                <div className="font-medium">{player.name}</div>
                                <div className="text-sm text-gray-500">{player.team}</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-2">{player.matches}</td>
                    <td className="px-4 py-2">{player.innings}</td>
                    <td className="px-4 py-2">{player.notOut}</td>
                    <td className="px-4 py-2">{player.runs}</td>
                    <td className="px-4 py-2">{player.highScore}</td>
                    <td className="px-4 py-2">{player.average}</td>
                    <td className="px-4 py-2">{player.ballsFaced}</td>
                    <td className="px-4 py-2">{player.strikeRate}</td>
                    <td className="px-4 py-2">{player.hundreds}</td>
                    <td className="px-4 py-2">{player.fifties}</td>
                    <td className="px-4 py-2">{player.fours}</td>
                    <td className="px-4 py-2">{player.sixes}</td>
                </tr>
            );
        } else {
            return (
                <tr key={player.id} className="row-style text-center">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={dummy_player} style={{ width: '50px' }} />
                            </div>
                            <div style={{ paddingLeft: '10px', textAlign: 'start' }}>
                                <div className="font-medium">{player.name}</div>
                                <div className="text-sm text-gray-500">{player.team}</div>
                            </div>
                        </div>
                    </td>
                    <td className="p-4">{player.matches}</td>
                    <td className="p-4">{player.bowlingInnings}</td>
                    <td className="p-4">{player.wickets}</td>
                    <td className="p-4">{player.economy}</td>
                    <td className="p-4">{player.bowlingAverage}</td>
                    <td className="p-4">{player.bestBowling}</td>
                </tr>
            );
        }
    };


    return (
        <div className="flex flex-col h-full">
            <Navbar version={3} />
            <div className="bg">
                {/* <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        background: "#eafaf1",
                        padding: "80px 20px 0px 20px",
                        backgroundImage: `url(${bgtop})`,
                        backgroundSize: "cover",
                        backgroundPosition: 'center',
                    }}
                >
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            gradient={card.gradient}
                            logo={card.logo}
                            playerName={card.playerName}
                            runs={card.runs}
                        />
                    ))}
                </div> */}
                <img src={Players} style={{ width: '100%', height: '300px' }} />
                <div className="max-w-6xl mx-auto space-y-6 mt-6">

                    <div className="w-3/4 mx-auto">
                        <div className="flex gap-4 mb-4">
                            <Dropdown
                                label={selectedYear}
                                options={["BPL 2024", "BPL 2023"]}
                                onSelect={setSelectedYear}
                                isOpen={yearOpen}
                                setIsOpen={setYearOpen}
                            />
                            <Dropdown
                                label={selectedStat}
                                options={["MOST RUNS", "MOST WICKETS"]}
                                onSelect={setSelectedStat}
                                isOpen={statsOpen}
                                setIsOpen={setStatsOpen}
                            />
                            <Dropdown
                                label={selectedTeam}
                                options={["ALL TEAMS", "CSG", "MTB"]}
                                onSelect={setSelectedTeam}
                                isOpen={teamsOpen}
                                setIsOpen={setTeamsOpen}
                            />
                            <div style={{ width: '24%' }}>
                                <input
                                    type="text"
                                    placeholder="Search By Player Name"
                                    className="px-4 py-2 rounded placeholder:text-gray-900"
                                    style={{ width: '100%' }}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="bg-white overflow-x-auto min-w-[800px]">
                            <table className="w-full">
                                <thead>
                                    {renderTableHeaders()}
                                </thead>
                                <tbody>
                                    {displayedPlayers.map((player, index) => renderTableRow(player, index))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-center mt-8 mb-8">
                            <button
                                className="view-all-btn text-black px-8 py-2 rounded"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? 'Show Less' : 'View All'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <TeamsPreview />
            <NewsPreview />
            <Footer />
        </div>
    );
};

export default CricketStats;