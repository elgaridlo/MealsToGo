import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/LocationContext";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`

export const SearchComponent = ({isFavoritesToggled, onFavoritesToggle}) => {

    const { keyword, search } = useContext(LocationContext)

    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(()=> {
        setSearchKeyword(keyword)
    },[keyword])

    return (
        <SearchContainer>
            <Searchbar
                icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
                onIconPress={onFavoritesToggle}
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )
}