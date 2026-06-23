import type { ReactNode } from "react";
import { Link } from "react-router-dom";

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
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li><Link to="/enrollments">Enrollments</Link></li>
            <li><Link to="/carrier-feeds">Carrier Feeds</Link></li>
            <li><Link to="/exceptions">Exceptions</Link></li>
            <li><Link to="/settings">Settings</Link></li>
        </ul>
      </aside>

      <main className="flex-1 bg-slate-100 p-8">
        {children}
      </main>
    </div>
  );
}