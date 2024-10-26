import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const ChartsSection = ({ data }) => {
    return (
        <>
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
        </>
    );
};

export default ChartsSection;
