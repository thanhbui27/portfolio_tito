import { Outlet } from "react-router-dom";
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";

const RootLayout = () => {
  return (
    <div className="bg-bg-pattern w-full h-full bg-scroll bg-no-repeat bg-cover font-Quicksand">
      <div className="max-w-screen-2xl my-0 mx-auto pt-4">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
