import React from 'react';

const TopChannels = ({ data }) => {
    return (
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
                    {data.map((channel, index) => (
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
    );
};

export default TopChannels;
