import { AiFillStar } from "react-icons/ai";
import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="border-2 hover:shadow-xl w-56 h-80 rounded-md p-4 m-5 cursor-pointer shadow-lg flex flex-col justify-between"    >
      <img
        className="w-full"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurandImg"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <span className="bg-green-300 w-fit p-1 text-sm font-semibold rounded-lg flex items-center">
        <AiFillStar className="star mr-1" /> {avgRating} stars
      </span>
    </div>
  );
};

export default RestaurantCard;
