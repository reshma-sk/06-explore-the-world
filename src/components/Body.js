import React, { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
const Body = ()=>{
    const[restaurantList,setRestaurantList] = useState([])
    const[filteredRestaurants,setFilteredRestaurants] = useState([])
    const[showButton,setShowButton] = useState(true)
    const[restaurantName,setRestaurantName] = useState("")
    const[searchRestaurant,setSearchRestaurant] = useState("")

    const fetchData = async ()=>{
        try {
            const data = await fetch(SWIGGY_API_URL)
            const json = await data.json();
            console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
            const restroData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants;
            setRestaurantList(restroData)
            setFilteredRestaurants(restroData)
              
        } catch (error) {
            console.log('error fetching data', error);    
        }                
    }
    
    useEffect(()=>{
        fetchData();    
    },[]) 

    
    const handleSearch = ()=>{
        const filtered = restaurantList.filter((res)=>(
            res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
        ))
        setFilteredRestaurants(filtered)
        setSearchRestaurant("")
       
    }
    const filterTopRated = ()=>{
        console.log(restaurantList);
        
        const topRated = filteredRestaurants.filter(restro=>restro.info.avgRatingString > "4.0")
        setFilteredRestaurants(topRated)
        setShowButton(false)
    }
    
    
   
    return restaurantList.length === 0 ? (
        <Shimmer/>
    ):(
        <div className="body">
            <div className="search-box">
                <input placeholder="search a restaurant you want..." value={searchRestaurant} onChange={(e)=>{setSearchRestaurant(e.target.value)}} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="filter">
                {showButton &&(
                    <button className="filter-btn" onClick={filterTopRated}>Top Restaurants</button>
                  )

                }    
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.length !== 0 ? (
                    filteredRestaurants.map((restaurant)=>(
                        <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info}/>
                    ))
                  ):(
                    <h2>Sorry, we couldn't find any restaurant for {restaurantName}</h2>
                  )
                }
            </div>
        </div>
    )
}
export default Body;