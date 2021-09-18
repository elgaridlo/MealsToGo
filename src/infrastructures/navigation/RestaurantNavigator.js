import React from "react";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import RestaurantScreen from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = ({route}) => {
    console.log('restaurant navigator ', route)
    return (
        <RestaurantStack.Navigator
            headerMode="none"
            screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS}}
        >
            <RestaurantStack.Screen 
                name="Restaurants"
                component={RestaurantScreen}
            />
            <RestaurantStack.Screen 
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}