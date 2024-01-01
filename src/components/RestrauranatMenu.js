import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { AiFillStar } from "react-icons/ai";
import ShimmerUI from "./ShimmerUI";
import ItemCard from "./ItemCard";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestrauranatMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurantInfo(id);

  if (!restaurant) {
    return <ShimmerUI />;
  }

  return (
    <div>
      <div className="items-center flex flex-col md:flex-row md:space-y-0 space-y-3 p-4 md:p-8 justify-around bg-orange-100 rounded-xl m-4 md:m-8">
        <div className="md:hidden text-center">
          <h1 className="font-bold text-sm md:text-4xl">{restaurant?.name}</h1>
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <p>
            {restaurant?.locality +
              ", " +
              restaurant?.area +
              ", " +
              restaurant?.city}
          </p>
        </div>
        <div>
          <img
            className="rounded-3xl md:h-40 md:w-auto"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          />
        </div>
        <div className="md:space-y-1 md:w-auto text-center md:block hidden">
          <h1 className="font-bold text-sm md:text-4xl">{restaurant?.name}</h1>
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <p>
            {restaurant?.locality +
              ", " +
              restaurant?.area +
              ", " +
              restaurant?.city}
          </p>
        </div>
        <div className="md:text-base text-center text-sm md:w-auto">
          <p className="flex items-center justify-center">
            <AiFillStar className="mr-1" /> {restaurant?.avgRating}
          </p>
          <p>{restaurant?.costForTwoMsg}</p>
          <p>{restaurant?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</p>
        </div>
      </div>
      <div className="h-full w-auto flex flex-wrap justify-center">
        {Object.values(restaurant?.menu?.items).map((item) => {
          return <ItemCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default RestrauranatMenu;
