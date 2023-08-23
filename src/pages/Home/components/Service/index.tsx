import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import ListCartService from "./components/CardService";
import TagList from "./components/TagService";
import SectionWrapper from "@/hoc/SectionWrapper";

const Service = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="mt-24"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 2)}
          className="flex items-center justify-start mt-8"
        >
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">Service</h4>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 2)}
          className="flex items-center justify-start mb-8"
        >
          <h4 className=" !leading-normal font-semibold lg:text-5xl text-3xl font-Quicksand text-center">
            Our Best Services For <br /> Our Customer
          </h4>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.6, 2)}
          className="text-center font-medium md:w-1/2 w-full"
        >
          we are all things solve easilly. We are also designing for web,
          product, mobile... You are visist our website you can see all things
          in our creative works
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <TagList />
        <ListCartService />
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Service);
