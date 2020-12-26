import React, { useState, useEffect, useContext } from 'react'
import { Button, StyleSheet, Text, View, Platform, Image, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { PhotoContext } from '../Context/clickedContext';

const Post = ({ navigation }) => {
    const [photoUri, setPhotoUri] = useContext(PhotoContext);
    const [image, setImage] = useState(photoUri);

    useEffect(() => {
        (async ()=>{
            if(Platform.OS !== 'web'){
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if(status !== 'granted'){
                    alert("Sorry, You have to allow camera roll permission")
                }
            }
        })()
    }, []);
    
    const pickImage = async ()=> {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            allowsMultipleSelection: true,
            aspect: [4, 4],
            quality: 1,
        });

        if(!result.cancelled){
            setImage(result.uri)
        }
    }

    return (
        <View >
            <ImageBackground blurRadius={4} source={{ uri: image}} style={styles.photoContainer}>
                <View style={styles.innerContainer}>
                {image ? 
                    <Image style={styles.selectedImage} source={{uri: image}} /> :
                    <Text style={styles.emptyPhoto}>No Photo is selected</Text>
                }
                </View>
            </ImageBackground>
            <View style={styles.postImages}>
                <Text style={styles.text}> Pick Image from Gallery</Text>
                <AntDesign style={styles.btns} name="pluscircleo" onPress={pickImage} size={50} />
            </View>
            <View style={styles.postImages} >
                <Text style={styles.text}>Click Photo</Text>
                <AntDesign style={styles.btns} onPress={()=> navigation.push("CameraScreen")} name="camerao" size={50} />
            </View> 
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    photoContainer: {
        width: 500,
        height: 500,
        marginVertical: 50,
    },
    emptyPhoto: {
        marginVertical: 200,
        marginHorizontal: 150,
        width: 80
    },
    innerContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingRight: 100
    }, 
    selectedImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    postImages: {
        width: 380,
        backgroundColor: "#cfd3ce",
        height: 70,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
        marginHorizontal: 20,
    },
    btns: {
        flexDirection: "row",
        alignSelf: "center",
    }
})
