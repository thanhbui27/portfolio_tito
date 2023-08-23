import { motion } from "framer-motion";
import { DataSlideWorking, settings } from "../constants";
import SectionWrapper from "@/hoc/SectionWrapper";
import ItemWorking from "./ItemWorking";
import Sliders from "@/components/common/Sliders/Sliders";
import { fadeIn } from "@/utils/motion";
import "../styles.css";

const WorkingProcess = () => {
  return (
    <motion.div>
      <motion.div className="mt-20">
        <div className="flex items-center justify-start">
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">Working process</h4>
        </div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className="my-8">
          <h4 className="lg:text-6xl text-4xl font-Quicksand font-bold">
            How we work
          </h4>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.3, 1)}
          className="w-2/3 lg:text-base text-sm font-medium mt-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          laoreet mi. Ut aliquam porttitor tortor, ac ornare erat. Aliquam
          suscipit turpis eget sem rutrum congue. Cras pulvinar leo cursus nulla
          volutpat finibus.
        </motion.p>
      </motion.div>
      <div className="carousel relative mt-20">
        <Sliders settings={settings}>
          {DataSlideWorking.map((item) => (
            <ItemWorking key={item.id} item={item} />
          ))}
        </Sliders>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(WorkingProcess);
