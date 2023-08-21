import { TDataOutProject } from "../../constants";
import btn from "@/assets/icons/pre-btn.svg";

type TPropItemLastProject = {
  item: TDataOutProject;
};

const ItemLastProject: React.FC<TPropItemLastProject> = ({ item }) => {
  const { image, tag: tags, title } = item;
  return (
    <div className="project group mx-4 w-full h-full cursor-pointer relative overflow-hidden">
      <div className="overflow-hidden w-full xl:h-96 h-64 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl transition-all duration-500 hover:scale-125 "
        />
      </div>
      <div className="opacity-0 flex items-end rounded-3xl justify-between absolute bottom-0 left-0 p-4 backdrop-brightness-50 w-full h-full transition-all duration-500 group-hover:opacity-100">
        <div>
          <div className="my-6 flex items-center justify-start gap-3">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="xl:p-2 p-1 bg-white text-black font-semibold w-fit xl:text-sm text-[10px] whitespace-nowrap  "
              >
                <h6>{tag.title} </h6>
              </div>
            ))}
          </div>
          <h4 className="lg:text-xl font-bold text-white line-clamp-3 text-lg">
            {title}
          </h4>
        </div>
        <div className="rounded-full lg:p-4 p-2 border-grayCustom border-2 cursor-pointer">
          <img src={btn} alt="" className="rotate-[145deg] " />
        </div>
      </div>
    </div>
  );
};

export default ItemLastProject;
