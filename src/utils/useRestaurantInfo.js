import { useEffect, useState } from "react";
import { RESTAURANT_INFO_URL } from "../config";

function useRestaurantInfo(id) {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RESTAURANT_INFO_URL + id);
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
}

export default useRestaurantInfo;
