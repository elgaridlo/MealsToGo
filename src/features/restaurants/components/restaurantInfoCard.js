import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { SpacerComponent } from '../../../components/spacer/SpacerComponent'
import { Text } from '../../../components/typography/TextComponent'
import star from '../../../../assets/star'
import open from '../../../../assets/open'

import {
    Icon, RestaurantCard, RestaurantCardCover, Titles, Address, Info, Rating, Section, SectionEnd, Open
} from './restaurantInfoCard-Style'


export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Nyokelat Sama Kamu',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ['https://photo.kontan.co.id/photo/2021/05/18/1615856826p.jpg'],
        address = 'Jl. Gemolong Raya No 1 Gemolong',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)))
    // console.log(ratingArray)

    return (
        <>
            <RestaurantCard>
                <RestaurantCardCover style={styles.imageStyle} source={{ uri: photos[0] }} />
                <Info>
                    <Text variant="label">{name}</Text>
                    <Section>
                        <Rating style={{ flexDirection: 'row' }}>
                            {ratingArray.map((item, index) => (
                                <SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20} />)
                            )}
                        </Rating>
                        <SectionEnd>
                            {isClosedTemporarily && (
                                <Text variant="error" >CLOSED TEMPORARILY</Text>
                            )}
                            <SpacerComponent position="left" size="large" >
                                {isOpenNow && <Open xml={open} width={20} height={20} />}
                            </SpacerComponent>
                            <SpacerComponent position="left" size="large" >
                                <Icon source={{ uri: icon }} />
                            </SpacerComponent>
                        </SectionEnd>
                    </Section>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        padding: 5,
        backgroundColor: 'white'
    }
})