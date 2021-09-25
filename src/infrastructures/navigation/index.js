import React from "react";
import { useContext } from "react/cjs/react.development";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContex";
import { AppNavigator } from "./AppNavigation";
import { AccountNavigator } from "./AccountNavigator";

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext)
    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : (
                <AccountNavigator />
            )}
        </NavigationContainer>
    )
}