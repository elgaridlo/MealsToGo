import React, {useState} from "react";
import { useContext, useEffect } from "react/cjs/react.development";
import { locationRequest, locationTransform } from "./LocationService";

export const LocationContext = React.createContext()
export const LocationContextProvider = ({children})=> {
    const [location, setLocation] = useState(null)
    const [keyword, setKeyword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
    }

    useEffect(() => {
        if (!keyword.length) {
            // don't do anything
            return;
        }
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false)
            setLocation(result)
        }).catch((err)=> {
            setIsLoading(false)
            setError(err)
        })
    }, [keyword])

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