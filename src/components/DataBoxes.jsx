import React from 'react';

const DataBoxes = ({ data }) => {
    return (
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
    );
};

export default DataBoxes;
