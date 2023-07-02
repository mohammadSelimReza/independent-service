import { useContext } from "react";
import Social from "../components/User/Social";
import { AuthProvider } from "../context/userContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { createUser } = useContext(AuthProvider);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
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
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
              <span>
                Already have an account.{" "}
                <Link className="link link-secondary" to={"/login"}>
                  Login?
                </Link>{" "}
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
