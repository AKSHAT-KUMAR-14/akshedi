import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", enrolled: 180 },
  { month: "Feb", enrolled: 260 },
  { month: "Mar", enrolled: 390 },
  { month: "Apr", enrolled: 540 },
  { month: "May", enrolled: 720 },
  { month: "Jun", enrolled: 910 },
];

export default function EnrollmentChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="enrolled"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}