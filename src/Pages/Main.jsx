import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
// import Home from "./Home";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div data-theme="light">
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
