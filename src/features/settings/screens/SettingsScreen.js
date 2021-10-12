import React, { useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from '../../../components/typography/TextComponent';
import { SpacerComponent } from '../../../components/spacer/SpacerComponent';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components';
import { SafeArea } from '../../../components/utility/SafeAreaComponent';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContex';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { useFocusEffect } from '@react-navigation/core';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({navigation}) => {
    const { onLogout, user } = useContext(AuthenticationContext)
    const [photo, setPhoto] = useState(null)

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`)
        setPhoto(photoUri)
    }

    //trigered setiap kembali ke screen ini dan yg lainnya sama kayak useEffect
    useFocusEffect(() => {
        getProfilePicture(user)
    },[user])
    return (
        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {!photo &&<Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />}
                    {photo &&<Avatar.Image size={180} source={{uri: photo}} backgroundColor="#2182BD" />}
                </TouchableOpacity>
                <SpacerComponent position="top" size="large"> 
                    <Text variant="label">{user.email}</Text>
                </SpacerComponent>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    title="Favorites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favorites")}
                />
                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
}