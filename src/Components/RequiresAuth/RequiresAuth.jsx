import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
function RequiresAuth() {
  const { stateAuth } = useAuth();
  const { isAuth } = stateAuth;

  const location = useLocation();

  useEffect(() => {
    !isAuth && toast.warning("Login Required");
  }, []);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { RequiresAuth };
