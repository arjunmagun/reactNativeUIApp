import { SreeKrushnadevaraya_400Regular } from '@expo-google-fonts/dev';
import React from 'react'
import { View, Text, StyleSheet, Platform, Dimensions, Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const {width, height} = Dimensions.get('window');

export default function SearchScreen() {
    const uri = "https://images.unsplash.com/photo-1606668254479-51847aa54801?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
    return (
        <SafeAreaView>
            <TextInput style={styles.input} placeholder="Search" />
            <ScrollView style={styles.container}>
                <View style={styles.postContainer} >
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image 
                        style={
                            {...styles.posts, 
                            width: width, 
                            height: height / 3.2
                        }
                        } 
                        source={{uri: uri}} 
                    />
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image style={styles.posts} source={{uri: uri}} />
                    <Image 
                        style={{...styles.posts, 
                            width: width / 1.58,
                            height: height / 2
                        }} 
                        source={{uri: uri}} 
                    />
                    <Image style={styles.posts} source={{uri: uri}} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEEEE",
    },
    input: {
        height: 40,
        width: width - 40,
        backgroundColor: "lightgrey",
        borderRadius: 50,
        padding: 10,
        margin: 10,
        alignSelf: 'center'
    },
    postContainer:{
        margin: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 70
    },
    posts: {
        height: height / 7,
        width: width / 3.18,
        margin: 2
    }
})