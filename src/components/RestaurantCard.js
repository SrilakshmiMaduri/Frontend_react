import { CDN_URL } from "../../utils/constants";
import resList from "../../utils/mockData";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        costForTwo,
        cuisines,
        deliveryTime   
    } = resData?.info

    return (
      <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐ ratings</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard;