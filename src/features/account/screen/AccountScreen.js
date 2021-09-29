import React from "react";
import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { SpacerComponent } from "../../../components/spacer/SpacerComponent";
import { AccountBackground, AccountContainer, AccountCover, AuthButton } from "../components/AccountStyles";


export const AccountScreen = ({navigation}) => {
    return (
        <AccountBackground> 
            <AccountCover/>
            <AccountContainer>
               <AuthButton
                icon='lock-open-outline'
                mode='contained'
                onPress={() => navigation.navigate("Login")}
               >
                   Login
               </AuthButton>
                <SpacerComponent size='large'/>
                <AuthButton
                icon='lock-open-outline'
                mode='contained'
                onPress={() => navigation.navigate("Register")}
               >
                   Register
               </AuthButton>
            </AccountContainer>
        </AccountBackground>
    )
}