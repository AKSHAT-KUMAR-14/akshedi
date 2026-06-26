import Badge from "../common/Badge";

const exceptions = [
  {
    employee: "John Smith",
    issue: "Missing Dependent DOB",
    priority: "High",
  },
  {
    employee: "Emily Davis",
    issue: "Invalid Coverage",
    priority: "Medium",
  },
  {
    employee: "Robert Brown",
    issue: "Carrier Mismatch",
    priority: "Low",
  },
];

export default function RecentExceptionsTable() {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="py-3 text-left">Employee</th>
          <th className="text-left">Issue</th>
          <th className="text-left">Priority</th>
        </tr>
      </thead>

      <tbody>
        {exceptions.map((item) => (
          <tr key={item.employee} className="border-b">
            <td className="py-3">{item.employee}</td>
            <td>{item.issue}</td>
            <td>
            <Badge
                text={item.priority}
                color={
                item.priority === "High"
                    ? "red"
                    : item.priority === "Medium"
                    ? "yellow"
                    : "green"
                }
            />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}