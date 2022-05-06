import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Login/helper";

export default function LoggedIn({ children }) {
  return isLoggedIn() && isLoggedIn().student ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
}
