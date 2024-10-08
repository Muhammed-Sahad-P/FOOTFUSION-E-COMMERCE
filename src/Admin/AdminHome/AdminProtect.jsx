import { Navigate } from "react-router-dom";

const AdminProtect = ({ children }) => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  if (!isAdmin) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default AdminProtect;
