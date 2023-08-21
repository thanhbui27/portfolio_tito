import { DataCardServiec } from "../constants";
import CardServiceItem from "./CardServiceItem";

const ListCartService = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 flex-wrap">
      {DataCardServiec.map((item) => (
        <CardServiceItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListCartService;
