import { motion } from "framer-motion";
import ComputersCanvas from "@/components/common/Canvas/Computers ";
import CircleFrame1 from "@/assets/icons/circle-frame-2.svg";
import CircleFrame2 from "@/assets/icons/circle-frame-1.svg";
import { textVariant } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

const SliderBar = () => {
  return (
    <div className="slider md:mt-20 md:mb-72  h-screen  flex flex-wrap items-start justify-center mx-auto p-2 relative">
      <motion.div className="content text-center">
        <motion.h1
          variants={textVariant(1)}
          className=" font-semibold lg:text-5xl md:text-5xl text-3xl"
        >
          Digital Transformation and IT Consulting <br /> Services
        </motion.h1>
        <motion.h4
          variants={textVariant(1.5)}
          className="text-md font-normal mt-[45px] lg:text-xl md:text-xl"
        >
          Separated they live in Bookmarks right at the coast of <br /> the
          famous Semantics, large language
        </motion.h4>
      </motion.div>
      <div className="relative md:px-8 md:py-12">
        <img
          src={CircleFrame1}
          className="z-20 relative animate-spin-slow"
          alt="circel1"
        />
        <img
          className="absolute left-0 top-[2%] z-10 animate-spin-reverse "
          src={CircleFrame2}
          alt="circel2"
        />
        <div className="center object-scale-down h-1/2 w-1/2 z-50">
          <ComputersCanvas />
          <div className="flex md:order-2 md:top-full top-[20rem] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <button
              type="button"
              className="button-round-md  bg-red-900 text-white "
            >
              Get Started
            </button>
            <button type="button" className="button-round-md   bg-white ml-5">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SliderBar);
