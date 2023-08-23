import { motion } from "framer-motion";
import { TDataCircle } from "../../constants";
import { fadeIn } from "@/utils/motion";

type TPropsCircleAction = {
  item: TDataCircle;
};

const CircleAction: React.FC<TPropsCircleAction> = ({ item }) => {
  const { style, title, meanTitle, clasNames, backgroundCircle, id } = item;
  const isAniRight = id === 2 || id === 3;
  return (
    <motion.div
      variants={fadeIn(
        isAniRight ? "right" : "left",
        isAniRight ? "spring" : "tween",
        0.2,
        2
      )}
      className={`flex flex-col items-center md:absolute ${clasNames}`}
      style={style}
    >
      <div
        className={`rounded-full border focus:outline-none  md:w-20 md:h-20 w-14 h-14 text-center flex items-center justify-center font-bold md:text-2xl text-xl text-red-900 md:mr-0 whitespace-nowrap `}
        style={{ backgroundColor: backgroundCircle }}
      >
        {title}
      </div>
      <h5 className="font-semibold text-sm md:text-md whitespace-nowrap">
        {meanTitle}
      </h5>
    </motion.div>
  );
};

export default CircleAction;
