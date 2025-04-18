import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variable--super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        Search
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Click on the Button
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
