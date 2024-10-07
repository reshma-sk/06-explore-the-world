import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    areaName,
    sla,
    cuisines,
    costForTwo,
    avgRating,
})=>{
    return(
        <div className="restaurant-card">
            <img src={CDN_URL + cloudinaryImageId} alt="" />
            <div className="restaurant-details">
                <h3 className="restaurant-name">
                    {name.slice(0,15)}
                    {name.length > 15 ? "..." : ''}
                </h3>
                <div className="esa-rating">
                    <h4 className="rating">
                        <span style={avgRating > 4.2 ? {backgroundColor:'green'} : {backgroundColor:'red'}}>{avgRating}</span>
                    </h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.deliveryTime}</h4>
                </div>
                <p className="cuisine">{cuisines.join(', ')}</p>
                <p className="location">{areaName}</p>
            </div>
        </div>
    )
}
export default RestaurantCard;