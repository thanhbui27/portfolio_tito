import { motion } from "framer-motion";
import ListAccordionQuestion from "./components/AccordionQuestion";
import { fadeIn } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

const CustomerQuestion = () => {
  return (
    <div className="relative mt-20">
      <motion.div
        variants={fadeIn("down", "spring", 0.5, 2)}
        className="flex flex-col items-center justify-center"
      >
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
      </motion.div>
      <div className="relative lg:mt-20">
        <ListAccordionQuestion />
      </div>
    </div>
  );
};

export default SectionWrapper(CustomerQuestion);
