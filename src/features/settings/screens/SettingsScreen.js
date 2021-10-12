import React, { useContext } from 'react';
import { Text } from '../../../components/typography/TextComponent';
import { SpacerComponent } from '../../../components/spacer/SpacerComponent';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components';
import { SafeArea } from '../../../components/utility/SafeAreaComponent';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContex';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({navigation}) => {
    const { onLogout, user } = useContext(AuthenticationContext)
    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
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