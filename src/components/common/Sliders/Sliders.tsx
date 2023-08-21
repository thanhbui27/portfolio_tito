import Slider from "react-slick";
import { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type TPropsSliders = {
  settings: object;
  children: React.ReactNode;
};

const Sliders: React.FC<TPropsSliders> = ({ settings, children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default memo(Sliders);
