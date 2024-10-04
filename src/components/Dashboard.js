import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import OverviewChart from './OverviewChart';
import FollowersChart from './FollowersChart';
import EngagementChart from './EngagementChart';
import PlatformsChart from './PlatformsChart';
import { generateData, generatePlatformData } from '../utils/dataGenerators';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('30');
  const [data, setData] = useState([]);
  const [platformData, setPlatformData] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setData(generateData(parseInt(timeRange)));
    setPlatformData(generatePlatformData());
  }, [timeRange]);

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">Social Media Analytics Dashboard</h1>
      
      <div className="mb-8 flex justify-end">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="w-48 bg-white shadow-md p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="180">Last 180 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <StatCard title="Total Followers" value={data[data.length - 1]?.followers || 0} change={2.5} icon="users" />
        <StatCard title="Total Likes" value={data[data.length - 1]?.likes || 0} change={1.8} icon="heart" />
        <StatCard title="Total Shares" value={data[data.length - 1]?.shares || 0} change={-0.5} icon="share" />
      </div>

      <div className="bg-white shadow-md rounded-lg mb-8">
        <div className="flex">
          {['overview', 'followers', 'engagement', 'platforms'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'bg-indigo-100 text-indigo-800 border-b-2 border-indigo-500'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Overview</h2>
            <OverviewChart data={data} />
          </div>
        )}
        {activeTab === 'followers' && (
          <div>
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Followers Growth</h2>
            <FollowersChart data={data} />
          </div>
        )}
        {activeTab === 'engagement' && (
          <div>
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Engagement Metrics</h2>
            <EngagementChart data={data} />
          </div>
        )}
        {activeTab === 'platforms' && (
          <div>
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Platform Distribution</h2>
            <PlatformsChart data={platformData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;