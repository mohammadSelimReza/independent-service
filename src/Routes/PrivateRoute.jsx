import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/userContext";
import PropTypes from "prop-types";
function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthProvider);
  if(loading){
    return <div className="flex justify-center align-middle">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
