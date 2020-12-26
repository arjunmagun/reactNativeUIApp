import React, { useState, useEffect, useRef, useContext } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Camera } from "expo-camera";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { PhotoContext } from '../Context/clickedContext';
import { NavigationContainer } from '@react-navigation/native';

export default function CameraScreen({ navigation }) {
    const [hasPermission, SethasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photoUri, setPhotoUri] = useContext(PhotoContext);
    const cameraRef = useRef(null)

    const takePictures = async ()=> {
        if(cameraRef){
            // const options = { base64: true }
            let photo = await cameraRef.current.takePictureAsync();
            setPhotoUri(photo.uri);
            navigation.push("Post");
        } else{
            console.log("not taken");
        }
    }
    
    useEffect(()=>{
        (async ()=>{
            const { status } = await Camera.requestPermissionsAsync();
            SethasPermission(status === 'granted');
        })();
    }, []);

    if(hasPermission === null){
        return <View />
    }
    if(hasPermission === false){
        return <Text> No permission to Camera</Text>
    }
    return (
        <View style={styles.contianer}>
            <Camera 
                style={styles.camera} 
                ratio="16:9" 
                type={type}
                ref={cameraRef}
                autoFocus= "on"
            > 
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "transparent",
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        style={styles.flipContainer}
                        onPress={()=>{
                            setType(
                                type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                        }}>
                                <AntDesign style={styles.flipbtn} name="retweet" size={60} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.clickContainer}
                        onPress={()=> takePictures()}
                    >
                        <MaterialCommunityIcons 
                            name="camera-enhance" 
                            size={60} 
                            style={styles.clickbtn} />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EEEEEE"
    },
    camera: {
        flex: 1,
        width: "100%",
        // height: 350,
        marginTop: 40
    },
    clickContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 500,
    },
    flipContainer: {
        margin: 50,
        width: 60
    },
    clickbtn: {
        color: "white",
        width: 60,
    },
    flipbtn : {
        color: "white",
        width: 60
    },
    clickedPhoto: {
        width: 400,
        height: 600,
        marginTop: 40,
    }
})