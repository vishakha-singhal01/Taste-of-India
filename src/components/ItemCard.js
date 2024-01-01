import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { IMG_CDN_URL } from "../config";

const ItemCard = ({ cloudinaryImageId, name, price, description }) => {
  console.log(cloudinaryImageId, name, price, description);
  return (
    <div className="space-y-2 w-80 rounded-md p-2 m-5 cursor-pointer border-2">
      <img
        className="w-full"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurandImg"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <span className="flex items-center">
        <BiRupee /> {price}
      </span>
      <p>{description}</p>
    </div>
  );
};

export default ItemCard;
