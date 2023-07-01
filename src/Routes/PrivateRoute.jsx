import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/userContext";
import PropTypes from "prop-types";
function PrivateRoute({ children }) {
  const { user } = useContext(AuthProvider);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
