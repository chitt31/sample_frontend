import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OverviewChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="date" stroke="#6b7280" />
      <YAxis stroke="#6b7280" />
      <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
      <Legend />
      <Line type="monotone" dataKey="followers" stroke="#8b5cf6" strokeWidth={2} dot={false} />
      <Line type="monotone" dataKey="likes" stroke="#10b981" strokeWidth={2} dot={false} />
      <Line type="monotone" dataKey="shares" stroke="#f59e0b" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

export default OverviewChart;
