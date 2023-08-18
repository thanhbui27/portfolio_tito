export type TDataCustomerSay = {
  id: number;
  image: string;
  name: string;
  address: string;
  content: string;
};

export const DataCustomerSay: TDataCustomerSay[] = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/250px-Elon_Musk_Royal_Society_%28crop1%29.jpg",
    name: "Elon Musk",
    address: "Pretoria, South Africa",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the  ",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    name: "John Wick",
    address: "Pretoria, South Africa",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the  ",
  },
  {
    id: 3,
    image:
      "https://kynguyencongnghe.com/wp-content/uploads/2023/04/violet-evergarden-679ea.webp",
    name: "Violet Evergarden",
    address: "Pretoria, South Africa",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is s. Lorem Ipsum has been the  ",
  },
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 10000,
};
