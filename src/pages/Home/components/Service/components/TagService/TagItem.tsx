import { motion } from "framer-motion";
import { TDataTag } from "../constants";
import { fadeIn } from "@/utils/motion";

type TPropsTagITem = {
  item: TDataTag;
  classNames?: string;
};

const TagItem: React.FC<TPropsTagITem> = ({ item, classNames }) => {
  const { title, id } = item;
  return (
    <motion.div
      variants={fadeIn("down", "spring", id * 0.3, 1)}
      className={`rounded-3xl bg-greenLight-100 md:px-8 md:py-2 px-6 py-1 text-sm font-semibold cursor-pointer whitespace-nowrap ${classNames}`}
    >
      {title}
    </motion.div>
  );
};

export default TagItem;
