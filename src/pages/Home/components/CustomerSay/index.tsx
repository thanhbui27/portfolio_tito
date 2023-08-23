import { motion } from "framer-motion";
import ListCustomerSay from "./components/CustomerSay";
import { textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

const CustomerSay = () => {
  return (
    <div className="relative mt-20">
      <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 xl:top-[20%]  flex flex-col items-center justify-center">
        <motion.div
          variants={textVariant(1)}
          className="flex items-center justify-center "
        >
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">Customer Say</h4>
        </motion.div>
        <motion.div
          variants={textVariant(1.5)}
          className="flex items-center justify-center my-8"
        >
          <h4 className="lg:text-5xl text-3xl font-Quicksand font-bold text-center">
            What our customers <br /> have to say
          </h4>
        </motion.div>
      </div>
      <div className="carousel relative lg:mt-20">
        <ListCustomerSay />
      </div>
    </div>
  );
};

export default SectionWrapper(CustomerSay);
