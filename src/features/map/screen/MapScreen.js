import React, {useContext, useState, useEffect} from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { SearchComponent } from "../components/SearchComponent";


const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`
export const MapScreen = () => {
    return(
        <>
            <SearchComponent />
            <Map />
        </>
    )
}