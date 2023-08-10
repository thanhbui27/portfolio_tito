import Slack from "@/assets/images/slack.png";
import Dropbox from "@/assets/images/dropbox.png";
import Discord from "@/assets/images/discord.png";
import Trello from "@/assets/images/trello.png";

const WorkingBest = () => {
  return (
    <div className="workingBest flex flex-wrap justify-center xl:flex xl:items-center xl:justify-between ">
      <div className="flex items-center justify-start">
        <hr className="h-[2px] w-[20px] my-8 bg-gray-200 border-0 dark:bg-gray-700 mr-3" />
        <h4 className="lg:text-2xl text-lg font-medium">
          Working with the best
        </h4>
      </div>
      <div className="flex items-center justify-start ">
        <img src={Slack} className="border-r-2 w-1/4" alt="slack" />
        <img src={Trello} className="border-r-2 w-1/4" alt="trello" />
        <img src={Dropbox} className="border-r-2 w-1/4" alt="dropbox" />
        <img src={Discord} className="border-r-2 w-1/4" alt="discord" />
      </div>
    </div>
  );
};

export default WorkingBest;
