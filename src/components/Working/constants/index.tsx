import Shap1 from "@/assets/icons/shap-1.svg";
import Shap2 from "@/assets/icons/shap-2.svg";
import Shap3 from "@/assets/icons/shap-3.svg";
import Shap4 from "@/assets/icons/shap-4.svg";
import Shap5 from "@/assets/icons/shap-5.svg";
import PreBtn from "@/assets/icons/pre-btn.svg";
import NextBtn from "@/assets/icons/next-btn.svg";

export interface TypeDataSlideWorking {
  id: string;
  title: string;
  icon: string;
}

export type PropsBtn = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const DataSlideWorking: TypeDataSlideWorking[] = [
  {
    id: "01",
    title: "Search",
    icon: Shap1,
  },
  {
    id: "02",
    title: "Strategy",
    icon: Shap2,
  },
  {
    id: "03",
    title: "Concept",
    icon: Shap3,
  },
  {
    id: "04",
    title: "Demo",
    icon: Shap4,
  },

  {
    id: "05",
    title: "Testing",
    icon: Shap5,
  },
];
const NextArrow = (props: PropsBtn) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className}  text-black lg:!h-14 lg:!w-14 !w-8 !h-8 !flex justify-center items-center  !bg-white rounded-full  focus:outline-none  font-medium text-sm text-center `}
      onClick={onClick}
      style={{ ...style }}
    >
      <img src={NextBtn} alt="pre" className="m-0" />
    </button>
  );
};

const PrevArrow = (props: PropsBtn) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} !bg-red-900 text-black lg:!h-14 lg:!w-14 !w-8 !h-8 !flex justify-center items-center  rounded-full border focus:outline-none  font-medium text-sm text-center`}
      onClick={onClick}
      style={{ ...style }}
    >
      <img src={PreBtn} alt="pre" className="m-0" />
    </button>
  );
};
export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
