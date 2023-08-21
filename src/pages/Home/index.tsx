import AboutUs from "./components/AboutUs";
import BuidProduct from "./components/BuildProduct";
import CustomerQuestion from "./components/CustomerQuestion";
import CustomerSay from "./components/CustomerSay";
import OurProject from "./components/OurProject";
import Service from "./components/Service";
import SliderBar from "./components/Slider";
import Working from "./components/Working";

const Home = () => {
  return (
    <div>
      <SliderBar />
      <Working />
      <AboutUs />
      <Service />
      <OurProject />
      <CustomerSay />
      <CustomerQuestion />
      <BuidProduct />
    </div>
  );
};

export default Home;
