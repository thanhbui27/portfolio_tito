import { motion } from "framer-motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import LastProject from "./components/LastProject";
import { fadeIn } from "@/utils/motion";

const OurProject = () => {
  return (
    <div className="mt-24">
      <motion.div
        variants={fadeIn("down", "spring", 0.3, 2)}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-start mt-8">
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">Project</h4>
        </div>
        <div className="flex items-center justify-start mb-8">
          <h4 className=" !leading-normal font-semibold lg:text-5xl text-3xl font-Quicksand text-center">
            Our Last <br /> <b className="font-bold text-red-900">Projects</b>
          </h4>
        </div>
      </motion.div>
      <div className="w-full overflow-hidden">
        <LastProject />
      </div>
    </div>
  );
};

export default SectionWrapper(OurProject);
