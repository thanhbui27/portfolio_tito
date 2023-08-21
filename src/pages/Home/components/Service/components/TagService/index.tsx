import { DataTag } from "../constants";
import TagItem from "./TagItem";

const TagList = () => {
  return (
    <div className="flex items-center justify-center w-full h-full gap-2 flex-wrap my-10">
      {DataTag.map((item) => (
        <TagItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TagList;
