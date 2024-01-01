import image from "../assets/pageNotFound.svg";
import { useRouteError } from "react-router-dom";

const NoPageFound = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="h-full w-auto flex flex-wrap justify-center my-10 mx-auto">
      <div>
        <img className="h-[74.6vh]" src={image} alt="Page Not Found" />
        <h2 className="text-center p-1 m-1 rounded-lg cursor-pointer bg-red-200">
          {status + ":" + statusText}
        </h2>
      </div>
    </div>
  );
};

export default NoPageFound;
