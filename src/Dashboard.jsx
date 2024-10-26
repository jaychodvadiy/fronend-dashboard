import React, { useState, useEffect } from 'react';
import evdata from "./data/evData.json";
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {
    HomeIcon,
    ChartBarIcon,
    DocumentReportIcon,
    CogIcon,
    MenuIcon,
} from '@heroicons/react/outline';
import 'tailwindcss/tailwind.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData(evdata);
        }, 1000);
    }, []);

    if (!data) return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            <p className="ml-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
    );

    return (
        <div className="h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">EV Dashboard</h1>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-20'} bg-gray-900 text-white flex flex-col p-4`}>
                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`mb-4 p-2 text-gray-400 hover:text-white transition flex ${isSidebarOpen ? "justify-end" : "justify-center"}`}
                    >
                        <MenuIcon className="h-6 w-6" />
                    </button>

                    <ul className="space-y-2 flex-grow">
                        <li className="flex items-center hover:bg-gray-800 hover:text-gray-200 rounded-lg p-3 transition-all">
                            <HomeIcon className={`h-6 w-6 ${isSidebarOpen ? '' : 'mx-auto'}`} />
                            {isSidebarOpen && <a href="#" className="text-lg ml-2">Dashboard</a>}
                        </li>
                        <li className="flex items-center hover:bg-gray-800 hover:text-gray-200 rounded-lg p-3 transition-all">
                            <ChartBarIcon className={`h-6 w-6 ${isSidebarOpen ? '' : 'mx-auto'}`} />
                            {isSidebarOpen && <a href="#" className="text-lg ml-2">Analytics</a>}
                        </li>
                        <li className="flex items-center hover:bg-gray-800 hover:text-gray-200 rounded-lg p-3 transition-all">
                            <DocumentReportIcon className={`h-6 w-6 ${isSidebarOpen ? '' : 'mx-auto'}`} />
                            {isSidebarOpen && <a href="#" className="text-lg ml-2">Reports</a>}
                        </li>
                        <li className="flex items-center hover:bg-gray-800 hover:text-gray-200 rounded-lg p-3 transition-all">
                            <CogIcon className={`h-6 w-6 ${isSidebarOpen ? '' : 'mx-auto'}`} />
                            {isSidebarOpen && <a href="#" className="text-lg ml-2">Settings</a>}
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                    <header className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-semibold text-gray-800">Dashboard</h1>
                    </header>

                    {/* Four Data Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md">
                            <h2 className="text-lg font-medium">Total Vehicles</h2>
                            <p className="text-2xl font-bold">{data.totalVehicles}K</p>
                        </div>
                        <div className="p-6 bg-green-500 text-white rounded-lg shadow-md">
                            <h2 className="text-lg font-medium">Total Revenue</h2>
                            <p className="text-2xl font-bold">${(data.totalRevenue / 1000).toLocaleString()}K</p>
                        </div>
                        <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-md">
                            <h2 className="text-lg font-medium">Total Charging Stations</h2>
                            <p className="text-2xl font-bold">{data.totalChargingStations}</p>
                        </div>
                        <div className="p-6 bg-red-500 text-white rounded-lg shadow-md">
                            <h2 className="text-lg font-medium">Total Users</h2>
                            <p className="text-2xl font-bold">{data.totalUsers}</p>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-medium mb-4">Weekly Revenue & Costs</h2>
                        <Bar data={data.profitData} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-medium mb-4">Revenue & Charging Sessions</h2>
                            <Line data={data.revenueData} />
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-medium mb-4">Vehicle Analytics</h2>
                            <Pie data={data.visitorAnalytics} />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-medium mb-4">Top Channels</h2>
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="text-left py-2 px-4">Source</th>
                                    <th className="text-left py-2 px-4">Visitors</th>
                                    <th className="text-left py-2 px-4">Revenue</th>
                                    <th className="text-left py-2 px-4">Sales</th>
                                    <th className="text-left py-2 px-4">Conversion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.topChannels.map((channel, index) => (
                                    <tr key={index} className="border-t hover:bg-gray-100">
                                        <td className="py-2 px-4">{channel.source}</td>
                                        <td className="py-2 px-4">{channel.visitors}</td>
                                        <td className="py-2 px-4">${channel.revenues.toLocaleString()}</td>
                                        <td className="py-2 px-4">{channel.sales}</td>
                                        <td className="py-2 px-4">{channel.conversion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
