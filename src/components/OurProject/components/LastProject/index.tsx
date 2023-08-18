import Slider from "react-slick";
import { DataOurProject, settings } from "../../constants";
import ItemLastProject from "./ItemLastProject";
import "../../styles.css";

const LastProject = () => {
  return (
    <div className="last-project w-full h-full relative">
      <Slider {...settings}>
        {DataOurProject.map((item) => (
          <ItemLastProject key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default LastProject;
