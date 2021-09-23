import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"
import { CompactRestaurantInfo } from "../../../components/restaurant/CompactRestaurantInfo"

const MyText = styled(Text)``


export const MapCallout = ({restaurant}) => {
    return (
        <CompactRestaurantInfo 
        isMap    
        restaurant={restaurant}
        />
    )
}