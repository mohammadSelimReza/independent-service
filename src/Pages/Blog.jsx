import { useContext } from "react";
import { AuthProvider } from "../context/userContext";

const Blog = () => {
  const user = useContext(AuthProvider);
  return (
    <div>
      <div> {user.user.email} </div>
    </div>
  );
};

export default Blog;
