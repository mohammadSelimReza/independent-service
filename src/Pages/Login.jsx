/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import Social from "../components/User/Social";
import { AuthProvider } from "../context/userContext";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.init";
import { toast } from "react-hot-toast";

const Login = () => {
  const auth = getAuth(app);
  const { loginUser } = useContext(AuthProvider);
  const [userEmail, setUserEmail] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    setUserEmail(email);
    const password = form.password.value;
    form.reset();
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const passwordReset = () => {
    if (!userEmail) {
      toast.error("Type your email first");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        toast.success("password reset link sent to email.");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex">
      <div className="flex justify-center my-8 w-3/4">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  onClick={passwordReset}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <span>
                New Here?
                <Link className="link link-secondary" to={"/signup"}>
                  Let's create a new account
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="w-1/4 flex justify-center items-center">
        <Social />
      </div>
    </div>
  );
};

export default Login;
