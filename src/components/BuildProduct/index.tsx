const BuidProduct = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center my-8">
          <h4 className="lg:text-5xl text-3xl font-Quicksand font-bold text-center">
            Start Build Your Product
          </h4>
        </div>
        <div className="text-center font-medium text-lg">
          That's it! Now It's your turn to say hi
        </div>
        <div className="mt-10">
          <button
            type="button"
            className="py-2 px-4 bg-red-400 font-medium md:text-lg text-base text-white"
          >
            Build Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuidProduct;
