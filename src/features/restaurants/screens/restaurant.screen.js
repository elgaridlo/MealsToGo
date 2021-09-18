import React, { useEffect, useContext} from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Pressable,
} from 'react-native'
import { ActivityIndicator, Searchbar, Colors } from 'react-native-paper'
import styled from 'styled-components'
import { SpacerComponent } from '../../../components/spacer/SpacerComponent'
import { RestaurantInfoCard } from '../components/restaurantInfoCard'
import { SafeArea } from '../../../components/utility/SafeAreaComponent'

import { SearchComponent } from '../components/SearchComponent'
import { RestaurantsContext } from '../../../services/restaurants/RestaurantContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
position: absolute; top: 50%; left: 50%;
`

const RestaurantScreen = ({navigation}) => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext)
  return (
    <>
      {/* StatusBar react native digunakan untuk android untuk memberi space ke template
      SafeAreaView digunakan untuk memberikan spasi di ios seperti iphone berponi
    */}
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading 
              size={50}
              style={{marginLeft: -25}}
              animating={true}
              color={Colors.blue300}
            />
          </LoadingContainer>
        )}
        <SearchComponent />

        <RestaurantList
          data={restaurants}
          renderItem={({item}) => {
            return(
            <>
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
              restaurant: item
            })}>
                <SpacerComponent position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                </SpacerComponent>
            </TouchableOpacity>
            </>
            )
          } 
          }
          keyExtractor={(item) => item.name}
        />
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
})

export default RestaurantScreen
