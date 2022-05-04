import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Login/helper";

const Admin = ({ children }) => {
  return isLoggedIn() && isLoggedIn().admin ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export default Admin;
