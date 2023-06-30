import Header from "../components/nav/Header";
import Footer from "../components/footer/Footer";
// import Home from "./Home";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
