import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DataFooter, DataSocialIcon } from "./constants";
import { fadeIn } from "@/utils/motion";
import SectionWrapper from "@/hoc/SectionWrapper";

const Footer = () => {
  return (
    <footer className="mt-40 p-4 overflow-hidden">
      <div>
        <div className="flex justify-between items-start flex-wrap lg:grid lg:grid-cols-[3fr_1fr_1fr_1fr] lg:items-start">
          <motion.div variants={fadeIn("right", "spring", 0.5, 2)}>
            <Link to="/" className="flex items-center">
              <img src="logo.svg" className="h-8 mr-3" alt="Logo" />
            </Link>
            <div className="flex justify-center items-center w-80 my-6 bg-white p-1 pr-0">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="text-sm pl-2 w-full h-9 bg-transparent border-none outline-none rounded-lg"
              />
              <button type="button">
                <span className="px-5 py-3 font-medium text-base text-white whitespace-nowrap bg-red-400">
                  Sign Up
                </span>
              </button>
            </div>
            <span className="whitespace-nowrap font-medium text-base">
              Contact Info
            </span>
            <br />
            <span className="md:whitespace-nowrap font-medium text-base">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </span>
          </motion.div>
          {DataFooter.map((footer) => (
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 2)}
              key={footer.id}
              className="mt-10 md:mt-0"
            >
              <motion.h3
                variants={fadeIn("left", "spring", 0.6, 2)}
                className="font-semibold mb-5 whitespace-nowrap text-lg"
              >
                {footer.title}
              </motion.h3>
              <ul className="list-none">
                {footer.item.map((i) => (
                  <motion.li
                    variants={fadeIn("left", "spring", 0.6 * i.id, 2)}
                    className="mb-3"
                    key={i.id}
                  >
                    <Link
                      to="/"
                      className="whitespace-nowrap font-medium text-base"
                    >
                      {i.titleItem}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="py-5 mt-8 border-t-2 "
      >
        <div className="flex items-center justify-between">
          <span>©Tito - All Rights Reserved</span>
          <div className="flex items-start justify-center gap-2">
            {DataSocialIcon.map((dt) => (
              <img key={dt.id} src={dt.icon} alt={dt.alt} />
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
export default SectionWrapper(Footer);
