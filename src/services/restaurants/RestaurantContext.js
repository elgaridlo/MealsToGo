import React, {useState, createContext, useEffect, useMemo} from "react";
import { useContext } from "react/cjs/react.development";
import { LocationContext } from "../location/LocationContext";
import { restaurantsRequest, restaurantTransform } from "./RestaurantService";

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const {location} = useContext(LocationContext)


    const retrieveRestaurants = (loc) => {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest(loc).then(restaurantTransform).then((result) => {
                setIsLoading(false)
                setRestaurants(result)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })
        }, 2000)
    }

    useEffect(()=> {
        console.log('data = ', location)
        if (location) {
            const locationString = `${location.lat},${location.lng}`
            retrieveRestaurants(locationString)
        } else {
            retrieveRestaurants()
        }
    }, [location])

    return (
        <RestaurantsContext.Provider value= {{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}