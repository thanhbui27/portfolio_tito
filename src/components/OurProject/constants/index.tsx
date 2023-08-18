import { TDataTag } from "../../Service/components/constants";

export type TDataOutProject = {
  id: number;
  title: string;
  image: string;
  tag: TDataTag[];
};

export const DataOurProject: TDataOutProject[] = [
  {
    id: 1,
    title: "E-Commerce UI/UX design",
    image:
      "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
    tag: [
      {
        id: 1,
        title: "UI/UX design",
      },
      {
        id: 2,
        title: "UI/UX web Design",
      },
    ],
  },
  {
    id: 2,
    title: "E-Commerce UI/UX design",
    image:
      "https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png",
    tag: [
      {
        id: 1,
        title: "UI/UX design",
      },
      {
        id: 2,
        title: "UI/UX web Design",
      },
    ],
  },
  {
    id: 3,
    title: "E-Commerce UI/UX design",
    image:
      "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
    tag: [
      {
        id: 1,
        title: "UI/UX design",
      },
      {
        id: 2,
        title: "UI/UX web Design",
      },
    ],
  },
  {
    id: 4,
    title: "E-Commerce UI/UX design",
    image:
      "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
    tag: [
      {
        id: 1,
        title: "UI/UX design",
      },
      {
        id: 2,
        title: "UI/UX web Design",
      },
    ],
  },
];

export const settings = {
  className: "centers",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        className: "none",
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
