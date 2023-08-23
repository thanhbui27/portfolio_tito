import { motion } from "framer-motion";
import { DataOurProject, settings } from "../../constants";
import ItemLastProject from "./ItemLastProject";
import Sliders from "@/components/common/Sliders/Sliders";
import "../../styles.css";
import { slideIn } from "@/utils/motion";

const LastProject = () => {
  return (
    <motion.div
      variants={slideIn("right", "spring", 0.5, 2)}
      className="last-project w-full h-full relative"
    >
      <Sliders settings={settings}>
        {DataOurProject.map((item) => (
          <ItemLastProject key={item.id} item={item} />
        ))}
      </Sliders>
    </motion.div>
  );
};

export default LastProject;
