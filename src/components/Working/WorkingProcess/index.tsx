import Slider from "react-slick";
import { DataSlideWorking, settings } from "../constants";
import ItemWorking from "./ItemWorking";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

const WorkingProcess = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex items-center justify-start">
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">Working process</h4>
        </div>
        <div className="flex items-center justify-start my-8">
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3 " />
          <h4 className="lg:text-6xl text-4xl font-Quicksand font-bold">
            How we work
          </h4>
        </div>
        <p className="w-2/3 lg:text-base text-sm font-medium mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          laoreet mi. Ut aliquam porttitor tortor, ac ornare erat. Aliquam
          suscipit turpis eget sem rutrum congue. Cras pulvinar leo cursus nulla
          volutpat finibus.
        </p>
      </div>
      <div className="carousel relative mt-20">
        <Slider {...settings}>
          {DataSlideWorking.map((item) => (
            <ItemWorking key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WorkingProcess;
