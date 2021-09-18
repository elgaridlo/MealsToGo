import React from "react";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import RestaurantScreen from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = ({route}) => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS, headerShown:false}}
        >
            <RestaurantStack.Screen 
                name="Restaurant"
                component={RestaurantScreen}
            />
            <RestaurantStack.Screen 
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}