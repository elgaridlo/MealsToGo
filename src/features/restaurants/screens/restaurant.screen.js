import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from '../components/restaurantInfoCard';

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
            <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
                <View style={styles.header}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <View style={styles.container}>
                    <RestaurantInfoCard />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 16,
    },
    header: {
        padding: 16,
    }
});


export default RestaurantScreen
