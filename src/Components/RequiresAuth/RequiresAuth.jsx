import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
function RequiresAuth({ children }) {
  const { stateAuth } = useAuth();
  const { isAuth } = stateAuth;

  const location = useLocation();

  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { RequiresAuth };
