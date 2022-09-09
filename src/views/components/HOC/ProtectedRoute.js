import { AuthContext } from "context/auth/AuthContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authContextData = useContext(AuthContext);
  const { isLogin } = authContextData;
  if (!isLogin) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

export default ProtectedRoute;
