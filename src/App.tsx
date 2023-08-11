import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
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
      </div>
    </div>
  );
};

export default App;
