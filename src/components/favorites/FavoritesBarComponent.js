import React from "react";
import styled from "styled-components/native";
import {View, ScrollView} from "react-native";
import { SpacerComponent } from "../spacer/SpacerComponent";
import { CompactRestaurantInfo } from "../restaurant/CompactRestaurantInfo";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text } from "../typography/TextComponent";

const FavoritesWrapper = styled(View)`
    padding: 10px;
`

export const FavoritesBar = ({favorites, onNavigate}) => {
    if(!favorites.length) {
        return null
    }
    return (
        <FavoritesWrapper>
            <SpacerComponent variant="left.large">
                <Text variant="caption">Your Favorites:</Text>
            </SpacerComponent>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favorites.map((restaurant) => {
                    const key = restaurant.name
                    return (
                        <SpacerComponent key={key} position='left' size='medium'>
                            <TouchableOpacity onPress={() => onNavigate(
                                "RestaurantDetail", {
                                    restaurant
                                  }
                            )}>
                                <CompactRestaurantInfo restaurant={restaurant}/>
                            </TouchableOpacity>
                        </SpacerComponent>
                    )
                })}
            </ScrollView>
        </FavoritesWrapper>
    )
}