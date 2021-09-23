import React, {createContext} from "react";
import { useState } from "react/cjs/react.development";

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const add = (restaurant) => {
        setFavorites([...favorites, restaurant])
    }

    const remove = (restaurant) => {
        const newFavorites = favorites.filter(
            (x) => x.placeId !== restaurant.placeId
        )

        setFavorites(newFavorites)
    }
    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites: add,
                removeFromFavorites: remove
            }}
        >{children}</FavoritesContext.Provider>
    )
}