import React from 'react';
import { Users, Heart, Share } from 'lucide-react';

const icons = {
  users: Users,
  heart: Heart,
  share: Share,
};

const StatCard = ({ title, value, change, icon }) => {
  const Icon = icons[icon];
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <Icon className="h-5 w-5 text-indigo-600" />
      </div>
      <div className="text-2xl font-bold text-indigo-800">{value.toLocaleString()}</div>
      <p className={`text-xs ${change >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
        {change >= 0 ? '↑' : '↓'}
        <span className="ml-1">{Math.abs(change)}%</span>
      </p>
    </div>
  );
};

export default StatCard;