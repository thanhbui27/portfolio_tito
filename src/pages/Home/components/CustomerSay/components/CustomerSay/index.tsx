import Slider from "react-slick";
import ItemCustomerSay from "./ItemCustomerSay";
import { DataCustomerSay, settings } from "../../constants";
import "../../styles.css";

const ListCustomerSay = () => {
  return (
    <div className="customer">
      <Slider {...settings}>
        {DataCustomerSay.map((item) => (
          <ItemCustomerSay key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default ListCustomerSay;
