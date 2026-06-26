import Badge from "../common/Badge";

const feeds = [
  {
    carrier: "Aetna",
    status: "Success",
    records: 428,
  },
  {
    carrier: "Delta Dental",
    status: "Success",
    records: 193,
  },
  {
    carrier: "MetLife",
    status: "Failed",
    records: 75,
  },
];

export default function RecentFeedRunsTable() {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="py-3 text-left">Carrier</th>
          <th className="text-left">Status</th>
          <th className="text-left">Records</th>
        </tr>
      </thead>

      <tbody>
        {feeds.map((feed) => (
          <tr key={feed.carrier} className="border-b">
            <td className="py-3">{feed.carrier}</td>
            <td>
            <Badge
                text={feed.status}
                color={
                feed.status === "Success"
                    ? "green"
                    : "red"
                }
            />
            </td>
            <td>{feed.records}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}