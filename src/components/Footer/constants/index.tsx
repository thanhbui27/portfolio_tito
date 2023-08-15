export type TItem = {
  id: number;
  titleItem: string;
};

export type TDataFooter = {
  id: number;
  title: string;
  item: TItem[];
};

export const DataFooter: TDataFooter[] = [
  {
    id: 1,
    title: "Product",
    item: [
      {
        id: 1,
        titleItem: "Features",
      },
      {
        id: 2,
        titleItem: "Pricing",
      },
      {
        id: 3,
        titleItem: "About us",
      },
      {
        id: 4,
        titleItem: "Jobs",
      },
      {
        id: 5,
        titleItem: "Terms & Conditions",
      },
      {
        id: 6,
        titleItem: " Privacy Policy",
      },
    ],
  },
  {
    id: 2,
    title: "Blog",
    item: [
      {
        id: 1,
        titleItem: "Company",
      },
      {
        id: 2,
        titleItem: "Industry Insights",
      },
      {
        id: 3,
        titleItem: "Product",
      },
      {
        id: 4,
        titleItem: "Links",
      },
      {
        id: 5,
        titleItem: "Incident Reports",
      },
    ],
  },
  {
    id: 3,
    title: "Documentation",
    item: [
      {
        id: 1,
        titleItem: "Guides for using Tito",
      },
      {
        id: 2,
        titleItem: "Answers to FAQs",
      },
      {
        id: 3,
        titleItem: "Retrieve your orders or tickets",
      },
      {
        id: 4,
        titleItem: "Status Page",
      },
    ],
  },
];
