import Shap6 from "@/assets/icons/shap-6.svg";
import Shap7 from "@/assets/icons/shap-7.svg";
import Shap8 from "@/assets/icons/shap-8.svg";
import Shap9 from "@/assets/icons/shap-9.svg";

export type TDataTag = {
  id: number;
  title: string;
};

export type TDataCard = {
  id: number;
  title: string;
  icon: string;
  tag: TDataTag[];
};

export const DataTag: TDataTag[] = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Web Development",
  },
  {
    id: 3,
    title: "Mobile Development",
  },
  {
    id: 4,
    title: "UI/UX",
  },
  {
    id: 5,
    title: "Design",
  },
];

export const DataCardServiec: TDataCard[] = [
  {
    id: 1,
    title: "Web Development",
    icon: Shap6,
    tag: [
      {
        id: 1,
        title: "Dev FE",
      },
      {
        id: 2,
        title: "Dev BE",
      },
      {
        id: 3,
        title: "Database Technology",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile Development",
    icon: Shap7,
    tag: [
      {
        id: 1,
        title: "IOS Dev",
      },
      {
        id: 2,
        title: "Android Dev",
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX",
    icon: Shap8,
    tag: [
      {
        id: 1,
        title: "UI Android/IOS",
      },
      {
        id: 2,
        title: "UI Website",
      },
      {
        id: 3,
        title: "UX Production",
      },
    ],
  },
  {
    id: 4,
    title: "Design",
    icon: Shap9,
    tag: [
      {
        id: 1,
        title: "Design Banner",
      },
      {
        id: 2,
        title: "Design Logo",
      },
      {
        id: 3,
        title: "Design Product",
      },
    ],
  },
];
