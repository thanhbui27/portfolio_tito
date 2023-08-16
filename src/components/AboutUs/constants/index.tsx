export type TDataCircle = {
  id: number;
  title: string;
  meanTitle: string;
  clasNames: string;
  style?: React.CSSProperties;
  backgroundCircle: string;
};

export const DataCircle: TDataCircle[] = [
  {
    id: 1,
    title: "10+",
    meanTitle: "Years Experience",
    backgroundCircle: "#FCD1B6",
    clasNames:
      " md:left-[calc(100%-20rem)] lg:left-[calc(100%-28rem)] md:-top-20 lg:top-auto",
  },
  {
    id: 2,
    title: "10M+",
    meanTitle: "Fundraising",
    style: {
      top: "-15rem",
      left: "-24rem",
    },
    backgroundCircle: "#B4C7FE",
    clasNames: "",
  },
  {
    id: 3,
    title: "250+",
    meanTitle: "Projects Done",
    style: {
      top: "-22rem",
      left: "-3rem",
    },
    backgroundCircle: "#FCB6B6",
    clasNames: "",
  },
  {
    id: 4,
    title: "20+",
    meanTitle: "Team Member",
    style: {
      top: "-15rem",
      right: "-24rem",
    },
    backgroundCircle: "#DDFF94",
    clasNames: "",
  },
  {
    id: 5,
    title: "10+",
    meanTitle: "Years Experience",
    backgroundCircle: "#DFF0F7",
    clasNames:
      "md:right-[calc(100%-20rem)] lg:right-[calc(100%-28rem)]  md:-top-20 lg:top-auto",
  },
];
