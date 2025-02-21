import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="course" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="activeStudents" fill="#007bff" name="Active Students" />
        <Bar dataKey="avgTimeSpent" fill="#ffcc00" name="Avg Time Spent (hrs)" />
        <Bar dataKey="completionRate" fill="#28a745" name="Completion Rate (%)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
