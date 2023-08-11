import { TDataTag } from "../constants";

type TPropsTagITem = {
  item: TDataTag;
  classNames?: string;
};

const TagItem: React.FC<TPropsTagITem> = ({ item, classNames }) => {
  return (
    <div
      className={`rounded-3xl bg-greenLight-100 px-8 py-2 font-semibold cursor-pointer whitespace-nowrap ${classNames}`}
    >
      {item.title}
    </div>
  );
};

export default TagItem;
