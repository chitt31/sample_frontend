import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FollowersChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="date" stroke="#6b7280" />
      <YAxis stroke="#6b7280" />
      <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
      <Bar dataKey="followers" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

export default FollowersChart;