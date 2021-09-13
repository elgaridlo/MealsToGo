import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components';
import { RestaurantInfoCard } from '../components/restaurantInfoCard';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};    
`;

const RestaurantListContainer = styled(View)`
    flex:1;
    padding: ${(props) => props.theme.space[3]};
    background-color: white;
`;

const RestaurantScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    // const onClickSearch = query => setSearchQuery(query);
    useEffect(() => {
    }, [searchQuery])
    return (
        <>
            {/* StatusBar react native digunakan untuk android untuk memberi space ke template
      SafeAreaView digunakan untuk memberikan spasi di ios seperti iphone berponi
    */}
            <SafeArea>
                <SearchContainer>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </SearchContainer>
                <RestaurantListContainer>
                    <RestaurantInfoCard />
                </RestaurantListContainer>
            </SafeArea>
        </>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     padding: 16,
    // },
    // header: {
    //     padding: 16,
    // }
});


export default RestaurantScreen
