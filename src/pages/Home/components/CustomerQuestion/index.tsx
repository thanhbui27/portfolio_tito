import ListAccordionQuestion from "./components/AccordionQuestion";

const CustomerQuestion = () => {
  return (
    <div className="relative mt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center ">
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">Question </h4>
        </div>
        <div className="flex items-center justify-center my-8">
          <h4 className="lg:text-5xl text-3xl font-Quicksand font-bold text-center">
            Customer Asker
            <br />
            Questions
          </h4>
        </div>
      </div>
      <div className="relative lg:mt-20">
        <ListAccordionQuestion />
      </div>
    </div>
  );
};

export default CustomerQuestion;
