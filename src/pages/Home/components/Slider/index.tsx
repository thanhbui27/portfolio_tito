import CircleFrame1 from "@/assets/icons/circle-frame-2.svg";
import CircleFrame2 from "@/assets/icons/circle-frame-1.svg";
import Laptop from "@/assets/images/laptopmac.png";

const SliderBar = () => {
  return (
    <div className="slider mt-[90px]  flex flex-wrap items-center justify-center mx-auto p-2 relative">
      <div className="content text-center">
        <h1 className=" font-semibold lg:text-5xl md:text-5xl text-3xl">
          Digital Transformation and IT Consulting <br /> Services
        </h1>
        <h4 className="text-md font-normal mt-[45px] lg:text-xl md:text-xl">
          Separated they live in Bookmarks right at the coast of <br /> the
          famous Semantics, large language
        </h4>
      </div>
      <div className="relative px-8 py-12 overflow-hidden">
        <img
          src={CircleFrame1}
          className="z-20 relative animate-spin-slow"
          alt="circel1"
        />
        <img
          className="absolute left-0 top-[2%] z-10 animate-spin-reverse "
          src={CircleFrame2}
          alt="circel2"
        />
        <img
          className="center object-scale-down h-1/2 w-1/2"
          src={Laptop}
          alt="laptop"
        />
      </div>
      <div className="flex md:order-2 top-[calc(100%-5%)] md:top-[calc(100%-25%)] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <button
          type="button"
          className=" button-round-md  bg-red-900 text-white "
        >
          Get Started
        </button>
        <button type="button" className=" button-round-md   bg-white ml-5">
          View Demo
        </button>
      </div>
    </div>
  );
};

export default SliderBar;
