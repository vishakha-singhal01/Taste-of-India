const ShimmerUI = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="shimmer w-auto h-full flex flex-wrap justify-center">
      {Array.apply(null, Array(10)).map((_, i) => {
        return (
          <div
            className="card relative h-80 m-5 shadow-lg rounded-md overflow-hidden w-56"
            key={i}
          >
            <div className="shimmerBG h-40"></div>
            <div className="p-32">
              <div className="shimmerBG title-line h-6 w-full mb-3 rounded-3xl"></div>
              <div className="shimmerBG title-line h-6 w-full mb-3 rounded-3xl end"></div>
              <div className="shimmerBG content-line h-2 w-full mb-4 rounded-lg mt-6"></div>
              <div className="shimmerBG content-line h-2 w-full mb-4 rounded-lg"></div>
              <div className="shimmerBG content-line h-2 w-full mb-4 rounded-lg"></div>
              <div className="shimmerBG content-line h-2 w-full mb-4 rounded-lg"></div>
              <div className="shimmerBG content-line h-2 w-full mb-4 rounded-lg end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShimmerUI;
