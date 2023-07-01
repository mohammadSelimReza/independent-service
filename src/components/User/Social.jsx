import { useContext } from "react";
import { AuthProvider } from "../../context/userContext";

const Social = () => {
  const { socialLogin } = useContext(AuthProvider);
  const handleGoogle = () => {
    socialLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <main>
      <div className="flex flex-col">
        <button onClick={handleGoogle} className="btn btn-neutral px-4 my-1 ">
          Sing in With Google
        </button>
        <button className="btn btn-neutral px-4 my-1 ">
          Sign in With Github
        </button>
        <button className="btn btn-neutral px-4 my-1 ">
          Sign in With Facebook
        </button>
      </div>
    </main>
  );
};

export default Social;
