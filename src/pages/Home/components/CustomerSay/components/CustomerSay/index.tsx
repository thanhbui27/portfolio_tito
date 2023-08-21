import ItemCustomerSay from "./ItemCustomerSay";
import { DataCustomerSay, settings } from "../../constants";
import Sliders from "@/components/common/Sliders/Sliders";
import "../../styles.css";

const ListCustomerSay = () => {
  return (
    <div className="customer">
      <Sliders settings={settings}>
        {DataCustomerSay.map((item) => (
          <ItemCustomerSay key={item.id} item={item} />
        ))}
      </Sliders>
    </div>
  );
};

export default ListCustomerSay;
