import { DataOurProject, settings } from "../../constants";
import ItemLastProject from "./ItemLastProject";
import Sliders from "@/components/common/Sliders/Sliders";
import "../../styles.css";

const LastProject = () => {
  return (
    <div className="last-project w-full h-full relative">
      <Sliders settings={settings}>
        {DataOurProject.map((item) => (
          <ItemLastProject key={item.id} item={item} />
        ))}
      </Sliders>
    </div>
  );
};

export default LastProject;
