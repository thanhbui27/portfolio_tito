import DropDown from "@/assets/icons/dropdown.svg";
import LastProject from "./components/LastProject";

const OurProject = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-start mt-8">
          <hr className="h-[2px] w-[20px] bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
          <h4 className="text-md font-bold">Project</h4>
        </div>
        <div className="flex items-center justify-start mb-8">
          <h4 className=" !leading-normal font-semibold lg:text-5xl text-3xl font-Quicksand text-center">
            Our Last <br /> <b className="font-bold text-red-900">Projects</b>
          </h4>
        </div>
        <div className="flex w-[200px] items-center justify-between py-2 px-4 bg-white rounded-3xl cursor-pointer">
          <h3 className="font-semibold text-grayCustom">Website Project </h3>
          <div className="p-2 rounded-full bg-red-200">
            <img src={DropDown} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <LastProject />
      </div>
    </div>
  );
};

export default OurProject;
