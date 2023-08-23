import { memo } from "react";
import { motion } from "framer-motion";
import { TDataCustomerSay } from "../../constants";
import { fadeIn } from "@/utils/motion";

type TItemCustomerSay = {
  item: TDataCustomerSay;
};

const ItemCustomerSay: React.FC<TItemCustomerSay> = ({ item }) => {
  return (
    <div className="flex items-end justify-start md:gap-10 gap-3 ">
      <motion.div variants={fadeIn("down", "spring", 0.3, 1)} className="w-1/4">
        <img
          src={item.image}
          alt=""
          className="md:max-w-[350px] md:max-h-[450px] sm:w-full sm:h-full h-[148px] object-cover"
        />
      </motion.div>
      <motion.div variants={fadeIn("left", "spring", 0.5, 1)} className="w-2/3">
        <p className="md:text-lg font-medium xl:line-clamp-none line-clamp-3 text-base">
          "{item.content}"
        </p>
        <h3 className="md:text-3xl text-xl md:my-4 my-2 font-bold">
          {item.name}
        </h3>
        <span className="md:text-base text-sm font-semibold text-grayCustom">
          {item.address}
        </span>
      </motion.div>
    </div>
  );
};

export default memo(ItemCustomerSay);
