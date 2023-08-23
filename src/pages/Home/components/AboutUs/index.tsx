import { motion } from "framer-motion";
import CircleAction from "./components/CircleAction";
import { DataCircle } from "./constants";
import { fadeIn } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import "./styles.css";

const AboutUs = () => {
  return (
    <div className="md:mt-36 relative">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 2)}
          className="flex items-center justify-start mt-8"
        >
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">About Us</h4>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 3)}
          className="flex items-center justify-start mb-8"
        >
          <h4 className=" !leading-normal lg:text-6xl text-4xl font-Quicksand text-center">
            We always give <br />
            <b className="font-bold">your project</b>
            <br /> the best we have
          </h4>
        </motion.div>
        <motion.p
          variants={fadeIn("up", "tween", 0.3, 4)}
          className="text-center font-medium"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, and scrambled it to make a type specimen book. It has
          survived not only five centuries, Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sit tempore iusto at praesentium
          tempora? Accusamus culpa nobis quaerat repellat, voluptas, optio,
          dicta ratione necessitatibus praesentium placeat mollitia aspernatur
          debitis iste.
        </motion.p>
      </div>
      <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex justify-center items-center flex-wrap gap-4 mt-8">
        {DataCircle.map((item) => (
          <CircleAction item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AboutUs);
