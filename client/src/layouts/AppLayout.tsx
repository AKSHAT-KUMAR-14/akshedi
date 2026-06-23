import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-slate-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">
          AkshEDI
        </h2>

        <ul className="space-y-3">
          <li>Dashboard</li>
          <li>Employees</li>
          <li>Enrollments</li>
          <li>Carrier Feeds</li>
          <li>Exceptions</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="flex-1 bg-slate-100 p-8">
        {children}
      </main>
    </div>
  );
}