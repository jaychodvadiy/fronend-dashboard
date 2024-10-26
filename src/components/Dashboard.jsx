import React, { useState, useEffect } from 'react';
import evdata from "../data/evData.json";
import Header from './Header';
import Sidebar from './Sidebar';
import DataBoxes from './DataBoxes';
import ChartsSection from './ChartsSection';
import TopChannels from './TopChannels';

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
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                    <header className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-semibold text-gray-800">Dashboard</h1>
                    </header>
                    <DataBoxes data={data} />
                    <ChartsSection data={data} />
                    <TopChannels data={data.topChannels} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
