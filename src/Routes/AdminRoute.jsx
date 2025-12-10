import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useRole();
  const location = useLocation();

  // Loading state
  if (loading || isRoleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
      </div>
    );
  }

  // Not logged in → Go to login
  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname} replace />;
  }

  // Not admin → Go to dashboard
  if (role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  // Admin → Show page
  return children;
};

export default AdminRoute;