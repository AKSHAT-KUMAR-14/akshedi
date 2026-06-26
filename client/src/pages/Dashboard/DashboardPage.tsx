import KPICard from "../../components/dashboard/KPICard";
import SectionCard from "../../components/common/SectionCard";
import EnrollmentChart from "../../components/charts/EnrollmentChart";
import RecentExceptionsTable from "../../components/tables/RecentExceptionsTable";
import RecentFeedRunsTable from "../../components/tables/RecentFeedRunsTable";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <KPICard title="Active Employees" value="1,245" />
        <KPICard title="Pending Exceptions" value="17" />
        <KPICard title="Feed Success Rate" value="98.7%" />
        <KPICard title="Carrier Connections" value="12" />
      </div>

      <SectionCard title="Enrollment Progress">
        <EnrollmentChart />
      </SectionCard>

      <SectionCard title="Recent Exceptions">
        <RecentExceptionsTable />
      </SectionCard>

      <SectionCard title="Recent Feed Runs">
        <RecentFeedRunsTable />
      </SectionCard>

    </div>
  );
}