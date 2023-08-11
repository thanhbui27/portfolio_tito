import TagItem from "../TagService/TagItem";
import { TDataCard } from "../constants";

type TPropsCard = {
  item: TDataCard;
};

const CardServiceItem: React.FC<TPropsCard> = ({ item }) => {
  return (
    <div className="p-7 w-full shadow-md rounded-md">
      <div className="flex flex-col items-start justify-center text-grayCustom">
        <img src={item.icon} alt={item.title} />
        <h4 className="text-xl font-bold">{item.title}</h4>
        <div className="flex items-center justify-start w-full h-full gap-2  my-5 flex-wrap">
          {item.tag.map((tag) => (
            <TagItem item={tag} key={tag.id} classNames="text-xs " />
          ))}
        </div>
        <p className="mb-5 font-medium text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, and scrambled it to make a type specimen book. It has
          survived not only five ....
        </p>
        <button
          type="button"
          className="lg:text-lg font-bold text-red-900 underline"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default CardServiceItem;
