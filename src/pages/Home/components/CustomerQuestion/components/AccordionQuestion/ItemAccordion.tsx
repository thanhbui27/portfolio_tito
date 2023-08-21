import { memo, useState } from "react";
import { TDataCustomerQuestion } from "../../constants";
import DropdownV2 from "@/assets/icons/dropdownV2.svg";

type TItemAccordion = {
  item: TDataCustomerQuestion;
};

const ItemAccordion: React.FC<TItemAccordion> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title } = item;
  const handleClick = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div id="accordionExample">
      <div className="md:w-2/3 mx-auto">
        <h2 className="mb-0" id="headingOne">
          <button
            className={`${
              isOpen &&
              `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
            } group relative flex w-full lg:text-xl sm:text-lg text-base items-center font-semibold  border-0 px-5 py-4 text-left text-neutral-800 transition  `}
            type="button"
            onClick={() => handleClick()}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {title}
            <span
              className={`${
                isOpen ? `rotate-[-180deg] -mr-1` : `rotate-0`
              } ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none `}
            >
              <img src={DropdownV2} alt="dropdown" />
            </span>
          </button>
        </h2>
        <div
          className={` overflow-hidden  ${isOpen ? "max-h-40" : "max-h-0"}
          }  transition-[max-height] ease-in-out motion-reduce:transition-none duration-500`}
        >
          <p className="px-5 py-4 sm:text-lg text-base ">
            <strong>This is the first item's accordion body.</strong> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
            rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
            ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
            ante. Pellentesque at odio euismod, mattis urna ac, accumsan metus.
            Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
            Curabitur non sollicitudin neque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ItemAccordion);
