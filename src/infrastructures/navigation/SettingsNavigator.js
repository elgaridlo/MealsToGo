import React, { useEffect } from "react";

import {
    createStackNavigator,
    CardStyleInterpolators
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/SettingsScreen"; 
import { FavoritesScreen } from "../../features/settings/screens/FavoritesScreen";
import { CameraScreen } from "../../features/settings/screens/ CameraScreen";

const SettingsStack = createStackNavigator()

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerMode: 'screen',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name="Setting"
                component={SettingsScreen}
            />
            <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
            <SettingsStack.Screen name="Camera" component={CameraScreen} />
        </SettingsStack.Navigator>
    )
}