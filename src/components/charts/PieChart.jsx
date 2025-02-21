import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PieChart = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>; // Prevent crash
  }

  const COLORS = ["#4CAF50", "#FFD700", "#F44336"]; // Green, Yellow, Red

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <h3 className="text-lg font-semibold text-blue-700 text-center mb-3">Course Completion Status</h3>
      <ResponsiveContainer width={300} height={300}>
        <RePieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
