import React, { useState, useEffect, useRef, useContext }  from "react"
import { View, TouchableOpacity } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from 'expo-camera'
import { Text } from "../../../components/typography/TextComponent"
import styled from "styled-components"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContex";

const ProfileCamera = styled(Camera)`
    height: 100%;
    width: 100%;
`

export const CameraScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const cameraRef = useRef()
    const {user} = useContext(AuthenticationContext)

    const snap = async () => {
        if(cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
            navigation.goBack()
        }
    }

    useEffect(() => {
      (async () => {
        //   ask for permission
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return(

        <TouchableOpacity onPress={snap}>
            <ProfileCamera 
                ref={(camera) => cameraRef.current= camera}
                type={type}>
                <TouchableOpacity
                    
                    onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                    }}>
                    <Text> Flip </Text>
                </TouchableOpacity>
            </ProfileCamera>
            </TouchableOpacity>

    )
}
