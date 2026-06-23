import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import EmployeesPage from "../pages/Employees/EmployeesPage";
import EnrollmentsPage from "../pages/Enrollments/EnrollmentsPage";
import CarrierFeedsPage from "../pages/CarrierFeeds/CarrierFeedsPage";
import ExceptionsPage from "../pages/Exceptions/ExceptionsPage";
import SettingsPage from "../pages/Settings/SettingsPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/enrollments" element={<EnrollmentsPage />} />
          <Route path="/carrier-feeds" element={<CarrierFeedsPage />} />
          <Route path="/exceptions" element={<ExceptionsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}