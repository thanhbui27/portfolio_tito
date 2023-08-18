import ListCustomerSay from "./components/CustomerSay";

const CustomerSay = () => {
  return (
    <div className="relative mt-20">
      <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 xl:top-[20%]  flex flex-col items-center justify-center">
        <div className="flex items-center justify-center ">
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">Customer Say</h4>
        </div>
        <div className="flex items-center justify-center my-8">
          <h4 className="lg:text-5xl text-3xl font-Quicksand font-bold text-center">
            What our customers <br /> have to say
          </h4>
        </div>
      </div>
      <div className="carousel relative lg:mt-20">
        <ListCustomerSay />
      </div>
    </div>
  );
};

export default CustomerSay;
