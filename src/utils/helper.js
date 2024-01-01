export const filerData = (searchText, restaurantData) => {
  const data = restaurantData.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return data;
};
