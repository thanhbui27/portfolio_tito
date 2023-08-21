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
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        centerMode: false,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToScroll: 2,
        initialSlide: 0,
        centerMode: false,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToScroll: 1,
        centerMode: true,
        className: "none",
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
