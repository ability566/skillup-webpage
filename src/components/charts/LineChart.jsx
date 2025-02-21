import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const LineChart = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>; // Prevent crash
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-semibold text-center text-blue-700 mb-3">Enrollment Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ReLineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="enrollments" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
