import AboutUs from "./components/AboutUs";
import BuidProduct from "./components/BuildProduct";
import CustomerQuestion from "./components/CustomerQuestion";
import CustomerSay from "./components/CustomerSay";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurProject from "./components/OurProject";
import Service from "./components/Service";
import Working from "./components/Working";

const App = () => {
  return (
    <div className="bg-bg-pattern w-full h-full bg-scroll bg-no-repeat bg-cover font-Quicksand">
      <div className="max-w-screen-2xl my-0 mx-auto pt-4">
        <Header />
        <Working />
        <AboutUs />
        <Service />
        <OurProject />
        <CustomerSay />
        <CustomerQuestion />
        <BuidProduct />
        <Footer />
      </div>
    </div>
  );
};

export default App;
