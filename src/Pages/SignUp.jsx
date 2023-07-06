import { useContext, useState } from "react";
import Social from "../components/User/Social";
import { AuthProvider } from "../context/userContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { createUser } = useContext(AuthProvider);
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter email.";
          }
          if (!value(validRegex)) {
            stateObj[name] = "Please enter a valid email";
          }

          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const confirmPassword = form.confirmPassword.value;

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
            {/* user email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={onInputChange}
                placeholder="email"
                className="input input-bordered"
              />
              {error.email && <span className="err">{error.email}</span>}
            </div>
            {/* user password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                value={input.password}
                onChange={onInputChange}
                placeholder="password"
                className="input input-bordered"
              />
              {error.password && <span className="err">{error.password}</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* confirm password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={onInputChange}
                placeholder="confirm password"
                className="input input-bordered"
              />
              {error.confirmPassword && (
                <span className="err">{error.confirmPassword}</span>
              )}
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
