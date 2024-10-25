import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

    useEffect(() => {
        axios.get('/api/data')
            .then(response => setData(response.data))
            .catch(() => {
                setData({
                    totalViews: 3456,
                    totalProfit: 45200,
                    totalProduct: 2450,
                    totalUsers: 3456,
                    revenueData: {
                        labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                        datasets: [
                            {
                                label: 'Total Revenue',
                                data: [20, 30, 25, 35, 40, 50, 45, 55, 60, 70, 75, 80],
                                borderColor: '#4F46E5',
                                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                                fill: true,
                            },
                            {
                                label: 'Total Sales',
                                data: [25, 35, 28, 38, 42, 55, 48, 60, 65, 75, 78, 85],
                                borderColor: '#10B981',
                                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                fill: true,
                            },
                        ],
                    },
                    profitData: {
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        datasets: [
                            {
                                label: 'Sales',
                                data: [60, 70, 45, 80, 50, 75, 90],
                                backgroundColor: '#6366F1',
                            },
                            {
                                label: 'Revenue',
                                data: [50, 65, 35, 75, 40, 70, 85],
                                backgroundColor: '#F59E0B',
                            },
                        ],
                    },
                    visitorAnalytics: {
                        labels: ['Desktop', 'Mobile', 'Tablet', 'Unknown'],
                        datasets: [
                            {
                                data: [65, 45, 34, 12],
                                backgroundColor: ['#6366F1', '#10B981', '#F59E0B', '#EF4444'],
                            },
                        ],
                    },
                    topChannels: [
                        { source: 'Google', visitors: 3500, revenues: 5768, sales: 590, conversion: '4.8%' },
                        { source: 'Twitter', visitors: 2200, revenues: 4635, sales: 467, conversion: '4.3%' },
                        { source: 'Github', visitors: 2100, revenues: 4290, sales: 420, conversion: '3.7%' },
                        { source: 'Vimeo', visitors: 1500, revenues: 3580, sales: 389, conversion: '2.5%' },
                        { source: 'Facebook', visitors: 1200, revenues: 2740, sales: 230, conversion: '1.9%' },
                    ],
                });
            });
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div className="h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">TailAdmin</h1>
                <div className="flex items-center space-x-4">
                    <span className="text-sm">Welcome, Admin</span>
                    <button className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600">Logout</button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <div className="w-1/4 bg-gray-900 text-white p-6">
                    <h2 className="text-2xl font-bold mb-8">Menu</h2>
                    <ul>
                        <li className="mb-4"><a href="#" className="hover:text-gray-400">Dashboard</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-gray-400">Analytics</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-gray-400">Reports</a></li>
                        <li className="mb-4"><a href="#" className="hover:text-gray-400">Settings</a></li>
                    </ul>
                </div>

                <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                    <header className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-semibold text-gray-800">Dashboard</h1>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Item</button>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-lg font-medium">Total Views</h2>
                            <p className="text-2xl font-bold">{data.totalViews}K</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-lg font-medium">Total Profit</h2>
                            <p className="text-2xl font-bold">${data.totalProfit.toLocaleString()}</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-lg font-medium">Total Products</h2>
                            <p className="text-2xl font-bold">{data.totalProduct}</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-lg font-medium">Total Users</h2>
                            <p className="text-2xl font-bold">{data.totalUsers}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-medium mb-4">Revenue & Sales</h2>
                        <Line data={data.revenueData} />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-medium mb-4">Weekly Profit</h2>
                        <Bar data={data.profitData} />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-medium mb-4">Visitor Analytics</h2>
                        <Pie data={data.visitorAnalytics} />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-medium mb-4">Top Channels</h2>
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="text-left py-2 px-4">Source</th>
                                    <th className="text-left py-2 px-4">Visitors</th>
                                    <th className="text-left py-2 px-4">Revenue</th>
                                    <th className="text-left py-2 px-4">Sales</th>
                                    <th className="text-left py-2 px-4">Conversion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.topChannels.map((channel, index) => (
                                    <tr key={index} className="border-t">
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
