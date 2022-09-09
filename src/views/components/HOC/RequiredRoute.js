import useAuth from "hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const { profile } = useAuth();

  return profile?.role?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : profile?.profile ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredRoute;
