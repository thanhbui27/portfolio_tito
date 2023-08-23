import { motion } from "framer-motion";
import { DataCardServiec } from "../constants";
import CardServiceItem from "./CardServiceItem";
import { staggerContainer } from "@/utils/motion";

const ListCartService = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 flex-wrap"
    >
      {DataCardServiec.map((item) => (
        <CardServiceItem item={item} key={item.id} />
      ))}
    </motion.div>
  );
};

export default ListCartService;
