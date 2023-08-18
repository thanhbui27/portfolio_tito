import { TDataCustomerSay } from "../../constants";

type TItemCustomerSay = {
  item: TDataCustomerSay;
};

const ItemCustomerSay: React.FC<TItemCustomerSay> = ({ item }) => {
  return (
    <div className="flex items-end justify-start md:gap-10 gap-3 ">
      <div className="w-1/4">
        <img
          src={item.image}
          alt=""
          className="md:max-w-[350px] md:max-h-[450px] sm:w-full sm:h-full h-[148px] object-cover"
        />
      </div>
      <div className="w-2/3">
        <p className="md:text-lg font-medium xl:line-clamp-none line-clamp-5 sm:text-base text-xs">
          "{item.content}"
        </p>
        <h3 className="md:text-3xl text-xl md:my-4 my-2 font-bold">
          {item.name}
        </h3>
        <span className="md:text-base text-sm font-semibold text-grayCustom">
          {item.address}
        </span>
      </div>
    </div>
  );
};

export default ItemCustomerSay;
