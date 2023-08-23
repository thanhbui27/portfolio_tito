import { motion } from "framer-motion";
import { DataWork } from "../constants";
import { fadeIn } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

const WorkingBest = () => {
  return (
    <motion.div className="workingBest flex flex-wrap justify-center xl:flex xl:items-center xl:justify-between ">
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <motion.h4 className="lg:text-2xl text-lg font-medium">
          Working with the best
        </motion.h4>
      </motion.div>
      <div className="flex items-center justify-start ">
        {DataWork.map((item, index) => (
          <motion.img
            key={item.id}
            src={item.image}
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="border-r-2 w-1/4"
            alt={item.alt}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(WorkingBest);
