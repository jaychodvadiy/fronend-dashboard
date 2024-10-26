import React from 'react';
import { HomeIcon, ChartBarIcon, DocumentReportIcon, CogIcon, MenuIcon } from '@heroicons/react/outline';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-20'} bg-gray-900 text-white flex flex-col p-4`}>
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
    );
};

export default Sidebar;
