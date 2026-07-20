import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const AuthProtected = () => {
  let { logedUser } = useContext(Auth);

  if (logedUser) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default AuthProtected;