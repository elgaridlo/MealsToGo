import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { AccountScreen } from "../../features/account/screen/AccountScreen";
import { LoginScreen } from "../../features/account/screen/LoginScreen";
import { RegisterScreen } from "../../features/account/screen/RegisterScreen";

const Stack = createStackNavigator()

export const AccountNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="Main" component={AccountScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}