import Card from "../common/Card";

type KPICardProps = {
  title: string;
  value: string;
};

export default function KPICard({
  title,
  value,
}: KPICardProps) {
  return (
    <Card>
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>
    </Card>
  );
}