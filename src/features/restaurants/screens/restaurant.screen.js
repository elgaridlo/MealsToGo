import React, { useContext} from 'react'
import {
  StyleSheet
} from 'react-native'
import { ActivityIndicator, Searchbar, Colors } from 'react-native-paper'
import styled from 'styled-components'
import { SpacerComponent } from '../../../components/spacer/SpacerComponent'
import { RestaurantInfoCard } from '../components/restaurantInfoCard'
import { SafeArea } from '../../../components/utility/SafeAreaComponent'

import { RestaurantList } from '../components/RestaurantListComponent-Style'
import { SearchComponent } from '../components/SearchComponent'
import { RestaurantsContext } from '../../../services/restaurants/RestaurantContext'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FavoritesContext } from '../../../services/favorites/FavoriteContext'
import { useState } from 'react/cjs/react.development'
import { FavoritesBar } from '../../../components/favorites/FavoritesBarComponent'
import { FadeInView } from '../../../components/animations/FadeAnimation'

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
position: absolute; top: 50%; left: 50%;
`

const RestaurantScreen = ({navigation}) => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext)
  const {favorites} = useContext(FavoritesContext)
  const [isToggled, setIsToggled] = useState(false)
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
        <SearchComponent
          isFavoritesToggled={isToggled}
          onFavoritesToggle={() => setIsToggled(!isToggled)}
        />

          {isToggled && <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />}

        <RestaurantList
          data={restaurants}
          renderItem={({item}) => {
            return(
            <>
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
              restaurant: item
            })}>
                <SpacerComponent position="bottom" size="large">
                    <FadeInView>
                      <RestaurantInfoCard restaurant={item} />
                    </FadeInView>
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
