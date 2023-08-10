import { TDataCircle } from "../../constants";

type TPropsCircleAction = {
  item: TDataCircle;
};

const CircleAction: React.FC<TPropsCircleAction> = ({ item }) => {
  return (
    <div
      className={`flex flex-col items-center md:absolute ${item.clasNames}`}
      style={item.style}
    >
      <div
        className={`rounded-full border focus:outline-none  w-20 h-20 text-center flex items-center justify-center font-bold text-2xl text-red-900 md:mr-0 whitespace-nowrap `}
        style={{ backgroundColor: item.backgroundCircle }}
      >
        {item.title}
      </div>
      <h5 className="font-semibold text-md whitespace-nowrap">
        {item.meanTitle}
      </h5>
    </div>
  );
};

export default CircleAction;
