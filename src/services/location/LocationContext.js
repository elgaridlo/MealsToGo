import React, {useState} from "react";
import { useContext } from "react/cjs/react.development";
import { locationRequest, locationTransform } from "./LocationService";

export const LocationContext = React.createContext()
export const LocationContextProvider = ({children})=> {
    const [location, setLocation] = useState(null)
    const [keyword, setKeyword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (searchKeyword) => {
        console.log('search keyword = ', searchKeyword)
        setIsLoading(true)
        setKeyword(searchKeyword)
        if (!searchKeyword.length) {
            // don't do anything
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false)
            setLocation(result)
        }).catch((err)=> {
            setIsLoading(false)
            setError(err)
        })
    }

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}