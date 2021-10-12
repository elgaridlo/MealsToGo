import React, { useContext } from "react";
import { FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";
import { SpacerComponent } from "../../../components/spacer/SpacerComponent";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { FavoritesContext } from "../../../services/favorites/FavoriteContext";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext";
import { RestaurantInfoCard } from "../../restaurants/components/restaurantInfoCard";
import { RestaurantList } from "../../restaurants/components/RestaurantListComponent-Style";


const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
position: absolute; top: 50%; left: 50%;
`


export const FavoritesScreen = ({navigation}) => {
    const {isLoading, restaurant, error} = useContext(RestaurantsContext)
    const {favorites} = useContext(FavoritesContext)
    return favorites.length ? (
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

        <RestaurantList
          data={favorites}
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
    ) : (
      <NoFavoritesArea
      style={{alignItems: "center", justifyContent: "center"}}
      >
        <Text center>No favorites yet</Text>
      </NoFavoritesArea>
    )
}