import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { TDataCard } from "../constants";
import { fadeIn } from "@/utils/motion";

type TPropsCard = {
  item: TDataCard;
};

const CardServiceItem: React.FC<TPropsCard> = ({ item }) => {
  const { icon, title, tag: tags, id } = item;
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "tween", 0.6 * id, 2)}
        className="p-7 w-full shadow-md rounded-md"
      >
        <div className="flex flex-col items-start justify-center text-grayCustom">
          <img src={icon} alt={title} />
          <h4 className="text-xl font-bold">{title}</h4>
          <div className="flex items-center justify-start w-full h-full gap-2  my-5 flex-wrap">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="rounded-3xl bg-greenLight-100 md:px-8 md:py-2 px-6 py-1 text-sm font-semibold cursor-pointer whitespace-nowrap"
              >
                {tag.title}
              </div>
            ))}
          </div>
          <p className="mb-5 font-medium text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, and scrambled it to make a type specimen book.
            It has survived not only five ....
          </p>
          <button
            type="button"
            className="lg:text-lg font-bold text-red-900 underline"
          >
            View More
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default CardServiceItem;
