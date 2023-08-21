import { DataCustomerQuestion } from "../../constants";
import ItemAccordion from "./ItemAccordion";

const ListAccordionQuestion = () => {
  return (
    <div className="my-10">
      {DataCustomerQuestion.map((item) => (
        <ItemAccordion key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListAccordionQuestion;
