import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../config";

function useRestaurants(setFileredData) {
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(RESTAURANTS_URL);
      const json = await data.json();
      setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
      setFileredData(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
  return restaurantData;
}

export default useRestaurants;
