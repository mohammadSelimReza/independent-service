import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../context/userContext";
const Header = () => {
  const { user, logOut } = useContext(AuthProvider);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <div className="flex">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              <div>
                {user?.uid ? (
                  <button className="btn btn-neutral" onClick={handleLogout}>
                    Sign Out
                  </button>
                ) : (
                  <>
                    <Link className="mx-2" to="/signup">
                      <button className="btn btn-outline">Sign Up</button>
                    </Link>
                    <Link className="mx-2" to="/login">
                      <button to="/login" className="btn btn-outline">
                        Login
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Dora Gym Trainee</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="visible max-[640px]:hidden">
            {user?.uid ? (
              <>
                <h2>{user.displayName}</h2>
                <button className="btn btn-neutral" onClick={handleLogout}>
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link className="mx-2" to="/signup">
                  <button className="btn btn-outline">Sign Up</button>
                </Link>
                <Link className="mx-2" to="/login">
                  <button to="/login" className="btn btn-outline">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
