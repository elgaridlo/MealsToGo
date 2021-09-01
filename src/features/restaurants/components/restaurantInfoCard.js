import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Nyokelat',
        icon,
        photos = ['https://photo.kontan.co.id/photo/2021/05/18/1615856826p.jpg'],
        address = 'Gemolong',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant
    return (
        <>
            <Card>
                <Card.Cover style={styles.imageStyle} source={{ uri: photos[0] }} />
                <Card.Content>
                    <Paragraph>Restaurant Name : {name}</Paragraph>
                </Card.Content>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        padding: 5,
        backgroundColor: 'white'
    }
})