import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        {/* All routes that are children of this will be protected */}
        {/* If you try to go to /dashboard without being logged, you will be redirected to /login */}
        {/* By changing isAuthenticated to true, you can navigate to dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* More protected routes can be added here */}
      </Route>
    </Routes>
  );
}
