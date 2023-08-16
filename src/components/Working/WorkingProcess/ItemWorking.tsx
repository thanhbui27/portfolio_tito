import { TypeDataSlideWorking } from "../constants";

interface TypeProps {
  item: TypeDataSlideWorking;
}

const ItemWorking: React.FC<TypeProps> = ({ item }) => {
  const { title, icon, id } = item;
  return (
    <div className="carousel-item flex flex-col items-start justify-center border-r-2 border-blue-100">
      <div className="flex items-center justify-start relative">
        <img src={icon} alt="shap1" />
        <h4 className="lg:text-4xl font-bold text-red-900 absolute bottom-0 -left-2 text-3xl">
          {id}
        </h4>
      </div>
      <h3 className="lg:text-3xl font-semibold mt-8 text-xl">{title}</h3>
      <p className="lg:w-[calc(100%-15%)] w-full my-4 font-medium text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <button
        type="button"
        className="lg:text-xl font-bold text-red-900 underline"
      >
        Learn More
      </button>
    </div>
  );
};

export default ItemWorking;
